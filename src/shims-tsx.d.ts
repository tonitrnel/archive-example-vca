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

    // Common attributes of all components (including custom components)
    interface IntrinsicAttributes {
      [attribute: string]: any;
    }
    
    interface IntrinsicElements {
      [element: string]: any;
    }
    // Read "$props" field in the custom components return type as property of the components
    interface ElementAttributesProperty {
      $props: any;
    }

    interface ElementChildrenAttribute {
      children?: {};
    }
  }
}
