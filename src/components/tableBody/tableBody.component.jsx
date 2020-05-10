import React from 'react';
import TableRow from '../tableRow/tableRow.component'

const TableBody = ({companies, currentPage}) => {

    const companiesToRender = companies.slice(0,9)

    return(
        <tbody>
                {companiesToRender.map( company => <TableRow key={company.id} company={company}/> )}
        </tbody>
    )
}

export default TableBody