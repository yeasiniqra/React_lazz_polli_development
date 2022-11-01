import { createContext } from "react";

const appContext = createContext({
  
  storeFilters: ({
    arrivalDate,
    departureDate,
    adultsCount,
    childrenCount,
  }) => {},
  filters: {
    arrivalDate: new Date(),
    departureDate: new Date(),
    adultsCount: 1,
    childrenCount: 0,
  },
});

export default appContext;
