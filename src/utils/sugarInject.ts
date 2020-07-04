import { h, defineComponent } from '@vue/composition-api';

// @ts-ignore
defineComponent.createElement = function createElement(
  element: any,
  props: any,
  ...children: any
) {
  console.log(element, { props }, children);
  return h(element, props, children);
};
