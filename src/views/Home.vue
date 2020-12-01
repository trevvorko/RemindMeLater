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
      classes: [{name: "EECS493"}],
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
      .catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>
