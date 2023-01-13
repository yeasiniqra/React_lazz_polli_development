import { createContext } from "react";

const checkoutContext = createContext({
  storeForms: ({
    FirstName,
    FastName,
    gender,
    email,
    Phone,
    country,
    city,
    state,
    postalCode,
    fax,
    address,
    identity,
    idnum,
    expiryDate,
    dateOfBirth,
  }) => {},
  formValus: {
    FirstName: "",
    LastName: "",
    gender: "",
    email: "",
    Phone: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    fax: "",
    address: "",
    identity: "",
    idnum: "",
    expiryDate: "",
    dateOfBirth: "",
    otp: "",
  },
});

export default checkoutContext;
