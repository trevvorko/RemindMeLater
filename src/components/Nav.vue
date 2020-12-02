<template>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand mb-0 h1" href="#">RemindMeLater</a>
        <button v-on:click="signOut" class="btn btn-outline-primary my-2 my-sm-0">Sign Out</button>
    </nav>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router/index.js'
import 'firebase/auth'


export default {
  name: 'Nav',
  methods: {
    signOut: function() {
      firebase.auth().signOut()
      .then(function() {
        router.push("/signin");
      })
      .catch(function () {
      })
    },
  }
}
</script>

<style scoped>

</style>
