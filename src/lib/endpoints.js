
//Authentication
export const VERIFY_OTP = "MessagingArea/OtpMessage/Check";
export const CREATE_REGISTRATION = "CustomerArea/Customer/Add";
export const UPDATE_PASSWORD_WEB = 'MessagingArea/OtpMessage/WebUpdatePassword';
export const UPDATE_PASSWORD = "CustomerArea/Customer/UpdatePassword";
// export const CREATE_LOGIN = "CustomerArea/AppCustomer/Login";
// export const OTP_LOGIN_REQUEST = 'CustomerArea/AppCustomer/OTPLoginRequest';
// export const OTP_LOGIN = 'CustomerArea/AppCustomer/OTPLogin';


export const REGISTER = 'AppUser/Register';
export const LOGIN = 'ManagedArea/Account/Login';
export const GET_OTP = (phone, isForLogin = true) => `Message/OTP/${phone}?activityId=${window.Activity || '68DF907A-76D2-4595-959E-697D73336FA0'}&otpFor=${isForLogin ? 'LOGIN' : 'REGISTRATION'}`; // REGISTRATION | LOGIN
export const GET_CUSTOMERIS_EXIST = "AppUser/isExist?phoneNumber=";

//Profile
export const GET_USER = 'AppUser';
export const GET_USER_PROFILE = 'AppUser/Profile';
export const POST_UPDATE_PROFILE = 'AppUser/Profile';

//Review
export const POST_REVIEW = 'Review';


// Lazz Polli
export const POST_CONTACT = 'Contact';
export const POST_RESUME = 'Resume';

// export const GET_GALLERY = (category, pageSize, page) =>  {
//     return `Gallery?category=${category}&pageSize=${pageSize}&page=${page}`
// }
