import React from "react";


const TableFooter = ({
  currentPage,
  handleSelectPage,
  handleSearchString,
  numberOfPages,
}) => {
  const renderSelectOptions = (pages) => {
    const selectOptions = [...Array(pages).keys()].map((value) => (value += 1));
    return selectOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <tfoot>
      <tr>
        <td colSpan="3">
          <input type="text" onChange={handleSearchString}  placeholder="Search Company" />
        </td>
        <td colSpan="3">
            <label>Select Page  </label>
          <select onClick={handleSelectPage} defaultValue={currentPage} >
            {renderSelectOptions(numberOfPages)}
          </select>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
