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
                    <h6>Delete Account</h6>
                    <div class="row p-1">
                            <input v-model="currentPasswordDelete.value" type="password" class="form-control" placeholder="Current Password">
                            <span class="text-danger" v-if="currentPasswordDelete.error">{{currentPasswordDelete.error}}</span>
                    </div>
                    <div class="row p-1">
                        <button v-if="!clickedDeleteOnce" v-on:click="clickedDeleteOnce = true;" class="btn btn-warning">Delete</button>
                        <button v-if="clickedDeleteOnce" v-on:click="deleteAccount" class="btn btn-danger">CONFIRM DELETE</button>
                    </div>

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
import router from '@/router/index.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
      currentPasswordDelete: {
          value: '',
          error: ''
      },
      successMessage: '',
      clickedDeleteOnce: false,
    }
  },
  components: {
    Nav
  },
  methods: {
      deleteAccount: function() {
        var user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email, 
            this.currentPasswordDelete.value
        );
        user.reauthenticateWithCredential(credential).then(() => {
            this.currentPasswordDelete.error = '';
            user.delete().then(() => {
                firebase.firestore().collection("users").doc(user.uid).delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
                alert('Account has been deleted')
                router.push("/")
            }).catch((error) => {
                console.log(error);
                this.currentPasswordDelete.error = "An error occured while verifying current password"
            });
        }).catch((error) => {
            console.log(error);
            this.currentPasswordDelete.error = "An error occured while verifying current password"
        });
      },
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
