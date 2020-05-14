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
  it('function shoud be called', ()=> {
    const headersTest = [
      {
        id: "test Id 1",
        value: "test Name 1",
        position: "test Position 1",
      },
      {
        id: "test Id 2",
        value: "test Name 2",
        position: "test Position 2",
      },
      {
        id: "test Id 3",
        value: "test Name 3",
        position: "test Position 3",
      },
    ];
    const handleSortChange = jest.fn()
    const component = shallow(<TableHead headers={headersTest} handleSortChange={handleSortChange} />);
    component.find('button').first().simulate('click')
    expect(handleSortChange).toHaveBeenCalled()
  })
  it('button shoud shoud have expected value', ()=> {
    const headersTest = [
      {
        id: "test Id 1",
        value: "test Name 1",
        position: "test Position 1",
      },
      {
        id: "test Id 2",
        value: "test Name 2",
        position: "test Position 2",
      },
      {
        id: "test Id 3",
        value: "test Name 3",
        position: "test Position 3",
      },
    ];
    const handleSortChange = jest.fn()
    const component = shallow(<TableHead headers={headersTest} handleSortChange={handleSortChange} />);
    component.find('button').first().simulate('click')
    expect(component.find('button').first().prop('value')).toEqual("test Name 1")

});
})
