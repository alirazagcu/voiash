import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signInReducer";
import SignUpSlice from "./SignUpReducer";
import AdminSignUpSlice from "./adminSignUpReducer";
import LogoutSlice from "./logoutReducer";
import userDetailReducer from "./userDetailReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import recoveryPasswordReducer from "./recoveryPasswordReducer";

export default configureStore({
  reducer: {
    loginState: signInReducer,
    signUpState: SignUpSlice,
    adminSignUpStat: AdminSignUpSlice,
    logOutState: LogoutSlice,
    userDetailState: userDetailReducer,
    forgotPasswordState: forgotPasswordReducer,
    resetPasswordState: resetPasswordReducer,
    recoveryPasswordState: recoveryPasswordReducer
  },
});
