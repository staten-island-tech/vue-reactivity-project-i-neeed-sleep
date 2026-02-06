import HomeScreen from '@/views/homeScreen.vue'
import JumpGame from '@/views/jumpGame.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:"home",
      component: HomeScreen,
    },
    {
      path:'/game',
      name:"game",
      component: JumpGame,
    },
  ],
})

export default routes