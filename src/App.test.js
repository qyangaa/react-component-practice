import { screen } from "@testing-library/react";
import App from "./App";
import Testing from "./components/Testing";
import { shallow, mount, render } from "enzyme";

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = (props = {}) => {
  const component = shallow(<Testing {...props} />);
  return component;
};

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(<Testing />);
  });

  test("renders title of counter", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render button with text of `increment`", () => {
    expect(findByTestAttr(wrapper, "increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(findByTestAttr(wrapper, "counter-value").text()).toBe("0");
  });

  test("should increment counter value when click on increment button", () => {
    findByTestAttr(wrapper, "increment-btn").simulate("click");
    expect(findByTestAttr(wrapper, "counter-value").text()).toBe("1");
  });

  test("should decrement counter value when click on decrement button", () => {
    for (let i = 0; i < 5; i++) {
      findByTestAttr(wrapper, "increment-btn").simulate("click");
    }
    findByTestAttr(wrapper, "decrement-btn").simulate("click");
    expect(findByTestAttr(wrapper, "counter-value").text()).toBe("4");
  });
  test("should decrement counter value when click on decrement button", () => {
    for (let i = 0; i < 5; i++) {
      findByTestAttr(wrapper, "decrement-btn").simulate("click");
    }
    expect(findByTestAttr(wrapper, "counter-value").text()).toBe("0");
  });
});
