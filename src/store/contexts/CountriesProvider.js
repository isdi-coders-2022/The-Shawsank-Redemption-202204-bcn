import { useEffect, useReducer } from "react";
import { loadCountries } from "../actions/ActionCreator";
import countriesReducer from "../reducers/countriesReducer";
import Context from "./CountriesContext";

const CountriesProvider = ({ children }) => {
  const initialData = {
    page: 0,
    countries: [],
    loaded: false,
  };

  const [state, countriesDispatch] = useReducer(countriesReducer, initialData);

  useEffect(() => {
    (async () => {
      const fetchCountriesData = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      const finalCountriesData = await fetchCountriesData.json();
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
