import orderCountriesAlphabetically from "../utils/orderCountriesAlphabetically";
import { useContext } from "react";
import Context from "../store/contexts/Context";
import { loadMyCountries } from "../store/actions/ActionCreator";

const useAPI = () => {
  const { countriesDispatch } = useContext(Context);

  const loadCountries = async () => {
    const fetchMyCountriesData = await fetch(
      "https://mycountries-api.onrender.com/countries"
    );
    let finalMyCountriesData = await fetchMyCountriesData.json();
    finalMyCountriesData = orderCountriesAlphabetically(finalMyCountriesData);
    countriesDispatch(loadMyCountries(finalMyCountriesData));
  };

  const addCountry = async (country) => {
    await fetch("https://mycountries-api.onrender.com/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    });
  };
  return { loadCountries, addCountry };
};
export default useAPI;
