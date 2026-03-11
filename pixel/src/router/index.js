import HomeScreen from '@/views/homeScreen.vue'
import jumpGame from '@/views/jumpGame.vue'
import TestAnimation from '@/views/testAnimation.vue'
import TestBgCh from '@/views/testBgCh.vue'
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
      component: jumpGame,
    },
    {
      path:'/tst',
      name:"tst",
      component: TestBgCh,
    },
    {
      path:'/tstAA',
      name:"tstAA",
      component: TestAnimation,
    },
  ],
})

export default routes