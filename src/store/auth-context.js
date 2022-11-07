import { createContext } from "react";

const authContext = createContext({
    isAuthenticating: false,
    isAuthenticated: false,
    form: null,
    user: {name: '', id: '', email: '', phone: '', image: '', token: ''},
    signupData: {phone: '', password: '', fname : '', optId: '', otp: ''},
    profile: {notification: 0, credit: 0, debit: 0},
    login: (user = {name: '', id: '', email: '', phone: '', image: '', token: ''}) => {},
    storeSignupData: (data = {phone: '', fname : '', password: '', optId: '', otp: ''}) => {},
    logout: () => {},
    autoLogin: () => {},
    open: (form = 'LOGIN', path) => {},
    close: () => {},
});

export default authContext;
