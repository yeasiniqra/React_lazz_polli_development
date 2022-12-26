import { createContext } from "react";

const checkoutContext = createContext({
  storeForms: ({
    firstName,
    lastName,
    gender,
    email,
    phone,
    country,
    city,
    state,
    postalCode,
    fax,
    address,
    identity,
    no,
    expiryDate,
    dateOfBirth,
  }) => {},
  formValus: {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    fax: "",
    address: "",
    identity: "",
    no: "",
    expiryDate: "",
    dateOfBirth: "",
    otp: "",
  },
});

export default checkoutContext;
