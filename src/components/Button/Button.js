import styled from "styled-components";

const ButtonContainer = styled.div`
  display: inline-block;

  button {
    background-color: #8399a2;
    color: #eef2f3;
    font-size: 30px;
    border-radius: 10px;
    border: none;
    padding: 3px 10px;
    cursor: pointer;
  }
`;

const Button = ({ text, action }) => {
  return (
    <>
      <ButtonContainer>
        <button onClick={action}>{text}</button>
      </ButtonContainer>
    </>
  );
};

export default Button;
