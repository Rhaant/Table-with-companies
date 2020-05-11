import React from 'react';

import './home.styles.scss'

import Header from '../header/header.component'
import Table from '../table/table.component'

const Home = () => (
    <div className="home">
        <Header/>
        <Table/>
    </div>
)

export default Home