<template>
  <div class="home">
    <Nav/>
    
    <div class="container">
      <button v-on:click="addCourse" class="btn btn-putline-primary my-2 mh-sm-0">Add Course</button>
      <ul id="CourseList">
        <li v-for="(data, index) in courses" :key="index">
          <Course :data="data"/>
          <button v-on:click="deleteCourse(index)" class="btn btn-outline-danger my-2 mh-sm-0">Remove Course</button>
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
      courses: []
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
      this.$dialog.prompt("Input course name",Text).then(result=>{
        this.courses.push({title: result.data,reminders: []})
      })
    },
    deleteCourse: function(index) {
      this.courses.splice(index,1)
    }
  }
}

</script>

<style scoped>
  #CourseList{
    display:flex;
    flex-wrap:wrap;
    list-style:none;
  }
</style>