import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #8399a2;
  color: #ffffff;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>previous</p>
      <p>page</p>
      <p>next</p>
    </FooterContainer>
  );
};

export default Footer;
