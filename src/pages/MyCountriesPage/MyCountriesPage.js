import { useContext } from "react";
import styled from "styled-components";
import Country from "../../components/Country/Country";
import FormCountry from "../../components/FormCountry/FormCountry";
import useAPI from "../../hooks/useAPI";
import Context from "../../store/contexts/CountriesContext";

const MyCountriesPageContainer = styled.div`
  background-color: #eef2f3;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;

  .country-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  }
`;
const MyCountriesPage = () => {
  const { state } = useContext(Context);
  const { loadCountries } = useAPI();
  loadCountries();
  return (
    <>
      <FormCountry />
      <MyCountriesPageContainer>
        <div className="country-cards">
          {state.myCountries.map((country, index) => (
            <Country key={index} country={country} />
          ))}
        </div>
      </MyCountriesPageContainer>
    </>
  );
};

export default MyCountriesPage;
