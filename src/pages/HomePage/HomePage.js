import { useContext } from "react";
import styled from "styled-components";
import Country from "../../components/Country/Country";
import FilterContinent from "../../components/FilterContinent/FilterContinent";
import Context from "../../store/contexts/Context";
import Footer from "../../components/Footer/Footer";

const HomePageContainer = styled.div`
  background-color: #eef2f3;
  color: #ffffff;
  width: 100%;

  .country-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  }
`;

const HomePage = () => {
  const { state } = useContext(Context);

  return (
    <>
      <HomePageContainer>
        <FilterContinent />
        <div className="country-cards">
          {state.countries.map((country, index) => (
            <Country key={index} country={country} printedInHomePage={true} />
          ))}
        </div>
      </HomePageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
