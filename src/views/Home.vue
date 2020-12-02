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
      classes: [],
    }
  },
  components: {
    HelloWorld
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
    getCourses: function() {

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
