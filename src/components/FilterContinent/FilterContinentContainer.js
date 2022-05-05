import styled from "styled-components";

const FilterContinentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .continents-names-container {
    display: flex;
    flex-direction: column;
  }
  .continents-names-container--hidden {
    z-index: -10;
    display: none;
  }
  button {
    background-color: #c4c4c4;
    border-radius: 0px;
    display: inline-block;
    width: 100%;
  }
`;

export default FilterContinentContainer;
