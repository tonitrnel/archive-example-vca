/* eslint-disable @typescript-eslint/no-unused-vars */
import type Vue, { VNode, VNodeChildren } from 'vue';
import { Location } from 'vue-router';
import { DOMElements, DOMAttributes, CSS } from '~/types/tsx';

declare module '@vue/composition-api' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}

declare global {
  interface CSSProperties extends CSS.Properties {}

  namespace JSX {
    interface Element extends VNode {}

    // 固有的属性
    interface IntrinsicAttributes {
      [attribute: string]: any;
    }

    // 固有的组件
    interface IntrinsicElements {
      [element: string]: any;
    }

    interface ElementAttributesProperty {
      $props: any;
    }

    interface ElementChildrenAttribute {
      children?: {};
    }
  }
}
