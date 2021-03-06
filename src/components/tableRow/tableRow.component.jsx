import React from "react";
import PropTypes from 'prop-types'

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

TableRow.propTypes = {
  company: PropTypes.object
}

export default TableRow;
