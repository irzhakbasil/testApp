import Vue from 'vue'
import App from './App.vue'
import VueTables from 'vue-tables-2'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueTables.ClientTable);

new Vue({
  el: '#app',
  render: h => h(App)
});

