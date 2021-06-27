import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, FORGOT_PASSWORD } from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (userObject, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${FORGOT_PASSWORD}`,
        userObject
      );
      if (response.status === 200) {
        if (response.data && response.data.responseCode === 200) {
          return {
            isSuccess: response.data.success,
          };
        } else if (response.data && response.data.responseCode === 401) {
          return {
            isSuccess: response.data.success,
            // msg: response.data.message,
          };
        } else if (response.data && response.data.responseCode === 400) {
          return {
            isSuccess: response.data.success,
            // msg: response.data.message,
          };
        }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({ msg: "server error" });
    }
  }
);

const forgotPasswordReducer = createSlice({
  name: "forgotPasswordReducer",
  initialState,
  reducers: {
    forgotPasswordStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
  },
  extraReducers: {
    [forgotPassword.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [forgotPassword.fulfilled]: (state, action) => ({
      ...state,
      isSuccess: action.payload.isSuccess || false,
      isError: !action.payload.isSuccess,
      msg: action.payload.msg || "",
      isFetching: false,
    }),
    [forgotPassword.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: "Server Error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = forgotPasswordReducer;
export const { increment, forgotPasswordStateClear } = actions;
export default reducer;
