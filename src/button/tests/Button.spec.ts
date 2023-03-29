import Button from "../index";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

// 测试分组
describe('测试Button', () => {
	// mount
	test("mount  @vue/test-utils", () => {
		// @vue/test-utils
		const wrapper = shallowMount(Button, {
			slots: {
				default: 'Buttona'
			}
		});

		// 断言
		expect(wrapper.text()).toBe("Button");

	});
})

describe('测试 button 的 color', () => {
	test("测试默认颜色default", () => {
		const wrapper = shallowMount(Button, {
			slots: {
				default: 'Button'
			}
		});
		expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-500')).toBe(true)
	});
	test("测试红色red", () => {
		const wrapper = shallowMount(Button, {
			slots: {
				default: 'Button'
			},
			props: {
				color: 'red'
			}
		});
		expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-red-500')).toBe(true)
	});
})