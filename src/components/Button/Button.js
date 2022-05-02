import styled from "styled-components";

const ButtonContainer = styled.div`
  display: inline-block;

  button {
    background-color: #8399a2;
    color: #eef2f3;
    font-size: 30px;
    border-radius: 10px;
    border: none;
    width: 100px;
    height: 50px;
    margin: 0 5px;
  }
`;

const Button = ({ text }) => {
  return (
    <>
      <ButtonContainer>
        <button>{text}</button>
      </ButtonContainer>
    </>
  );
};

export default Button;
