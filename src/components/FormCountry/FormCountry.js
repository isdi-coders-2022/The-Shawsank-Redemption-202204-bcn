import { useContext, useState } from "react";
import styled from "styled-components";
import Context from "../../store/contexts/Context";
import Button from "../Button/Button";
import {
  addNewCountryName,
  addNewCountryOfficialName,
  addNewCountryRegion,
  addNewCountryCapital,
  addNewCountryPopulation,
  addNewCountryArea,
  addNewCountryIndependent,
  addNewCountryTimeZone,
} from "../../store/actions/ActionCreator";
import useAPI from "../../hooks/useAPI";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c4c4c4;
    height: 500px;
  }
  .form-container--hidden {
    z-index: -10;
    display: none;
  }
  button {
    background-color: #c4c4c4;
    border-radius: 0px;
    display: inline-block;
    width: 100%;
  }
  label {
    color: #eef2f3;
    font-size: 20px;
    display: flex;
    width: 300px;
  }
  input {
    width: 300px;
  }

  div.form-container button {
    background-color: #8399a2;
    color: #eef2f3;
    font-size: 25px;
    border-radius: 10px;
    border: none;
    padding: 3px 10px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

const FormCountry = () => {
  const { state, countriesDispatch } = useContext(Context);
  const [formCountryStatus, setFormCountryStatus] = useState(false);
  const { addCountry } = useAPI();

  const deployFormCountry = () => {
    formCountryStatus
      ? setFormCountryStatus(false)
      : setFormCountryStatus(true);
  };

  return (
    <FormContainer>
      <Button text={"Create a Country"} action={deployFormCountry} />

      <div
        className={
          formCountryStatus ? "form-container" : "form-container--hidden"
        }
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={state.newCountry.name.common}
          onChange={(input) =>
            countriesDispatch(addNewCountryName(input.target.value))
          }
        />
        <label htmlFor="official">Official name:</label>
        <input
          type="text"
          id="official"
          value={state.newCountry.name.official}
          onChange={(input) =>
            countriesDispatch(addNewCountryOfficialName(input.target.value))
          }
        />
        <label htmlFor="region">Region:</label>
        <input
          type="text"
          id="region"
          value={state.newCountry.region}
          onChange={(input) =>
            countriesDispatch(addNewCountryRegion(input.target.value))
          }
        />
        <label htmlFor="capital">Capital:</label>
        <input
          type="text"
          id="capital"
          value={state.newCountry.capital[0]}
          onChange={(input) =>
            countriesDispatch(addNewCountryCapital(input.target.value))
          }
        />
        <label htmlFor="population">Population:</label>
        <input
          type="text"
          id="population"
          value={state.newCountry.population}
          onChange={(input) =>
            countriesDispatch(addNewCountryPopulation(input.target.value))
          }
        />
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          value={state.newCountry.area}
          onChange={(input) =>
            countriesDispatch(addNewCountryArea(input.target.value))
          }
        />
        <label htmlFor="independent">Independent:</label>
        <input
          type="text"
          id="independent"
          value={state.newCountry.independent}
          onChange={(input) =>
            countriesDispatch(addNewCountryIndependent(input.target.value))
          }
        />
        <label htmlFor="timezone">Time-Zone:</label>
        <input
          type="text"
          id="timezone"
          value={state.newCountry.timeZone[0]}
          onChange={(input) =>
            countriesDispatch(addNewCountryTimeZone(input.target.value))
          }
        />
        <Button
          text={"CREATE"}
          action={() => countriesDispatch(addCountry(state.newCountry))}
        />
      </div>
    </FormContainer>
  );
};

export default FormCountry;
