import { screen } from "@testing-library/react";
import Calculator from "../components/Calculator";
import { shallow, mount, render } from "enzyme";

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[testData='${attr}']`);
  return wrapper;
};

const setUp = (props = {}) => {
  const component = shallow(<Calculator {...props} />);
  return component;
};

describe("Calculator Test", () => {
  let component;
  beforeEach(() => {
    component = setUp(<Calculator />);
  });

  describe("render", () => {
    test("renders buttons", () => {
      // console.log(component.debug());
      for (let btn of [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        "c",
        "=",
      ]) {
        expect(findByTestAttr(component, `btn-${btn}`).text()).toBe(btn);
      }
    });

    test("should screen initialize to zero", () => {
      expect(findByTestAttr(component, `badge-screen`).text()).toBe("0");
    });
  });

  describe("calculation", () => {
    let screenText;
    beforeEach(() => {});
    test("should render 2 with 1+1=", () => {
      for (let btn of ["1", "+", "1", "="]) {
        findByTestAttr(component, `btn-${btn}`).simulate("click");
      }
      screenText = findByTestAttr(component, `badge-screen`).text();
      expect(screenText).toBe("2");
    });

    test("should render 10 with 2*5=", () => {
      for (let btn of ["2", "*", "5", "="]) {
        findByTestAttr(component, `btn-${btn}`).simulate("click");
      }
      screenText = findByTestAttr(component, `badge-screen`).text();
      expect(screenText).toBe("10");
    });

    test("should render 10 with 1+1 * 5 = ", () => {
      for (let btn of ["1", "+", "1", "*", "5", "="]) {
        findByTestAttr(component, `btn-${btn}`).simulate("click");
      }
      screenText = findByTestAttr(component, `badge-screen`).text();
      expect(screenText).toBe("10");
    });

    test("should render NaN with 1+1 * 5/0 = ", () => {
      for (let btn of ["1", "+", "1", "*", "5", "/", "0", "="]) {
        findByTestAttr(component, `btn-${btn}`).simulate("click");
      }
      screenText = findByTestAttr(component, `badge-screen`).text();
      expect(screenText).toBe("NaN");
    });
  });

  describe("intermediates", () => {
    let screenText;
    beforeEach(() => {});
    test("should render 1+2 with 1+2", () => {
      for (let btn of ["1", "+", "2"]) {
        findByTestAttr(component, `btn-${btn}`).simulate("click");
      }
      screenText = findByTestAttr(component, `badge-screen`).text();
      expect(screenText).toBe("1+2");
    });

    test("should render 2*5 with 1+1 * 5 ", () => {
      for (let btn of ["1", "+", "1", "*", "5"]) {
        findByTestAttr(component, `btn-${btn}`).simulate("click");
      }
      screenText = findByTestAttr(component, `badge-screen`).text();
      expect(screenText).toBe("2*5");
    });
  });
});
