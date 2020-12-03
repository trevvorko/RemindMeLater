<template>
    <nav class="navbar navbar-light bg-light">
        <router-link class="navbar-brand mb-0 h1" to="/">RemindMeLater</router-link>
        <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-display="static" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img  height="30" width="30" src="@/assets/user.svg" alt="user icon"></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <router-link to="/" class="dropdown-item"><img src="@/assets/home.svg" height="15" width="15"> Home</router-link>
              <router-link to="/settings" class="dropdown-item" ><img src="@/assets/settings.svg" height="15" width="15"> Settings</router-link>
              <button v-on:click="signOut" class="dropdown-item text-danger" ><img src="@/assets/sign-out.svg" height="15" width="15"> Sign out</button>
            </div>
        </div>
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
    }
  }
}
</script>

<style scoped>

</style>
