import { useContext } from "react";
import styled from "styled-components";
import Country from "../../components/Country/Country";
import FormCountry from "../../components/FormCountry/FormCountry";
import useAPI from "../../hooks/useAPI";
import Context from "../../store/contexts/Context";

const MyCountriesPageContainer = styled.div`
  background-color: #eef2f3;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  min-height: 80vh;
  .country-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  }

  .no-Countries {
    font-size: 50px;
    color: #8399a2;
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
        {state.myCountries.length !== 0 ? (
          <div className="country-cards">
            {state.myCountries.map((country, index) => (
              <Country
                key={index}
                country={country}
                printedInHomePage={false}
              />
            ))}
          </div>
        ) : (
          <p className="no-Countries">You have no countries :(</p>
        )}
      </MyCountriesPageContainer>
    </>
  );
};

export default MyCountriesPage;
