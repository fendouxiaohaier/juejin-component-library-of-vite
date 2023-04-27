export * from './types/entry' import SmartyUI from './types/entry' export
default SmartyUI ​ declare module 'vue' { export interface GlobalComponents {
  SButton: typeof import("./types/entry").Button,
  JSXButton: typeof import("./types/entry").JSXButton,
  SFCButton: typeof import("./types/entry").SFCButton,
} }