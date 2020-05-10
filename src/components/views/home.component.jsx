import React from 'react';

import './home.styles.scss'

import Table from '../table/table.component'

const Home = () => (
    <div className="home">
        <div className="header"> Companies Summary </div>
        <Table/>
    </div>
)

export default Home