import Vue from 'vue'
import App from './App.vue'
import MineUI from '../packages/index'

Vue.config.productionTip = false

Vue.use(MineUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
