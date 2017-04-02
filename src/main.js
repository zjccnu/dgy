// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios  from 'axios'
Vue.config.productionTip = false
/*导入全局变量*/
Vue.prototype.baseUrl="http://localhost:8088/androiddemoMVC/index.php/admin/Vue/";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
