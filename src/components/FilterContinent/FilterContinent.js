import { useState } from "react";
import Button from "../Button/Button";
import FilterContinentContainer from "./FilterContinentContainer";

const FilterContinent = () => {
  const [continentBarStatus, setContinentBarStatus] = useState(false);

  const deployContinentBar = () => {
    continentBarStatus
      ? setContinentBarStatus(false)
      : setContinentBarStatus(true);
  };

  return (
    <FilterContinentContainer>
      <Button text={"Filter by continents"} action={deployContinentBar} />
      <div
        className={
          continentBarStatus
            ? "continents-names-container"
            : "continents-names-container--hidden"
        }
      >
        <Button text={"Africa"} />
        <Button text={"Europe"} />
        <Button text={"North America"} />
        <Button text={"South America"} />
        <Button text={"Oceania"} />
        <Button text={"None"} />
      </div>
    </FilterContinentContainer>
  );
};

export default FilterContinent;
