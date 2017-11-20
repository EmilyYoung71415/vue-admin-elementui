import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
//  import '../theme/index.css'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
