<template>  
  <div class="container">
        <div class="row vh-100 align-items-center">
            <div class="col-lg-6 offset-lg-2 rounded shadow-lg p-3 mb-5 bg-white align-self-center d-inline-flex">
                <div class="container m-2">
                    <h1>RemindMeLater!</h1>
                    <form>
                        <div class="row p-1">
                            <input v-model="forms[0].value" type="text" class="form-control" placeholder="Email">
                            <span class="form-error" v-if="forms[0].error">{{ forms[0].error }}</span>
                        </div>         
                        <div class="row p-1">
                            <input v-model="forms[1].value" type="password" class="form-control" placeholder="Password">
                            <span class="form-error" v-if="forms[1].error">{{ forms[1].error }}</span>
                        </div>
                        <transition name="fade">
                            <div v-if="showSignUpScreen" class="row p-1">
                                <input v-model="forms[2].value" type="password" class="form-control" placeholder="Confirm Password">
                                <span class="form-error" v-if="forms[2].error">{{ forms[2].error }}</span>
                            </div>
                        </transition>
                        <div v-if="!showSignUpScreen" class="row p-1">
                            <div class="col-md-4 offset-md-4">
                                <button v-on:click="signIn()" type="button" class="btn btn-block btn-primary mx-auto">Sign In</button>
                            </div>
                        </div>
                        <div class="row p-1">
                            <div class="col-md-4 offset-md-4">
                                <button v-if="!showSignUpScreen" v-on:click="showSignUpScreen=true;" type="button"  class="btn btn-secondary btn-block mx-auto">Create Account</button>
                                <button v-if="showSignUpScreen" v-on:click="registerUser()" type="button"  class="btn btn-primary btn-block mx-auto">Create Account</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
  </div>
</template>

<script>
import router from '../router/index.js';
import firebase from 'firebase'

export default {
  name: 'SignIn',
  data: function() {
    return {
      showSignUpScreen: false,
      forms: [{
            key: 'Email',
            value: '',
            error: ''
        },
        {
            key: 'Password',
            value: '',
            error: ''
        },{
            key: 'Confirmed password',
            value: '',
            error: ''
        }
        ]
    }
  },
  methods: {
      signIn: function() {
        if (!validate(this.showSignUpScreen, this.forms)) {
          let email = this.forms[0].value;
          let password = this.forms[1].value;
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log(user);
            router.push("/");
          })
          .catch((error) => {
              var errorCode = error.code;
              console.log(errorCode);
              var errorMessage = error.message;
              console.log(errorMessage);
          });
        }
          
      },
      registerUser: function() {
        if (!validate(this.showSignUpScreen, this.forms)) {
            let email = this.forms[0].value;
            let password = this.forms[1].value;
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                router.push("/");
            })
            .catch((error) => {
                var errorCode = error.code;
                console.log(errorCode);
                var errorMessage = error.message;
                console.log(errorMessage);
            });  
        }
      }
  }
}


var validate = function(showSignUpScreen, forms) {
    let hasError = false;
    forms.forEach(function(element) {
        if ( (element.key === 'Full Name' || element.key === 'Confirmed password') && !showSignUpScreen ) {
            // Only add error to full name and confirmed password if user is signing up
            return;
        }

        if (!element.value) {
            // Input form is empty
            hasError = true;
            element.error = element.key + ' should not be blank';
        } else {
            element.error = '';
        }
    })

    if (showSignUpScreen) {
        if(forms[1].value !== forms[2].value && !forms[1].error && !forms[2].error) {
            // Passwords do not match and are not empty
            forms[2].error = "Passwords do not match";
            hasError = true;
        }
    }
    return hasError;
}
</script>