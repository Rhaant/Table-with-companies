import React from 'react'

import './table.styles.scss'

class Table extends React.Component {
    constructor(){
        super()
        this.state = {
            companies: [],
            currentPage: 1,
            pagesNumber: 1,
        }
    }

    render(){
        return(
            <div className="table">
                <div className="table-header">Table Header</div>
                <div className="table-body">Table Body</div>
                <div className="table-footer"> Table Footer</div>
            </div>
        )
    }
}

export default Table 