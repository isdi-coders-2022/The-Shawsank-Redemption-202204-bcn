import styled from "styled-components";
import PropTypes from "prop-types";

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

IconButton.propTypes = {
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default IconButton;
