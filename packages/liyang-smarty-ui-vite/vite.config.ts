/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import Unocss from "../../config/unocss";

// https://vitejs.dev/config/

const rollupOptions = {
  // 作用是将该模块保留在 bundle 之外，比如在数组中添加了 vue ，就是为了不让 vue 打包到组件库中
  external: ["vue", "vue-router"],
  // 这个配置用于 umd/iffe 包中，意思是全局中的某个模块在组件库中叫什么名字。比如：
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 添加UnoCSS插件
    Unocss(),
  ],
  build: {
    // 输出单独 source文件
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    lib: {
      entry: "./src/entry.ts",
      // 生成包的名字，在 iife/umd 包，同一页上的其他脚本可以访问它
      name: "SmartyUI",
      // 是文件名，其实只是一个输出文件名的前缀，默认情况下会和模块类型配合组成最终的文件名。
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
