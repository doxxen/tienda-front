import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

const socketConnection = SocketIO('tcp://0.tcp.sa.ngrok.io:15480');

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.prototype.$paises = ['Argentina','Chile','Peru','Bolivia','Colombia'],
Vue.config.productionTip = false
Vue.prototype.$envio = 20;
Vue.prototype.$url = 'tcp://0.tcp.sa.ngrok.io:15480';
Vue.prototype.$token = localStorage.getItem('token');
Vue.use (BootstrapVue);
Vue.use(new VueSocketIO({
  debug: true,
  connection: socketConnection,
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
