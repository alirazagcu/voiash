import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, RESET_PASSWORD } from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (userObject, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${RESET_PASSWORD}`,
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

const resetPasswordReducer = createSlice({
  name: "resetPasswordReducer",
  initialState,
  reducers: {
    resetPasswordStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
  },
  extraReducers: {
    [resetPassword.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [resetPassword.fulfilled]: (state, action) => ({
      ...state,
      responseData: action.payload.responseData,
      isSuccess: action.payload.isSuccess || false,
      isError: !action.payload.isSuccess,
      msg: action.payload.msg,
      isFetching: false,
    }),
    [resetPassword.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: "Server Error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = resetPasswordReducer;
export const { increment, resetPasswordStateClear } = actions;
export default reducer;
