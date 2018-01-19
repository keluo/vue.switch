import Vue from 'vue'
import App from './App.vue'
import Switch from '../src'
Vue.use(Switch)
new Vue({
  render: h => h(App)
}).$mount('#app')