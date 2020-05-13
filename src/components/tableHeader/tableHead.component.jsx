import React from "react";
import "./tableHead.styles.scss";
import PropTypes from 'prop-types'

const TableHead = ({ headers, handleSortChange }) => (
  <thead>
    <tr>
      {headers.map((head) => (
        <th key={head.id}>
          <button value={head.value} onClick={handleSortChange}>
            {head.position}
          </button>
        </th>
      ))}
    </tr>
  </thead>
);

TableHead.propTypes = {
  headers: PropTypes.array.isRequired,
  handleSortChange: PropTypes.func,
}

export default TableHead;
