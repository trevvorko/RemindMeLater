<template>
  <div class="home">
    <Nav/>
    <div class="container align-center">
      <span v-if="courses.length === 0">No courses found, click the add course button to get started!</span>
      <button data-toggle="dropdown" class="btn btn-outline-primary my-2 mh-sm-0 mx-5">Add Course</button>
      <form class="dropdown-menu p-4" autocomplete="off">
          <div class="form-group">
            <input v-model="courseName" type="test" class="form-control my-1" id="taskTitleInput" placeholder="Course Name">
            <button type="submit" v-on:click="addCourse" class="btn btn-primary mt-1">Add Course</button>
          </div>  
      </form>
      <button v-if="courses.length !== 0" v-on:click="editMode=!editMode;" class="btn btn-outline-secondary my-2 mh-sm-0 "><span v-if="editMode">Done</span><span v-else>Edit</span></button>
      <ul id="CourseList">
        <li v-for="data in courses" :key="data.created.seconds">
          <Course :data="data" :editMode="editMode" :removeFunction="deleteCourse" :mainKey="data.created.seconds"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Vue from 'vue'
import Nav from '@/components/Nav.vue'
import Course from '@/components/Course.vue'
//import router from '@/router/index.js'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Home',
  data: function() {
    return {
      courses: [],
      courseName: '',
      editMode: false
    }
  },
  components: {
    Nav,
    Course
  },
  created: function() {
    this.setCourses();
  },
  methods: {
    setCourses: function() {
      var tempArray = this.courses;
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
      userRef.get().then(function(doc) {
        if (doc.exists) {
            var array = doc.data();
            for (var i = 0; i < array.courses.length; ++i) {
              var element = array.courses[i];
              tempArray.push(element);
              }
          } else {
            // idToken not found
            console.log("No such document!");
          }
      });
    },
    addCourse: function() {
      if (this.courseName.trim() === '') {
        alert("Course name should not be empty")
        return;
      }
      let course = {title: this.courseName, reminders: [], created: firebase.firestore.Timestamp.now(), color: 'black'}
      this.courses.push(course)
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
      userRef.update({"courses":firebase.firestore.FieldValue.arrayUnion(course)});
      this.courseName = '';
    },
    deleteCourse: function(key) {
      if(confirm("Remove this course?")){
        let index = this.courses.findIndex(x => x.created.seconds === key)
        this.courses.splice(index,1)
        var idToken = firebase.auth().currentUser.uid;
        var userRef = firebase.firestore().collection("users").doc(idToken);
        userRef.get().then(function(doc) {
          var data = doc.data();
          var oldCourses = data["courses"];
          oldCourses.splice(index,1);
          userRef.set(data);
        });
      }
    }
  }
}

</script>

<style scoped>
  #CourseList{
    list-style: none;
  }
</style>