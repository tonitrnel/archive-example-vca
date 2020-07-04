import Vue from 'vue';
import CompositionAPI from '@vue/composition-api';
import App from './views/App';
import '~/utils/sugarInject';

Vue.use(CompositionAPI);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
