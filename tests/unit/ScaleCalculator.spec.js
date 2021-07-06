import ScaleCalculator from "@/components/ScaleCalculator.vue";
import TopBar from "@/components/TopBar.vue";
import { mount } from "@vue/test-utils";

// test("mount Calc", () => {
//   const wrapper = mount(ScaleCalculator);
//   expect(wrapper.html()).toMatchSnapshot();
// });

test("mount TopBar", () => {
  const wrapper = mount(TopBar);
  expect(wrapper.html()).toMatchSnapshot();
});

// The component to test
const MessageComponent = {
  template: "<p>{{ msg }}</p>",
  props: ["msg"],
};

test("check Props", () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(MessageComponent, {
    propsData: {
      msg: "Hello world",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Hello world");
});
