<template>
  <div class="home">
    <Nav/>
    <div class="container">
      <div v-for="(data, index) in courses" :key="index">
        <Course :data="data"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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

    },
    addTask: function() {

    },
    deleteCourse: function() {

    },
    deleteTask: function()  {

    }
  }
}

</script>
