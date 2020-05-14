import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/About.vue'
import plp from '../views/plp.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/plp',
  },
    //首页
  {
    path: '/plp',
    name: 'plp',
    component: plp,
    meta: {
        title: '首页'
    }
  },


  {
      path: '/About',
      name: 'About',
      component: () =>
          import ('../views/About.vue'),
      meta: {
          title: '123'
      }
  },


  {
      path: '/Home',
      name: 'Home',
      component: () =>
          import ('../views/Home.vue'),
      meta: {
          title: '456'
      }
  },

  //底部
  {
      path: '/Home',
      name: 'Home',
      component: () =>
          import ('../components/foot.vue'),
      meta: {
          title: '底部'
      }
  },
   
]

const router = new VueRouter({
  routes
})

export default router
