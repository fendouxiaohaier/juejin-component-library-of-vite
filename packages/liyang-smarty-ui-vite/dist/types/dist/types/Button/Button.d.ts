import { PropType } from "vue";
export type ISize = "small" | "medium" | "large";
export type IColor = "black" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
export declare const props: {
    size: {
        type: PropType<ISize>;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<IColor>;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<ISize>;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<IColor>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ISize>;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<IColor>;
        default: string;
    };
}>>, {
    size: ISize;
    icon: string;
    color: IColor;
}>;
export default _default;
