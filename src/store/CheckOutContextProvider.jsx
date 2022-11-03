import React from 'react';
import { useReducer } from 'react';
import checkoutContext from './checkout-context'


const initialState = {
      formValus : {
        firstName : "",
        lastName : "",
        gender : "",
        email : "",
        phone : "",
        country : "",
        city : "",
        state : "",
        postalCode : "",
        fax : "",
        address : "",
        identity : "",
        no : "",
        expiryDate : "",
        dateOfBirth : "",
        otp : "",     
    }
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_VALUS' : 
      return {
        ...state,
        formValus : {...action.formValus}
      }
      default:
        return state;
    }
  };

const CheckOutContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const storeForms = (formValus) => {
      dispatch({type : 'UPDATE_FORM_VALUS', formValus})
    }

    const context = {
      storeForms,
      formValus : state.formValus
    };

    return (
        <checkoutContext.Provider value={context} >
          {children}
        </checkoutContext.Provider>
    );
};

export default CheckOutContextProvider;