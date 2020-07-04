/// <reference types="node" />
declare namespace NodeJS {
  interface ProcessEnv {
    readonly BASE_URL: string;
    readonly NODE_ENV: 'production' | 'development' | 'test';
    readonly VUE_APP_TITLE: string;
    readonly VUE_APP_VERSION: string;
    readonly VUE_APP_AMAP_KEY: string;
  }
}
