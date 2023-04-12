import { defineComponent, PropType } from "vue";
import "uno.css";

export type ISize = "small" | "medium" | "large";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },

  icon: {
    type: String,
    default: "",
  },

  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
};

const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm",
  },
  medium: {
    x: "3",
    y: "1.5",
    text: "base",
  },
  large: {
    x: "4",
    y: "2",
    text: "lg",
  },
};

export default defineComponent({
  name: "SButton",

  // template:'<button>MyButton</button>'

  props, // 注册属性

  setup(props, { slots }) {
    return () => (
      <button
        class={`
        py-${size[props.size].y}
          px-4 
          font-ssemibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
