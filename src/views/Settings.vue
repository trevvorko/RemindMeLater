<template>
    <div>
        <Nav/>
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h2 class="card-title">User Profile</h2>
                    <div><h6>Email</h6><p>{{ getUserEmail() }}</p></div>
                    <h6>Change Password</h6>
                    <form>
                        <div class="row p-1">
                            <input v-model="currentPassword.value" type="password" class="form-control" placeholder="Current Password">
                            <span class="text-danger" v-if="currentPassword.error">{{currentPassword.error}}</span>
                        </div>
                        <div class="row p-1">
                            <input v-model="newPassword.value" type="password" class="form-control" placeholder="New Password">
                        </div>
                        <div class="row p-1">
                            <input v-model="copyPassword.value" type="password" class="form-control" placeholder="Confirm New Password">
                            <span class="text-danger" v-if="copyPassword.error">{{copyPassword.error}}</span>
                        </div>
                        <div class="row p-1">
                            <button v-on:click="attemptPasswordChange" class="btn btn-primary">Confirm</button>
                        </div>
                        <div class="row p-1">
                            <span class="text-success" v-if="successMessage">{{successMessage}}</span>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card mt-5 bg-light">
                <div class="card-body">
                    <h2 class="card-title">Acknowledgements</h2>
                    <div>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
//import router from '@/router/index.js'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Settings',
  data: function() {
    return {
      currentPassword: {
          value: '',
          error: ''
      },
      newPassword: {
          value: ''
      },
      copyPassword: {
          value: '',
          error: ''
      },
      successMessage: ''
    }
  },
  components: {
    Nav
  },
  methods: {
      attemptPasswordChange: function() {
            this.successMessage = ''
            var user = firebase.auth().currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(
                user.email, 
                this.currentPassword.value
            );
            user.reauthenticateWithCredential(credential).then(() => {
                this.currentPassword.error = '';
                if (this.newPassword.value == this.copyPassword.value) {
                    user.updatePassword(this.newPassword.value).then(() => {
                        this.currentPassword.value = ''
                        this.newPassword.value = ''
                        this.copyPassword.value = ''
                        this.successMessage = 'Successfully changed password'
                        this.copyPassword.error = ''
                    }).catch((error) => {
                        console.log(error);
                        this.copyPassword.error = "An error occured while resetting your password"
                    });
                } else {
                    this.copyPassword.error = "Passwords do not match"
                } 
      }).catch((error) => {
                console.log(error);
                this.currentPassword.error = "An error occured while verifying current password"
            });
        },
      getUserEmail: function() {
            return firebase.auth().currentUser.email
      }
  }
}


</script>
