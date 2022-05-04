import { useContext } from "react";
import styled from "styled-components";
import {
  decreaseNumber,
  increaseNumber,
} from "../../store/actions/ActionCreator";
import Button from "../Button/Button";
import Context from "../../store/contexts/CountriesContext";

const FooterContainer = styled.div`
  background-color: #8399a2;
  color: #ffffff;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    transition: 0.3s;
  }

  button:hover {
    color: #dedc8a;
  }
`;

const Footer = () => {
  const { state, countriesDispatch } = useContext(Context);
  debugger;
  return (
    <FooterContainer>
      <Button text={"<"} action={() => countriesDispatch(decreaseNumber())} />
      <p>{state.page}/25</p>
      <Button text={">"} action={() => countriesDispatch(increaseNumber())} />
    </FooterContainer>
  );
};

export default Footer;
