import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signInReducer";
import SignUpSlice from "./SignUpReducer";
import AdminSignUpSlice from "./adminSignUpReducer";
import LogoutSlice from "./logoutReducer";
import userDetailReducer from "./userDetailReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import recoveryPasswordReducer from "./recoveryPasswordReducer";
import familiesReducer from "./familiesReducer";
import experienceReducer from "./experienceReducer";
import hotelsReducer from "./hotelsReducer";
import destinationReducer from "./destinationReducer";
import insuranceReducer from "./insuranceReducer";
import localFriendsReducer from "./localFriendsReducer";
import allUsersReducer from "./allUserReducer";
import groupsReducer from "./groupReducer";

export default configureStore({
  reducer: {
    loginState: signInReducer,
    signUpState: SignUpSlice,
    adminSignUpStat: AdminSignUpSlice,
    logOutState: LogoutSlice,
    userDetailState: userDetailReducer,
    forgotPasswordState: forgotPasswordReducer,
    resetPasswordState: resetPasswordReducer,
    recoveryPasswordState: recoveryPasswordReducer,
    familiyState: familiesReducer,
    experienceState: experienceReducer,
    hotelsState: hotelsReducer,
    destinationState: destinationReducer,
    insuranceState: insuranceReducer,
    localFriendsState: localFriendsReducer,
    allUsersState: allUsersReducer,
    groupsState: groupsReducer
  },
});
