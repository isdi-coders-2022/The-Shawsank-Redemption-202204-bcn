const finalCountriesData = [];
console.log(finalCountriesData);

const getCountriesData = async () => {
  const fetchCountriesData = await fetch("https://restcountries.com/v3.1/all");
  const finalCountriesData = await fetchCountriesData.json();

  finalCountriesData.sort((a, b) => {
    let countryA = a.name.common.toUpperCase();
    let countryB = b.name.common.toUpperCase();
    return countryA < countryB ? -1 : countryA > countryB ? 1 : 0;
  });

  console.log(finalCountriesData);
};

getCountriesData();

export default getCountriesData;
