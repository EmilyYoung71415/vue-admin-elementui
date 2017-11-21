import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from '@/store/index'
//  import '../theme/index.css'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
