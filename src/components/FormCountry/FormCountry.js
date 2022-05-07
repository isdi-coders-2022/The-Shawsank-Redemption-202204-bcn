import { useState } from "react";
import styled from "styled-components";
import useAPI from "../../hooks/useAPI";
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
    font-size: 25px;
    width: 80%;
  }
  input {
    width: 80%;
    height: 40px;
    margin-bottom: 10px;
  }
  form {
    width: 100%;
    align-items: center;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .country-created {
    color: #eef2f3;
    font-size: 30px;
    text-align: center;
    background-color: green;
    width: 100%;
  }

  .submit-input {
    background-color: #8399a2;
    color: #eef2f3;
    font-size: 30px;
    border-radius: 10px;
    border: none;
    padding: 3px 10px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const FormCountry = () => {
  const initialFormValue = {
    flags: {
      svg: "",
    },
    name: { common: "", official: "" },
    region: "",
    capital: [""],
    population: "",
    area: "",
    independent: "",
    timeZone: [""],
  };

  const { addCountry } = useAPI();
  const [formCountryStatus, setFormCountryStatus] = useState(false);
  const [created, setCreated] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValue);

  const clearForm = () => {
    setFormValues(initialFormValue);
  };

  const deployFormCountry = () => {
    formCountryStatus
      ? setFormCountryStatus(false)
      : setFormCountryStatus(true);
  };

  const handleNameInputChange = (event) => {
    setFormValues({
      ...formValues,
      name: { ...formValues.name, common: event.target.value },
    });
  };

  const handleNativeNameInputChange = (event) => {
    setFormValues({
      ...formValues,
      name: { ...formValues.name, official: event.target.value },
    });
  };

  const handleImageInputChange = (event) => {
    setFormValues({
      ...formValues,
      flags: { ...formValues.flags, svg: event.target.value },
    });
  };

  const handleRegionInputChange = (event) => {
    setFormValues({
      ...formValues,
      region: event.target.value,
    });
  };

  const handleCapitalInputChange = (event) => {
    setFormValues({
      ...formValues,
      capital: [event.target.value],
    });
  };

  const handlePopulationInputChange = (event) => {
    setFormValues({
      ...formValues,
      population: event.target.value,
    });
  };

  const handleAreaInputChange = (event) => {
    setFormValues({
      ...formValues,
      area: event.target.value,
    });
  };

  const handleIndependentInputChange = (event) => {
    setFormValues({
      ...formValues,
      independent: event.target.value,
    });
  };

  const handleTimeZoneInputChange = (event) => {
    setFormValues({
      ...formValues,
      timeZone: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCountry(formValues);
    setCreated(true);
    clearForm();
    setTimeout(() => {
      setCreated(false);
    }, 5000);
  };

  return (
    <FormContainer>
      <Button text={"Create a Country"} action={deployFormCountry} />

      <div
        className={
          formCountryStatus ? "form-container" : "form-container--hidden"
        }
      >
        {created && <div className="country-created">Country created</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="img">Flag:</label>
          <input
            type="text"
            id="img"
            value={formValues.flags.svg}
            onChange={handleImageInputChange}
            aria-label={"name-input"}
          />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formValues.name.common}
            onChange={handleNameInputChange}
          />

          <label htmlFor="nativeName">Native name:</label>
          <input
            type="text"
            id="nativeName"
            value={formValues.name.official}
            onChange={handleNativeNameInputChange}
          />

          <label htmlFor="region">Region:</label>
          <input
            type="text"
            id="region"
            value={formValues.region}
            onChange={handleRegionInputChange}
          />

          <label htmlFor="capital">Capital:</label>
          <input
            type="text"
            id="capital"
            value={formValues.capital}
            onChange={handleCapitalInputChange}
          />

          <label htmlFor="population">Population:</label>
          <input
            type="text"
            id="population"
            value={formValues.population}
            onChange={handlePopulationInputChange}
          />

          <label htmlFor="area">Area:</label>
          <input
            type="text"
            id="area"
            value={formValues.area}
            onChange={handleAreaInputChange}
          />

          <label htmlFor="independent">Independent:</label>
          <input
            type="text"
            id="independent"
            value={formValues.independent}
            onChange={handleIndependentInputChange}
          />

          <label htmlFor="timeZone">Time zone:</label>
          <input
            type="text"
            id="timeZone"
            value={formValues.timeZone}
            onChange={handleTimeZoneInputChange}
          />

          <input type="submit" value="Create" className="submit-input" />
        </form>
      </div>
    </FormContainer>
  );
};

export default FormCountry;
