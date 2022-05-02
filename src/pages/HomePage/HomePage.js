import styled from "styled-components";

const HomePageContainer = styled.div`
  background-color: #eef2f3;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;

  div {
    width: 300px;
    height: 560px;
    margin: 10px;
    background-color: #cad4d8;
    display: inline-block;
    border-radius: 5px;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </HomePageContainer>
  );
};

export default HomePage;
