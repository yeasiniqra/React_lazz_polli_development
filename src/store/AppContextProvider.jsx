import React from "react";
import { useReducer } from "react";
import appContext from "./app-context";

const initialState = {
  filters: {
    arrivalDate: new Date(),
    departureDate: new Date(),
    adultsCount: 1,
    childrenCount: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_FILTER': {
        return {
            ...state,
            filters: {...action.filters}
        }
    }
    
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeFilters = (filters) => {
    dispatch({type: 'UPDATE_SEARCH_FILTER', filters});
  }

  const context = {
    storeFilters,
    filters: state.filters,
  };
  return <appContext.Provider value={context}>{children}</appContext.Provider>;
};

export default AppContextProvider;
