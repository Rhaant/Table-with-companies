import React from "react";
import "./tableHead.styles.scss";

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
export default TableHead;
