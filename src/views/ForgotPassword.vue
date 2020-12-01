<template>
    <div class="container">
        <div class="row vh-100 align-items-center">
            <div class="col-lg-6 offset-lg-2 rounded shadow-lg p-3 mb-5 bg-white align-self-center d-inline-flex">
                <div class="container m-2">
                    <h1>RemindMeLater!</h1>
                    <h5>Password Reset</h5>
                    <form>
                        <div v-if="!emailSent" class="row p-1">
                            <input v-model="email.value" type="text" class="form-control" placeholder="Email">
                            <span class="text-danger" v-if="email.error">{{ email.error }}</span>
                        </div>         
                        <div class="row p-1">
                            <div class="col-md-4 offset-md-4">
                                <h5 v-if="emailSent">Email Sent!</h5>
                                <button v-if="!emailSent" v-on:click="resetPassword()" type="button"  class="btn btn-primary btn-block mx-auto">Request Reset</button>
                                <button v-on:click="backToSignIn()" type="button"  class="btn btn-secondary btn-block mx-auto">Back</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
    </div>
</template>

<script>
import router from "../router/index.js"
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'ForgotPassword',
  data: function() {
    return {
      email: {
          value: '',
          error: ''
      },
      emailSent: false
    }
  },
  methods: {
      resetPassword: function() {
          if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email.value)) {
              this.email.error = '';
              firebase.auth().sendPasswordResetEmail(this.email.value)
              .then(() => {
                  this.emailSent = true;
              }).catch((error) => {
                  console.log(error);
                  this.email.error = "An error occured while sending password reset email"
              })
          } else {
              this.email.error = "This value should be an email address"
          }
      },
      backToSignIn: function() {
          router.push('/signin')
      }
  }
}

</script>
