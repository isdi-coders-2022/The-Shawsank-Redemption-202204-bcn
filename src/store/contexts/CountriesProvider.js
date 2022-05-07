import { useEffect, useReducer } from "react";
import orderCountriesAlphabetically from "../../utils/orderCountriesAlphabetically";
import { loadCountries } from "../actions/ActionCreator";
import countriesReducer from "../reducers/countriesReducer";
import Context from "./Context";

const CountriesProvider = ({ children }) => {
  const initialData = {
    page: 0,
    countries: [],
    myCountries: [],
    loaded: false,
    newCountry: {
      flags: {
        svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      },
      name: { common: "", official: "" },
      region: "",
      capital: [""],
      population: "",
      area: "",
      independent: "",
      timeZone: [""],
    },
  };

  const [state, countriesDispatch] = useReducer(countriesReducer, initialData);

  useEffect(() => {
    (async () => {
      const fetchCountriesData = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      let countriesData = await fetchCountriesData.json();
      countriesData = orderCountriesAlphabetically(countriesData);
      const finalCountriesData = countriesData.slice(0, 25);
      countriesDispatch(loadCountries(finalCountriesData));
    })();
  }, []);

  return (
    <Context.Provider value={{ state, countriesDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default CountriesProvider;
