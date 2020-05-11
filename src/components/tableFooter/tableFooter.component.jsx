import React from 'react' 

const TableFooter = ({currentPage, handleSelectPage, handleSearchString, numberOfPages}) => {

    const renderSelectOptions = (pages) => {
        const selectOptions = [...Array(pages).keys()].map((value) => (value += 1));
        return selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ));
      };


    return(
    <tfoot>
        <tr>
            <td><input type="text" onChange={handleSearchString} /></td>
            <td><select onClick={handleSelectPage}>{renderSelectOptions(numberOfPages)}</select></td>
        </tr>
    </tfoot>
    )
}

export default TableFooter