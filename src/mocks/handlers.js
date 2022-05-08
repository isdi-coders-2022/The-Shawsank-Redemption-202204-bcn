import { rest } from "msw";
import testCountries from "./testUtils";

export const handlers = [
  rest.get(`https://restcountries.com/v3.1/all`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(testCountries))
  ),
  rest.get(`https://mycountries-api.onrender.com/countries`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(testCountries))
  ),
  rest.delete(
    `https://mycountries-api.onrender.com/countries/1`,
    (_req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
