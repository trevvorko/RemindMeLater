<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="signOut()">Sign Out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import router from '../router/index.js'

export default {
  name: 'Home',
  data: function() {
    return {
      courses: []
    }
  },
  components: {
    HelloWorld
  },
  created: function() {
    this.setCourses();
  },
  methods: {
    signOut: function() {
      firebase.auth().signOut()
      .then(function() {
        router.push("/signin");
      })
      .catch(function () {
      })
    },
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
