import styled from "styled-components";

const HeaderContainer = styled.div`
  border: 1x solid black;
  width: 100%;
  height: 110px;
  background-color: #8399a2;
  padding-top: 10px;

  h1 {
    color: white;
    text-align: center;
    margin: 15px;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    padding: 0px;

    li {
      color: white;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <header>
        <h1>AC</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>My countries</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    </HeaderContainer>
  );
};

export default Header;
