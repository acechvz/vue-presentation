import Vue from 'vue';
import { store } from './store';

import App from './App.vue';

import './index.css';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
