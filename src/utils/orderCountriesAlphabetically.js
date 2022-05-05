const orderCountriesAlphabetically = (apiCountries) => {
  let countries = apiCountries;
  countries.sort((a, b) => {
    let countryA = a.name.common.toUpperCase();
    let countryB = b.name.common.toUpperCase();
    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
    return 0;
  });
  return countries;
};

export default orderCountriesAlphabetically;
