import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SignIn from '@/views/SignIn.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Settings from "@/views/Settings.vue"
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: SignIn,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/forgot',
    name: 'Forgot Password',
    component: ForgotPassword,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true
    }
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(function(user) {
      if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!user) {
              next({ path: '/signin' });
          } else {
              next();
          }
      } else {
          next();
      }
  });
});

export default router
