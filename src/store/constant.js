export const BASE_URL = "http://localhost:3000/";
// "https://safe-chamber-56725.herokuapp.com/";
export const USER_SIGN_IN = "user/signin";
export const USER_SIGN_UP = "user/signup";
export const ADMIN_SIGN_UP = "admin/signup";
export const USER_DETAIL = "user/details/";
export const FORGOT_PASSWORD = "user/forgotPassword";
export const RESET_PASSWORD = "user/resetPassword";
export const RECOVERY_PASSWORD = "user/recoverPassword";
export const GET_ALL_FAMILIES = "getall/families";
export const UPDATE_FAMILY_BY_ID = "update/families";
export const DELETE_FAMILY_BY_ID = "delete/families";
export const ADD_FAMILY = "add/families";

export const ALL_USERS = "users";

export const GET_ALL_EXPERIENCES = "getall/experiences";
export const UPDATE_EXPERIENCES_BY_ID = "update/experiences";
export const DELETE_EXPERIENCES_BY_ID = "delete/experiences";
export const ADD_EXPERIENCES = "add/experiences";

export const GET_ALL_HOTELS = "getall/hotels";
export const UPDATE_HOTELS_BY_ID = "update/hotels";
export const DELETE_HOTELS_BY_ID = "delete/hotels";
export const ADD_HOTELS = "add/hotels";

export const GET_ALL_Destination = "getall/destinations";
export const UPDATE_Destination_BY_ID = "update/destinations";
export const DELETE_Destination_BY_ID = "delete/destinations";
export const ADD_Destination = "add/destinations";

export const GET_ALL_INSURANCE = "getall/insurances";
export const UPDATE_INSURANCE_BY_ID = "update/insurances";
export const DELETE_INSURANCE_BY_ID = "delete/insurances";
export const ADD_INSURANCE = "add/insurances";

export const GET_ALL_LOCAL_FRIENDS = "getall/localFriends";
export const UPDATE_LOCAL_FRIENDS_BY_ID = "update/localFriends";
export const DELETE_LOCAL_FRIENDS_BY_ID = "delete/localFriends";
export const ADD_LOCAL_FRIENDS = "add/localFriends";

export const INSURANCE_GET_MOCK_DATA = [
  {
    contractInPdf: {
      contractLink: "this is the test pdf",
    },
    insuranceId: "60f103a607f96303d9592151",
    name: "test",
    description: "test description of insurance",
    payLimitInHour: "15",
    isDeleted: false,
    addedOn: 1626407526188,
    modifiedOn: 1626407526188,
    _id: "60f103a607f96303d9592151",
    prices: [
      {
        country: "pakistan",
        coin: "pkr",
        amount: 12,
        _id: "60f103a607f96303d9592153",
      },
    ],
    __v: 0,
  },
  {
    contractInPdf: {
      contractLink: "this is the test pdf",
    },
    insuranceId: "60f103d607f96303d9592154",
    name: "test1",
    description: "test description of insurance",
    payLimitInHour: "15",
    isDeleted: false,
    addedOn: 1626407526188,
    modifiedOn: 1626407526188,
    _id: "60f103d607f96303d9592154",
    prices: [
      {
        country: "pakistan",
        coin: "pkr",
        amount: 12,
        _id: "60f103d607f96303d9592156",
      },
    ],
    __v: 0,
  },
  {
    contractInPdf: {
      contractLink: "this is the test pdf",
    },
    insuranceId: "60f103ea07f96303d9592157",
    name: "test3",
    description: "test description of insurance",
    payLimitInHour: "15",
    isDeleted: false,
    addedOn: 1626407526188,
    modifiedOn: 1626407526188,
    _id: "60f103ea07f96303d9592157",
    prices: [
      {
        country: "pakistan",
        coin: "pkr",
        amount: 12,
        _id: "60f103ea07f96303d9592159",
      },
    ],
    __v: 0,
  },
];

export const LOCAL_FRIENDS_GET_MOCK_DATA = [
  {
    localFriendId: "60f25c8ebe013a03db14964c",
    userEmail: "ahsan@gmail.com",
    name: "ahsan",
    age: 22,
    gender: "male",
    residentTime: "20",
    educationLevel: "higher",
    languages: ["english", "urdu", "punjabi"],
    direction: "right",
    aboutUser: "good friend",
    status: "single",
    identificationId: "lajdflajsdlfajsdlfalsdjfalksdjf",
    isDeleted: false,
    addedOn: 1626495632161,
    modifiedOn: 1626495632161,
    _id: "60f25c8ebe013a03db14964c",
    __v: 0,
  },
  {
    localFriendId: "60f25ca2be013a03db14964d",
    userEmail: "ahsan@gmail.com",
    name: "ahsan",
    age: 22,
    gender: "male",
    residentTime: "20",
    educationLevel: "higher",
    languages: ["english", "urdu", "punjabi"],
    direction: "right",
    aboutUser: "good friend",
    status: "single",
    identificationId: "lajdflajsdlfajsdlfalsdjfalksdjf",
    isDeleted: false,
    addedOn: 1626495632161,
    modifiedOn: 1626495632161,
    _id: "60f25ca2be013a03db14964d",
    __v: 0,
  },
  {
    localFriendId: "60f25cb3be013a03db14964e",
    userEmail: "ahsan@gmail.com",
    name: "ahsan",
    age: 22,
    gender: "male",
    residentTime: "20",
    educationLevel: "higher",
    languages: ["english", "urdu", "punjabi"],
    direction: "right",
    aboutUser: "good friend",
    status: "single",
    identificationId: "lajdflajsdlfajsdlfalsdjfalksdjf",
    isDeleted: false,
    addedOn: 1626495632161,
    modifiedOn: 1626495632161,
    _id: "60f25cb3be013a03db14964e",
    __v: 0,
  },
];
