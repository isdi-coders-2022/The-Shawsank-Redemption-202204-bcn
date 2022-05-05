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
  };

  const [state, countriesDispatch] = useReducer(countriesReducer, initialData);

  useEffect(() => {
    (async () => {
      const fetchCountriesData = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      let countriesData = await fetchCountriesData.json();
      countriesData = orderCountriesAlphabetically(countriesData);
      const finalCountriesData = countriesData.slice(0, 30);
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
