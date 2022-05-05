import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import InfoCountry from "../../components/InfoCountry/InfoCountry";
import Context from "../../store/contexts/Context";

const InfoPageContainer = styled.div`
  background-color: #eef2f3;
  color: #ffffff;
  width: 100%;
  min-height: 80vh;

  h2 {
    color: #8399a2;
  }
  .country-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  }
`;

const InfoPage = () => {
  const { id } = useParams();
  const { state } = useContext(Context);

  const getCountryToShow = () => {
    const countryToShow = state.countries.filter(
      (country) => country.name.common.toLowerCase() === id.toLowerCase()
    );
    return countryToShow[0];
  };
  const detailCountry = getCountryToShow();
  return (
    <InfoPageContainer>
      <div className="country-cards">
        <h2>Thanks for learning with us!</h2>
        <InfoCountry country={detailCountry} />
      </div>
    </InfoPageContainer>
  );
};

export default InfoPage;
