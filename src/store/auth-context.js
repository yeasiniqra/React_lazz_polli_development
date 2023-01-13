import { createContext } from "react";

const authContext = createContext({
  isAuthenticating: false,
  isAuthenticated: false,
  form: null,
  user: { firstName: "", id: "", email: "", phone: "", image: "", token: "" },
  signupData: {
    phoneNumber: "",
    password: "",
    firstName: "",
    lastName: "",
    messageId: "",
    otp: "",
  },
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
  login: (
    user = { firstName: "", id: "", email: "", phone: "", image: "", token: "" }
  ) => {},
  storeSignupData: (
    data = { phone: "", fname: "", lname: "", optId: "", otp: "" }
  ) => {},
  logout: () => {},
  autoLogin: () => {},
  open: (form = "LOGIN", path) => {},
  close: () => {},
});

export default authContext;
