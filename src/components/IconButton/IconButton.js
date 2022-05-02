import styled from "styled-components";

const IconButtonContainer = styled.div`
  display: inline-block;
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const IconButton = ({ src, alt, action }) => {
  return (
    <IconButtonContainer>
      <button onClick={action}>
        <img src={src} alt={alt} />
      </button>
    </IconButtonContainer>
  );
};

export default IconButton;
