import { createContext } from "react";
import { humanizeDate } from "../lib/utils";

const today = new Date()

const appContext = createContext({
  storeFilters: ({
    arrivalDate,
    departureDate,
  }) => {},
  filters: {
    arrivalDate: humanizeDate(new Date()),
    departureDate: humanizeDate(new Date(new Date().setDate(today.getDate() + 1))),

  },
});

export default appContext;
