import React from "react";
import TableHead from "./tableHead.component";
import { shallow } from "enzyme";

describe("TableHead component", () => {
  it("shoud render with out crashing", () => {
    const headersTest = [
      {
        id: "test Id 1",
        name: "test Name 1",
        position: "test Position 1",
      },
      {
        id: "test Id 2",
        name: "test Name 2",
        position: "test Position 2",
      },
      {
        id: "test Id 3",
        name: "test Name 3",
        position: "test Position 3",
      },
    ];
    const component = shallow(<TableHead headers={headersTest} />);
    expect(component).toMatchSnapshot();
  });
});
