
//Authentication
export const GET_OTP = "Message/OTP";
export const VERIFY_OTP = "MessagingArea/OtpMessage/Check";
export const CREATE_REGISTRATION = "CustomerArea/Customer/Add";
export const CREATE_LOGIN = "CustomerArea/AppCustomer/Login";
export const UPDATE_PASSWORD = "CustomerArea/Customer/UpdatePassword";
export const OTP_LOGIN_REQUEST = 'CustomerArea/AppCustomer/OTPLoginRequest';
export const OTP_LOGIN = 'CustomerArea/AppCustomer/OTPLogin';
export const LOGIN = 'AppUser/Login';
export const REGISTER = 'AppUser/Register';
export const UPDATE_PASSWORD_WEB = 'MessagingArea/OtpMessage/WebUpdatePassword';

// Lazz Polli
export const POST_CONTACT = 'Contact';
export const POST_RESUME = 'Resume';

export const GET_GALLERY = (category, pageSize, page) =>  {
    return `Gallery?category=${category}&pageSize=${pageSize}&page=${page}`
}
