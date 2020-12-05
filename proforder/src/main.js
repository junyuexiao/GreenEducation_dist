import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// rest-css
import 'reset-css'
// icon
import './icon/fontawsome'
// ui
import Vuetify from '../src/plugins/vuetify'
// data
import config from './api/config'
Vue.prototype.localConfig = config;

import axios from 'axios'
Vue.prototype.$http = axios

// import './api/request'
// import 'vuetify/dist/vuetify.min.css'


import { Radio,Loadmore,Spinner,Cell,Checklist  } from 'mint-ui';
Vue.component(Checklist.name, Checklist);
Vue.component(Radio.name, Radio);
Vue.component(Loadmore .name, Loadmore);
Vue.component(Spinner.name, Spinner);
Vue.component(Checklist.name, Checklist)
Vue.component(Cell.name, Cell)
Vue.config.productionTip = false


new Vue({
  Vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
