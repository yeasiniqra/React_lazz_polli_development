import { createContext } from "react";
import { humanizeDate } from "../lib/utils";

const today = new Date()

const appContext = createContext({
  storeFilters: ({
    arrivalDate,
    departureDate,
    adultsCount,
    childrenCount,
  }) => {},
  filters: {
    arrivalDate: humanizeDate(new Date()),
    departureDate: humanizeDate(new Date().setDate(today.getDate() + 1)),
    adultsCount: 1,
    childrenCount: 1,
  },
});

export default appContext;
