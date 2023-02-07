
//Authentication
export const VERIFY_OTP = "MessagingArea/OtpMessage/Check";
export const CREATE_REGISTRATION = "CustomerArea/Customer/Add";
export const UPDATE_PASSWORD_WEB = 'MessagingArea/OtpMessage/WebUpdatePassword';
export const UPDATE_PASSWORD = "CustomerArea/Customer/UpdatePassword";


// export const GET_USER_INFO = 'Home/GetUser';
export const GET_USER_INFO = 'AppUser';
export const REGISTER = 'AppUser/Register';
export const LOGIN = 'ManagedArea/Account/Login';
export const GET_OTP = (phone, isForLogin = true) => `Message/OTP/${phone}?activityId=${window.Activity || '4271cd21-3fa3-44ba-afd2-c06676cdd4d5'}&otpFor=${isForLogin ? 'LOGIN' : 'REGISTRATION'}`; // REGISTRATION | LOGIN
export const GET_CUSTOMERIS_EXIST = "AppUser/isExist?phoneNumber=";

//Profile
// export const GET_USER = 'AppUser';
export const GET_USER_PROFILE = 'AppUser/Profile';
export const POST_UPDATE_PROFILE = 'AppUser/Profile';

//Review
export const POST_REVIEW = 'HouseArea/Comment/PostComment';
export const POST_UPDATE_REVIEW = (ReviewID) => `HouseArea/Comment/EditComment/${ReviewID}`;
export const GET_DELETE_REVIEW = (DeleteID) => `HouseArea/Comment/DeleteComment/${DeleteID}`;
export const GET_REVIEW = (HouseId,Take,Page) => `HouseArea/Comment/GetComments?HouseId=${HouseId}&Take=${Take}&Page=${Page}`;


//get House
export const GET_HOUSE = () => `HouseArea/House/GetHouses?Take=999&Page=1&takeReview=10`;
export const GET_SINGLE_HOUSES = (houseID) => `HouseArea/House/GetHouse/${houseID}?takeReview=10`;
export const GET_ROOMS = () => `HouseArea/House/GetRooms?Take=999&Page=1&takeReview=5`;


//get room booking home
export const GET_ROOM_BOOKING_ISAVAIBLE = (ArrivalTime, DepartureTime,RoomNumber,RoomId,Type='ROOM') => `BookingArea/Booking/IsAvailable?ArrivalTime=${ArrivalTime}&DepartureTime=${DepartureTime}&NumberOfRoom=${RoomNumber}&Type=${Type}&Id=${RoomId}`;
export const POST_ROOM_BOOKING = `BookingArea/Booking/Book`
export const GET_ROOM_BOOKING = (pageSize, page, status) => `BookingArea/Booking/GetBookings?Take=${pageSize}&page=${page}&Status=${status}`

//get room booking Search
export const GET_SEARCH_BOOKING_ROOM_ISAVAIBLE = (Take,Page,Children,Adult,ArrivalTime,DepartureTime) => {
    return `HouseArea/House/Search?Take=${Take}&Page=${Page}&Children=${Children ?? null}&Adult=${Adult ?? null}&ArrivalTime=${ArrivalTime}&DepartureTime=${DepartureTime}`
}

//get room booking Invoice
export const GET_INVOICE = (Code) => `BookingArea/Booking/GetBooking/${Code}`;

//post Convention, Swimming Pool, booking
export const POST_CONVENTION_BOOKING = `BookingArea/Booking/convention`;
export const POST_SWMMING_POOL_BOOKING = `BookingArea/Booking/SwimmingPool`;
export const POST_FULL_RESORT_BOOKING = `BookingArea/Booking/FullResort`;


// Lazz Polli
export const POST_CONTACT = 'ContactArea/Contact/Add';
export const POST_RESUME = 'Resume';

// export const GET_GALLERY = (category, pageSize, page) =>  {
//     return `Gallery?category=${category}&pageSize=${pageSize}&page=${page}`
// }

