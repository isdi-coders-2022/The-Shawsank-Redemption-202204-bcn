import { useReducer } from "react";
import actualPageReducer from "../reducers/actualPageReducer";
import Context from "./CountriesContext";

const CountriesProvider = ({ children }) => {
  const initialData = {
    page: 0,
  };

  const [state, countriesDispatch] = useReducer(actualPageReducer, initialData);

  return (
    <Context.Provider value={{ state, countriesDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default CountriesProvider;
