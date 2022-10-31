import React from 'react';
import { useReducer } from 'react';
import checkoutContext from './checkout-context'


const initialState = {


  };
  
  const reducer = (state, action) => {
    switch (action.type) {

      default:
        return state;
    }
  };

const CheckOutContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

 
    const context = {

      };

    return (
        <checkoutContext.Provider value={context} >
          {children}
        </checkoutContext.Provider>
    );
};

export default CheckOutContextProvider;