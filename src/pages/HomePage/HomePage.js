import styled from "styled-components";
import Country from "../../components/Country/Country";

const HomePageContainer = styled.div`
  background-color: #eef2f3;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const HomePage = () => {
  const dummyCountry = {
    img: "/images/canada.jpg",
    name: "Canada",
    nativeName: "Canada",
    region: "America",
    capital: "Ottawa",
    population: "38.586.325",
    language: "french",
  };

  return (
    <HomePageContainer>
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
      <Country country={dummyCountry} />
    </HomePageContainer>
  );
};

export default HomePage;
