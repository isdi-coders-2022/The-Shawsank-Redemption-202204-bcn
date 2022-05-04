import styled from "styled-components";
import PropTypes from "prop-types";

const IconButtonContainer = styled.div`
  display: inline-block;
  position: absolute;

  button {
    border: none;
    background: none;
    cursor: pointer;
    width: 65px;
    height: 65px;

    img {
      width: 65px;
      height: 65px;
    }
  }
`;

const IconButton = ({ src, action }) => {
  return (
    <IconButtonContainer>
      <button onClick={action}>
        <img src={src} alt="icon" />
      </button>
    </IconButtonContainer>
  );
};

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
};

export default IconButton;
