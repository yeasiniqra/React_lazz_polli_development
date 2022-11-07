//Address Api request endpoints
export const GET_PROVINCE = "AddressArea/Province/AutoComplete";
export const GET_DISTRICT = "AddressArea/District/AutoComplete";
export const GET_AREA = "AddressArea/Upazila/AutoComplete";
export const GET_SAVED_ADDRESS = "AddressArea/Address/Get";
export const CREATE_ADDRESS = "AddressArea/Address/Create";

//Authentication
export const GET_OTP = "MessagingArea/OtpMessage/WebRegister";
export const VERIFY_OTP = "MessagingArea/OtpMessage/Check";
export const CREATE_REGISTRATION = "CustomerArea/Customer/Add";
export const CREATE_LOGIN = "CustomerArea/AppCustomer/Login";
export const WEB_UPDATE_PASSWORD =
  "MessagingArea/OtpMessage/WebUpdatePassword";
export const UPDATE_PASSWORD = "CustomerArea/Customer/UpdatePassword";

//Product Related
export const GET_CURRENT_INFO = "ProductArea/Product/GetCurrentInfo";
// export const DISCOUNT_OFFER = "OfferArea/DiscountOffer/Order";
export const COUPON_CHECK = "PromotionalArea/Coupon/Check";
export const CREATE_ORDER = "ProductOrderArea/ProductOrder/Add";

//Order related
export const GET_ALL_ORDER = "ProductOrderArea/ProductOrder/Get";
export const GET_ORDER_DETAILS = "ProductOrderArea/ProductOrder/Details/";

//Profile Related
export const POST_PRESCRIPTION = "ProductOrderArea/Prescription/Add";
export const POST_COMPLAIN = "CommonArea/Complain/Add";
export const GET_USER_INFO = "CustomerArea/Customer/GetInfo";
export const UPDATE_USER_INFO = "CustomerArea/Customer/UpdateInfo";
export const PROFILE_IMAGE_UPDATE = "CustomerArea/Customer/AddPicture";
export const GET_SPECIALS_OFFER = "OfferArea/DiscountOffer/List";
export const GET_PRESCRIPTIONS =
  "ProductOrderArea/Prescription/MyPrescriptions/";
export const POST_REQUEST_ORDER = "RequestOrderArea/RequestOrder/Create";
export const REMOVE_PRESCRIPTION = "ProductOrderArea/Prescription/Remove/";
export const REMOVE_ANONYMOUS_PRESCRIPTION = "ProductOrderArea/Prescription/AnonymousRemove/";
export const POST_CONTACT = "ContactArea/Contact/Add";
export const POST_REVIEW = "ReviewArea/AppReview/Create";
export const GET_REVIEW = "ReviewArea/AppReview/Get";
export const GET_ORDER_BY_PRESCRIPTIONS =
  "ProductOrderArea/ProductOrder/Prescriptions/";
export const ATTACH_PRESCRIPTION =
  "ProductOrderArea/ProductOrder/AddPrescription";
export const REQUEST_ORDER_GET = "RequestOrderArea/RequestOrder/Get";
export const REQUEST_ORDER_ITEMS_GET = "RequestOrderArea/RequestOrder/Items/";
export const REQUEST_ORDER_PRES_GET =
  "RequestOrderArea/RequestOrder/Prescriptions/";

export const SEARCH_PRODUCT = "ProductArea/Product/Search";

export const PRODUCT_DETAILS_GET = "ProductArea/ProductContent/ByProduct/";
export const GET_RELATED_PRODUCTS = "ProductArea/Product/GetRelated/";
export const POST_REVIEW_PRODUCT = "ReviewArea/Comment/Create";
export const GET_REVIEW_BY_PRODUCT = "ReviewArea/Comment/ByProduct";

export const GET_CATEGORY_WISE_PRODUCT = "AppDataArea/AppCategoryProduct/Get";
export const GET_NOTIFICATION = "NoticeArea/Notification/Get";
export const NOTIFY_SEEN = "NoticeArea/Notification/Seen?activityId=";

export const GET_ALL_SEARCHED_PRODUCT = "ProductArea/Product/Searches";

export const GET_GALLERY = 'GalleryArea/Gallery/Get';

export const GET_PRODUCTS_BY_CATEGORY = 'ProductArea/CategoryProductPrivot/GetProductsByCategory';

export const OTP_LOGIN_REQUEST = 'CustomerArea/AppCustomer/OTPLoginRequest';

export const OTP_LOGIN = 'CustomerArea/AppCustomer/OTPLogin';

export const PAYMENT_ATTEMPT = 'PaymentArea/PaymentAttempt/Initiate';
export const PAYMENT_ATTEMPT_V2 = 'PaymentArea/PaymentAttempt/InitiateV2';

export const GET_PAYMENT_HISTORY = 'PaymentArea/PaymentAttempt/Get';

export const GET_CASHBACK_OFFERS = 'OfferArea/DiscountOffer/Order';

export const ON_DEMAND_PRODUCT = 'ProductArea/OnDemandProducts/RequestProduct'

export const PRODUCT_REQUEST = 'ProductArea/ProductRequest/Request';

export const BRANCH_LOCATIONS = 'FindStoreArea/FindStore/Get';

export const LOGIN = 'CustomerArea/AppCustomer/Login';

export const REGISTER = 'CustomerArea/AppCustomer/Login';

export const UPDATE_PASSWORD_WEB = 'MessagingArea/OtpMessage/WebUpdatePassword';

export const GET_LATEST_ADDRESS = 'ProductOrderArea/OrderShipping/GetLatestAddress';