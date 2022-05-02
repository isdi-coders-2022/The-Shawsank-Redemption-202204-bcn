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
  return (
    <HomePageContainer>
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </HomePageContainer>
  );
};

export default HomePage;
