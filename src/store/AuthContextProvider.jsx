import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  AUTHENTICATING_FINISHED,
  AUTH_LOGIN,
  AUTH_REMOVE_PATH,
  AUTO_LOGIN,
  CLOSE_AUTH_FORM,
  LOGOUT,
  OPEN_AUTH_FORM,
  STORE_REGISTRATION_DATA,
  STORE_USER_PROFILE_INFO,
} from "../constants";
import { GET_USER_INFO } from "../lib/endpoints";
import authService from "../services/auth-service";
import { getV2, postV2 } from "../services/http-service-v2";
import authContext from "./auth-context";

const initialState = {
  isAuthenticating: true,
  isAuthenticated: false,
  user: { firstName: "", id: "", email: "", phone: "", image: "", token: "" },
  signupData: {
    phone: "",
    password: "",
    fname: "",
    lname: "",
    optId: "",
    otp: "",
  },
  form: null, //OTP || SINGUP || RESET_PASSWROD || LOGIN || OTP_RESET_PASSWORD
  path: null,
  profile: {
     FirstName : '',
     LastName : '',
     Phone : '',
     Gender : '', 
     Country : '', 
     City : '', 
     State : '', 
     PostalCode : '',
    Fax : '',
    Address : '', 
    IdentityType : '', 
    IdentityNumber : '', 
    IdentityExpireDate : '',
    DateOfBirth : '',
    Id : ''
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case STORE_REGISTRATION_DATA:
      return {
        ...state,
        signupData: { ...action.data },
      };

    case OPEN_AUTH_FORM:
      const path = action.data.path || state.path;
      return {
        ...state,
        form: action.data.form,
        path,
      };

    case CLOSE_AUTH_FORM:
      return {
        ...state,
        form: null,
        path: null,
      };

    case AUTH_LOGIN:
      localStorage.setItem("USER", JSON.stringify(action.user));
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...action.user,
        },
      };

    case AUTO_LOGIN:
      const userJSON = localStorage.getItem("USER");

      if (!userJSON)
        return {
          ...state,
          isAuthenticated: false,
          isAuthenticating: false,
        };

      let user;
      try {
        user = JSON.parse(userJSON);
      } catch (error) {
        console.log(error);
        return {
          ...state,
          isAuthenticated: false,
          isAuthenticating: false,
        };
      }

      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        user: user,
      };

    case AUTHENTICATING_FINISHED:
      return {
        ...state,
        isAuthenticating: false,
      };

    case LOGOUT:
      localStorage.removeItem("USER");
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        user: null,
      };
    case AUTH_REMOVE_PATH:
      return {
        ...state,
        path: null,
      };

    case STORE_USER_PROFILE_INFO:
      return {
        ...state,
        profile: {
         ...action.profile
        },
      };

    default:
      return { ...state };
  }
};

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  const storeSignupData = (data) => {
    dispatch({ type: STORE_REGISTRATION_DATA, data });
  };

  const open = (form = "LOGIN", path) => {
    dispatch({ type: OPEN_AUTH_FORM, data: { form, path } });
  };

  const close = (form) => {
    dispatch({ type: CLOSE_AUTH_FORM });
  };

  const login = (
    user = { firstName: "", id: "", email: "", phone: "", image: "", token: "" }
  ) => {
    dispatch({ type: AUTH_LOGIN, user });
  };

  const autoLogin = useCallback(() => {
    dispatch({ type: AUTO_LOGIN });
  }, []);

  const logout = () => {
    dispatch({ type: LOGOUT });
  };



  const storeProfile = (FirstName, LastName, Phone, Gender, Country, City, State, PostalCode, Fax, Address, IdentityType, IdentityNumber, IdentityExpireDate, DateOfBirth,Id) => {
    dispatch({
      type: STORE_USER_PROFILE_INFO,
      profile: { FirstName, LastName, Phone, Gender, Country, City, State, PostalCode, Fax, Address, IdentityType, IdentityNumber, IdentityExpireDate, DateOfBirth, Id},
    });
  };

  const { isAuthenticated, path } = state;
  useEffect(() => {
    if (isAuthenticated && path) {
      navigate(path);
      dispatch({ type: AUTH_REMOVE_PATH });
    }
  }, [isAuthenticated, path, navigate]);

  useEffect(() => {
    authService.autoLogin();
    const userJSON = localStorage.getItem("USER");

    let user;
    if (userJSON) {
      try {
        user = JSON.parse(userJSON);
        dispatch({ type: AUTH_LOGIN, user });
      } catch (error) {
        console.log(error);
      }
    }

    dispatch({ type: AUTHENTICATING_FINISHED });
  }, []);


  useEffect(() => {
    if (isAuthenticated) {
      getV2({ url: GET_USER_INFO, payload: {} })
        .then((data) => {
          if (data.IsError) {
            logout();
          } else if (!data.IsError) {
          storeProfile(data.Data.FirstName, data.Data.LastName, data.Data.Phone, data.Data.Gender, data.Data.Country, data.Data.City, data.Data.State, data.Data.PostalCode, data.Data.Fax, data.Data.Address, data.Data.IdentityType, data.Data.IdentityNumber, data.Data.IdentityExpireDate, data.Data.DateOfBirth, data.Data.Id );
          }
        })
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated]);

  const context = {
    isAuthenticating: state.isAuthenticating,
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    form: state.form,
    signupData: state.signupData,
    profile: state.profile,
    login,
    autoLogin,
    logout,
    storeSignupData,
    open,
    close,
  };

  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
