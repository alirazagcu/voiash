import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signInReducer";
import SignUpSlice from "./SignUpReducer";
import AdminSignUpSlice from "./adminSignUpReducer";
import LogoutSlice from "./logoutReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";

export default configureStore({
  reducer: {
    loginState: signInReducer,
    signUpState: SignUpSlice,
    adminSignUpStat: AdminSignUpSlice,
    logOutState: LogoutSlice,
    forgotPasswordState: forgotPasswordReducer,
    resetPasswordState: resetPasswordReducer,
  },
});
