import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, ADMIN_SIGN_UP } from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const adminSignUp = createAsyncThunk(
  "admin/signUp",
  async (userObject, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${ADMIN_SIGN_UP}`,
        userObject
      );
      if (response.status === 200) {
        if (response.data && response.data.responseCode === 200) {
          return {
            responseData: response.data.responseData,
            isSuccess: response.data.success,
          };
        } else if (response.data && response.data.responseCode === 401) {
          return {
            responseData: response.data.responseData,
            isSuccess: response.data.success,
            msg: response.data.message,
          };
        } else if (response.data && response.data.responseCode === 400) {
          return {
            isSuccess: response.data.success,
            msg: response.data.message,
          };
        }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({ msg: "server error" });
    }
  }
);

const AdminSignUpSlice = createSlice({
  name: "signUpReducer",
  initialState,
  reducers: {
    adminStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
  },
  extraReducers: {
    [adminSignUp.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [adminSignUp.fulfilled]: (state, action) => ({
      ...state,
      responseData: action.payload.responseData,
      isSuccess: action.payload.isSuccess || false,
      isError: !action.payload.isSuccess,
      msg: action.payload.msg,
      isFetching: false,
    }),
    [adminSignUp.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: "Server Error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = AdminSignUpSlice;
export const { adminStateClear } = actions;
export default reducer;
