import { createRouter, createWebHistory } from 'vue-router'

import Page404 from '../views/404.vue'
import login from '../modules/auth/Login.vue'
import register from '../modules/auth/Register.vue'
import chatPage from '../modules/chat/ChatPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page404
    },
    {
      path: '/login',
      name: 'login',
      component: login,
     
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/chat/:chatName',
      name: 'Chat',
      component: chatPage, // Replace with your actual chat component
    },



    //404
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: Page404
    },
  ]
})



export default router
