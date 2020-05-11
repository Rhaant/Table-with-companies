import React from "react";

import "./table.styles.scss";

import Loading from "../loading/loading.component";
import TableHead from "../tableHeader/tableHead.component";
import TableBody from "../tableBody/tableBody.component";

import {
  fetchCompanies,
  getCompanyIncomes,
  findMonthOfLastIncome,
  calculateCompanyIncomes,
  calculateAvergeCompanyIncome,
  calculateLastMonthIncome,
} from "../../data/functions";

import { headers } from "../../data/headers";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      currentPage: 1,
      pagesNumber: 1,
      isLoading: true,
      headers: headers,
      sortMethod: "id",
      sortDirection: "increment",
      searchString: "",
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const companies = await fetchCompanies();
    console.log(companies);

    Promise.all(
      companies.map(async (company) => {
        const companyIncomes = await getCompanyIncomes(company);
        const monthOfLastIncome = await findMonthOfLastIncome(companyIncomes);

        company.incomeTotal = await calculateCompanyIncomes(companyIncomes);
        company.incomeAverge = await calculateAvergeCompanyIncome(
          companyIncomes
        );
        company.incomesLastMonth = await calculateLastMonthIncome(
          companyIncomes,
          monthOfLastIncome
        );
      })
    ).then(() => this.setState({ companies: companies, isLoading: false }));
  }

  handleSortChange = e => {
    const { sortMethod, sortDirection } = this.state;
    console.log(e.target.value)

    if (e.target.value === sortMethod) {
      if (sortDirection === "increment")
        this.setState({ sortDirection: "decrement" });
      else this.setState({ sortDirection: "increment" });
    } else this.setState({ sortMethod: e.target.value });
  };

  renderTable() {
    const {
      headers,
      companies,
      sortDirection,
      sortMethod,
      currentPage,
      searchString,
    } = this.state;
    return (
      <table className="companies-table">
        <TableHead headers={headers} handleSortChange={this.handleSortChange} />
        <TableBody
          companies={companies}
          currentPage={currentPage}
          sortDirection={sortDirection}
          sortMethod={sortMethod}
          searchString={searchString}
        />
        <tfoot> Table Footer</tfoot>
      </table>
    );
  }

  renderLoading() {
    return <Loading />;
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="wrapper">
        {isLoading ? this.renderLoading() : this.renderTable()}
      </div>
    );
  }
}

export default Table;
