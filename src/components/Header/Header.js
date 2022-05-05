import { NavLink } from "react-router-dom";
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

    a {
      color: white;
      text-decoration: none;
      font-size: 1.3em;
      transition: 0.3s;
    }

    a:hover {
      color: #dedc8a;
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
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/countries">My Countries</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderContainer>
  );
};

export default Header;
