import styled from "styled-components";
import Country from "../../components/Country/Country";
import FormCountry from "../../components/FormCountry/FormCountry";

const MyCountriesPageContainer = styled.div`
  background-color: #eef2f3;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const MyCountriesPage = () => {
  const dummyCountry = {
    flags: {
      svg: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b1/Bandera_de_Wakanda.png/revision/latest?cb=20190823173054&path-prefix=es",
    },
    name: { common: "Maripuri", official: "Maripuri" },
    region: "Africa",
    capital: "Wakanda",
    population: "500",
  };
  return (
    <>
      <FormCountry />
      <MyCountriesPageContainer>
        <Country country={dummyCountry} />
      </MyCountriesPageContainer>
    </>
  );
};

export default MyCountriesPage;
