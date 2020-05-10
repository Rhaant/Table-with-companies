import React from "react";

import "./table.styles.scss";

import Loading from '../loading/loading.component'
import TableHead from '../tableHeader/tableHead.component'
import TableBody from '../tableBody/tableBody.component'

import {
  fetchCompanies,
  getCompanyIncomes,
  findMonthOfLastIncome,
  calculateCompanyIncomes,
  calculateAvergeCompanyIncome,
  calculateLastMonthIncome,
} from "../../data/functions";

import { headers } from '../../data/headers'

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      currentPage: 1,
      pagesNumber: 1,
      isLoading: true,
      headers: headers
    };
  }
  componentDidMount(){
    this.fetchData()
  }

  async fetchData() {
        const companies = await fetchCompanies();
        console.log(companies)

        Promise.all(
          companies.map(async (company) => {
            const companyIncomes = await getCompanyIncomes(company);
            const monthOfLastIncome = await findMonthOfLastIncome(
              companyIncomes
            );

            company.incomeTotal = await calculateCompanyIncomes(companyIncomes);
            company.incomeAverge = await calculateAvergeCompanyIncome(
              companyIncomes
            );
            company.incomesLastMonth = await calculateLastMonthIncome(
              companyIncomes,
              monthOfLastIncome
            );
          })
        ).then( () => this.setState({companies: companies, isLoading: false}))
  };

  renderTable(){
    return (
      <table className="companies-table">
        <TableHead headers={this.state.headers}/>
        <TableBody companies={this.state.companies} currentPage={this.state.currentPage} />
        <tfoot> Table Footer</tfoot>
      </table>
    )
  }

  renderLoading(){
    return <Loading />
  }

  render() {

    const {isLoading} = this.state

    return (
      <div className="wrapper">
        {isLoading ? this.renderLoading() : this.renderTable() }
      </div>

    );
  }
}

export default Table;
