import orderCountriesAlphabetically from "../utils/orderCountriesAlphabetically";
import { useContext } from "react";
import Context from "../store/contexts/CountriesContext";
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

  const deleteCountry = async (id) => {
    await fetch(`https://mycountries-api.onrender.com/countries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { loadCountries, deleteCountry };
};

export default useAPI;
