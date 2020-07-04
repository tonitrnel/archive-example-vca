import { defineComponent, provide } from '@vue/composition-api';
import './App.less';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div id="app" class="root">
        <div class="a">A</div>
        <div class="b">B</div>
        <div class="c">C</div>
      </div>
    );
  },
});
