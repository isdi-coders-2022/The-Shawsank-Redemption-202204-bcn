import styled from "styled-components";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import IconButton from "../IconButton/IconButton";
import useAPI from "../../hooks/useAPI";

const CountryContainer = styled.div`
  color: #8399a2;
  width: 300px;
  height: 560px;
  margin: 10px;
  background-color: #cad4d8;
  display: inline-block;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 3px rgba(0, 0, 0, 0.51);
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.51);
  }
  img {
    width: 100%;
    height: 210px;
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
  .country-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
const Country = ({ country }) => {
  const { addCountry } = useAPI();
  return (
    <CountryContainer>
      <IconButton src={"images/add.png"} action={() => addCountry(country)} />
      <img src={country.flags.svg} alt="" />
      <h3>{country.name.common}</h3>
      <h4>{country.name.official}</h4>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <div className="country-buttons">
        <Button text={"+ Info"} />
      </div>
    </CountryContainer>
  );
};

Country.propTypes = {
  country: PropTypes.any.isRequired,
};

export default Country;
