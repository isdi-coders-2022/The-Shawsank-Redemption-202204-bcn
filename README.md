# README

## COMPONENTS

### `Header`

- Render logo
- Render 3 pages:
  - Home: on click it will ser showingPage to "home"
    if showingPage is "home" it will underline the button;
  - My countries:
    on click it will ser showingPage to "myCountries"
    if showingPage is "myCountries" it will underline the button;
  - About: on click it will ser showingPage to "about"
    if showingPage is "about" it will underline the button;

### `Footer`

- Render 2 buttons:
  - 'Previous': with the action -1 to actualPage statvariable
  - 'Next': with the action +1 to actualPage statvariable
- Render received actualPage

### `Button`

- Render a recevied text
- Excecute a received action on click

### `IconButton`

- Render a recevied icon
- Excecute on click a received action

### `Country`

- Render a received image
- Render received info from the info provider (name, nativeName, region, capital, population, language)
- InfoButton
  -If favouriteCountry === true && showingPage === home / do nothing more
  -If favouriteCountry === false && showingPage === home / render a + IconButton that change favouriteCountry to true
  -If favouriteCountry === true && showingPage === "myCountries" / render a "edit" IconButton and a "delete" IconButton

### `InfoCountry`

- Render a received image
- Render received info (name, nativeName, region, capital, population, language, currency, location, timezone)

### `Form`

- Render 10 input Components.
- Render a submit button that will add the country to my countries.

### `Input`

- Render an imput component with a received label

## DATA LAYER

### `allCountries`

- Array of all countries fetched from the api. They will be ordered alphabetically and the boolean propierty favouriteCountry will be added to each object.

### `myCountries`

- Array of the countries with the favouriteCountry propierty with the value true.

### `countriesToShow`

- Array of 10 countries that will be shown.

### `actualPage`

- Current showing page, it will have values from 1 to 25.

### `showingPage`

- It can take the next values -> home / myCountries / about
