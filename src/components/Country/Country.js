import styled from "styled-components";

const CountryContainer = styled.div`
  width: 321px;
  height: 560px;
  background-color: #cad4d8;
`;

const Country = () => {
  return (
    <CountryContainer>
      <img src="/images/canada.jpg" alt="" />
      <h3>Canada</h3>
      <h4>Canada</h4>
      <p>Region: America</p>
      <p>Capital: Ottawa</p>
      <p>Population: 38.586.325</p>
      <p>Language: french</p>
    </CountryContainer>
  );
};

export default Country;
