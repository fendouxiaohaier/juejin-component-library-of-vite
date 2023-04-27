import { defineComponent, createVNode } from "vue";
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
const Button = defineComponent({
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
const index = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export {
  Button,
  index as default
};
//# sourceMappingURL=index.mjs.map
