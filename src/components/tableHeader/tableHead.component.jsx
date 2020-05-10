import React from 'react'

const TableHead = ({headers}) => (
    <thead>
        <tr>
            {headers.map(head => <th key={head}>{head}</th>)}
        </tr>
    </thead>
)
export default TableHead