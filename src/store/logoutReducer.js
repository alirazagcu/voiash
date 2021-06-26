import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const logOut = createAsyncThunk(
  "user:id/signUp",
  async (obj, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + obj.token,
        },
      };
      const response = await axios.get(
        `${BASE_URL}user/${obj.id}/logout`,
        config
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

const LogoutSlice = createSlice({
  name: "LogoutReducer",
  initialState,
  reducers: {
    LogOutStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
  },
  extraReducers: {
    [logOut.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [logOut.fulfilled]: (state, action) => ({
      ...state,
      responseData: action.payload.responseData,
      isSuccess: action.payload.isSuccess || false,
      isError: !action.payload.isSuccess,
      msg: action.payload.msg,
      isFetching: false,
    }),
    [logOut.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: "Server Error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = LogoutSlice;
export const { LogOutStateClear } = actions;
export default reducer;
