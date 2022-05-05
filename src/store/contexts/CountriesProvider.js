import { useEffect, useReducer } from "react";
import orderCountriesAlphabetically from "../../utils/orderCountriesAlphabetically";
import { loadCountries } from "../actions/ActionCreator";
import countriesReducer from "../reducers/countriesReducer";
import Context from "./CountriesContext";

const CountriesProvider = ({ children }) => {
  const initialData = {
    page: 0,
    countries: [],
    myCountries: [],
    loaded: false,
  };

  const [state, countriesDispatch] = useReducer(countriesReducer, initialData);

  useEffect(() => {
    (async () => {
      const fetchCountriesData = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      let finalCountriesData = await fetchCountriesData.json();
      finalCountriesData = orderCountriesAlphabetically(finalCountriesData);
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
