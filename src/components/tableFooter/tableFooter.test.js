import React from "react";
import TableFooter from "./tableFooter.component";
import { shallow } from "enzyme";

describe("TableFooter component", () => {
  it("shoud render with out crashing", () => {
    const currentPage = 1;
    const handleSelectPage = jest.fn();
    const handleSearchString = jest.fn();
    const numberOfPages = 30;
    const component = shallow(
      <TableFooter
        currentPage={currentPage}
        handleSelectPage={handleSelectPage}
        handleSearchString={handleSearchString}
        numberOfPages={numberOfPages}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it(' handleSelectPage shoud be called', ()=> {
    const currentPage = 1;
    const handleSelectPage = jest.fn();
    const handleSearchString = jest.fn();
    const numberOfPages = 30;
    const component = shallow(
      <TableFooter
        currentPage={currentPage}
        handleSelectPage={handleSelectPage}
        handleSearchString={handleSearchString}
        numberOfPages={numberOfPages}
      />);
        component.find('select').simulate('click')
        expect(handleSelectPage).toHaveBeenCalled()
  })

  it(' handleSearchString shoud be called', ()=> {
    const currentPage = 1;
    const handleSelectPage = jest.fn();
    const handleSearchString = jest.fn();
    const numberOfPages = 30;
    const component = shallow(
      <TableFooter
        currentPage={currentPage}
        handleSelectPage={handleSelectPage}
        handleSearchString={handleSearchString}
        numberOfPages={numberOfPages}
      />);
        component.find('input').simulate('change')
        expect(handleSearchString).toHaveBeenCalled()
  })
});
