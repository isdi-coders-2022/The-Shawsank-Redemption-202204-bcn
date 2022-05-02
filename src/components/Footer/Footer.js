import styled from "styled-components";
import Button from "../Button/Button";

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
  return (
    <FooterContainer>
      <Button text={"previous"} />
      <p>page</p>
      <Button text={"next"} />
    </FooterContainer>
  );
};

export default Footer;
