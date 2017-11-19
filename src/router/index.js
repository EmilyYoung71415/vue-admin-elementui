import Vue from 'vue'
import Router from 'vue-router'
import theme from '@/components/theme/theme'
import sleep from '@/components/pages/sleep'
import eat from '@/components/pages/eat'
import study from '@/components/pages/study'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'theme',
      component: theme
    },{
      path:'/sleep',
      name:'sleep',
      component:sleep
    },{
      path:'/eat',
      name:'eat',
      component:eat
    },{
      path:'/study',
      name:'study',
      component:study
    }
  ]
})
