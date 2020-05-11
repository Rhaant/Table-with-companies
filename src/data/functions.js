export const fetchCompanies = () => {
  const url = "https://recruitment.hal.skygate.io/companies";
  return fetch(url).then((rawResponse) => rawResponse.json());
};

export const getCompanyIncomes = (company) => {
  return fetch(`https://recruitment.hal.skygate.io/incomes/${company.id}`)
    .then((rawResponse) => rawResponse.json())
    .then((response) => response.incomes);
};

export const calculateCompanyIncomes = (incomes) => {
  return incomes.reduce((total, income) => {
    return total + parseFloat(income.value);
  }, 0);
};

export const calculateAvergeCompanyIncome = (incomes) => {
  return (
    incomes.reduce((total, income) => {
      return total + parseFloat(income.value);
    }, 0) / incomes.length
  );
};

export const calculateLastMonthIncome = (incomes, lastMonth) => {
  let total = 0;
  incomes.filter((income) =>
    income.date.slice(0, 7) === lastMonth ? (total += Number(income.value)) : 0
  );
  return total;
};

export const findMonthOfLastIncome = (array) => {
  const lastDate = array[array.length - 1];
  const lastMonth = lastDate.date.slice(0, 7);
  return lastMonth;
};

export const calculateNumberOfPages = (array) => {
  return Math.ceil(array.length / 10);
};

export const calculateFirstIndexToDisplay = (currentPage) => {
  return (currentPage - 1) * 10;
};

export const calculateSecondIndexToDisplay = (firstIndex) => {
  return firstIndex + 10;
};

export const filterResult = (arrayToFilter, searchString) => {
  return arrayToFilter.filter((arrayItem) =>
    new RegExp(searchString, "i").test(arrayItem.name)
  );
};
