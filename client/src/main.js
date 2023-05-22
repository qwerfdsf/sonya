import Vue from 'vue';
import VueMask from 'v-mask';

import App from './App.vue';

import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

import './assets/sass/index.sass'

const initApp = async () => {
  Vue.config.productionTip = false;

  Vue.use(VueMask);

  new Vue({
    store,
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
};

initApp();
