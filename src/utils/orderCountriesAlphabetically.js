const orderCountriesAlphabetically = (countries) => {
  countries.sort((a, b) => {
    let countryA = a.name.common.toUpperCase();
    let countryB = b.name.common.toUpperCase();
    return countryA < countryB ? -1 : countryA > countryB ? 1 : 0;
  });
  return countries;
};

export default orderCountriesAlphabetically;
