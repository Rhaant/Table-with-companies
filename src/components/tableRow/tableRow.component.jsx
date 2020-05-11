import React from "react";

const TableRow = ({ company }) => (
  <tr>
    <td>{company.id}</td>
    <td>{company.name}</td>
    <td>{company.city}</td>
    <td>{company.incomeTotal.toFixed(2)}</td>
    <td>{company.incomeAverge.toFixed(2)}</td>
    <td>{company.incomesLastMonth.toFixed(2)}</td>
  </tr>
);

export default TableRow;
