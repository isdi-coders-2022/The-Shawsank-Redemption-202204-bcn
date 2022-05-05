import styled from "styled-components";
import PropTypes from "prop-types";

const InfoCountryContainer = styled.div`
  color: #8399a2;
  width: 300px;
  height: 625px;
  margin: 10px;
  background-color: #cad4d8;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 3px rgba(0, 0, 0, 0.51);
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.51);
  }
  img {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
  }
  h3 {
    margin: 0px 5px;
    font-size: 48px;
  }
  h4 {
    margin: 0px 6px;
    font-size: 30px;
  }
  p {
    font-size: 30px;
    margin: 5px 6px;
  }
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8399a2;
    width: 900px;
    height: 280px;
    margin: 10px;
    background-color: #cad4d8;
    border-radius: 20px;
    box-shadow: 1px 5px 15px 3px rgba(0, 0, 0, 0.51);
    transition: 0.5s;
    &:hover {
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.51);
    }
    img {
      height: 100%;

      border-radius: 20px 0px 0px 20px;
    }
    h3 {
      margin: 0px 5px;
      font-size: 38px;
    }
    h4 {
      margin: 0px 6px;
      font-size: 20px;
    }
    p {
      font-size: 20px;
      margin: 5px 6px;
    }
    .info {
      width: 600px;
      padding-left: 10px;
    }
  }
`;

const InfoCountry = ({ country }) => {
  return (
    <InfoCountryContainer>
      <img src={country.flags.svg} alt="" />
      <div className="info">
        <h3>{country.name.common}</h3>
        <h4>{country.name.official}</h4>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area}</p>
        <p>
          Independent: {country.independent && " Yes"}
          {!country.independent && " No"}
        </p>
        <p>Time Zone: {country.timezones[0]}</p>
      </div>
    </InfoCountryContainer>
  );
};

InfoCountry.propTypes = {
  country: PropTypes.any.isRequired,
};

export default InfoCountry;
