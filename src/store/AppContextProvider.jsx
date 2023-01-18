import React from "react";
import { useReducer } from "react";
import { humanizeDate } from "../lib/utils";
import appContext from "./app-context";

const today = new Date()

const initialState = {
  filters: {
    arrivalDate: humanizeDate(new Date()),
    departureDate: humanizeDate(new Date(new Date().setDate(today.getDate() + 1))),
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
