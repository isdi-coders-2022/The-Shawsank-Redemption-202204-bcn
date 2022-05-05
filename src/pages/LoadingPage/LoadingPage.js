import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: black;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-left-color: #09f;

    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  p {
    font-size: 20px;
    color: white;
  }
`;

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <div className="spinnerContainer">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </LoadingContainer>
  );
};

export default LoadingPage;
