import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const props = {
  size: {
    type: String,
    default: "medium"
  },
  icon: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: "blue"
  }
};
const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm"
  },
  medium: {
    x: "3",
    y: "1.5",
    text: "base"
  },
  large: {
    x: "4",
    y: "2",
    text: "lg"
  }
};
const MyButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
        py-${size[props2.size].y}
          px-4 
          font-ssemibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props2.color}-500 
          hover:bg-${props2.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.mjs.map
