import React, { useEffect } from "react";
import TableRow from "../tableRow/tableRow.component";

import './tableBody.styles.scss'

import {
  filterResult,
  calculateFirstIndexToDisplay,
  calculateSecondIndexToDisplay,
} from "../../data/functions";

const TableBody = ({
  companies,
  currentPage,
  sortMethod,
  sortDirection,
  searchString,
  handleNumberOfPagesChange,
}) => {
  useEffect(()=> {
    handleNumberOfPagesChange(newNumberOfPages)
  })

  let sortDirectionValues = [];

  sortDirection === "increment"
    ? (sortDirectionValues = [1, -1])
    : (sortDirectionValues = [-1, 1]);

  const companiesAfterFilter = filterResult(companies, searchString);
  const indexOfFirstItemToDisplay = calculateFirstIndexToDisplay(currentPage);
  const indexOdSecondItemToDipslay = calculateSecondIndexToDisplay(
    indexOfFirstItemToDisplay
  );
  const newNumberOfPages = Math.ceil(companiesAfterFilter.length/10);  
  
  const companiesToRender = companiesAfterFilter
    .sort((firstCompany, secondCompany) =>
      firstCompany[sortMethod] > secondCompany[sortMethod]
        ? sortDirectionValues[0]
        : sortDirectionValues[1]
    )
    .slice(indexOfFirstItemToDisplay, indexOdSecondItemToDipslay);


  return (
    <tbody className='table-body'>
      {companiesToRender.map((company) => (
        <TableRow key={company.id} company={company} />
      ))}
    </tbody>
  );
};

export default TableBody;
