import React from "react";
import TableRow from "../tableRow/tableRow.component";

const TableBody = ({
  companies,
  currentPage,
  sorthMethod,
  sortDirection,
  searchString,
}) => {
  let sortDirectionValues = [];

  sortDirection === "increment"
    ? (sortDirectionValues = [1, -1])
    : (sortDirectionValues = [-1, 1]);

  const companiesAfterFilter = companies.filter((company) =>
    new RegExp(searchString, "i").test(company.name)
  );

  const companiesToRender = companiesAfterFilter
    .sort((firstCompany, secondCompany) =>
      firstCompany[sorthMethod] > secondCompany[sorthMethod]
        ? sortDirectionValues[0]
        : sortDirectionValues[1]
    )
    .slice(0, 9);

  return (
    <tbody>
      {companiesToRender.map((company) => (
        <TableRow key={company.id} company={company} />
      ))}
    </tbody>
  );
};

export default TableBody;
