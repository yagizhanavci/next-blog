import { mount } from "enzyme";
import "jsdom-global/register";
import React from "react";

test("hello world", () => {
  const wrapper = mount(<p>Hello Jest!</p>);
  expect(wrapper.text()).toMatch("Hello Jest!");
});
