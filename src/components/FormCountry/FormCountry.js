import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

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
  const [formCountryStatus, setFormCountryStatus] = useState(false);

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
        <input type="text" id="name" />
        <label htmlFor="nativeName">Native name:</label>
        <input type="text" id="nativeName" />
        <label htmlFor="region">Region:</label>
        <input type="text" id="region" />
        <label htmlFor="capital">Capital:</label>
        <input type="text" id="capital" />
        <label htmlFor="population">Population:</label>
        <input type="text" id="population" />
        <label htmlFor="lenguage">Lenguage:</label>
        <input type="text" id="lenguage" />
        <label htmlFor="currency">Currency:</label>
        <input type="text" id="currency" />
        <label htmlFor="borders">Borders:</label>
        <input type="text" id="borders" />
        <label htmlFor="timezone">Time-Zone:</label>
        <input type="text" id="timezone" />
        <Button text={"CREATE"} />
      </div>
    </FormContainer>
  );
};

export default FormCountry;
