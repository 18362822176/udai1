// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import elementUi from 'element-ui'
import iView from 'iview'
import Util from './lib/utils'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/iconfont.css'
import './assets/css/styles.css'
import './assets/css/global.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-theme.min.css'
import 'jquery'
Vue.use(elementUi)
Vue.use(iView)
Vue.use(Util)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
