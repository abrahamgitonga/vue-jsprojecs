import Vue from 'vue'
import Router from 'vue-router'
import chat from '../pages/chat'
import login from '../pages/login'
import auth from 'firebase/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat',
      component: chat,
      //security feature upon refresh
      beforeEnter:(to,from,next) => {
        if(!firebase.auth().currentUser){
          next('/login')
        }else{
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
  mode: 'history'
})
