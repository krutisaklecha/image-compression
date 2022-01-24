import Vue from 'vue'
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VuePaginate from 'vue-paginate';


Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VuePaginate);

new Vue({
  render: h => h(App)
}).$mount('#app')
