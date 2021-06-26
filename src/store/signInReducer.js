import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, USER_SIGN_IN } from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const signIn = createAsyncThunk(
  "user/signin",
  async (userObject, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${USER_SIGN_IN}`,
        userObject
      );
      if (response.status === 200) {
        if (response.data && response.data.responseCode === 200) {
          const token = response.data.responseData.token;
          localStorage.setItem("token", token);
          localStorage.setItem("isAdmin", true);
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

const signInReducer = createSlice({
  name: "signReducer",
  initialState,
  reducers: {
    stateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
  },
  extraReducers: {
    [signIn.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [signIn.fulfilled]: (state, action) => ({
      ...state,
      responseData: action.payload.responseData,
      isSuccess: action.payload.isSuccess || false,
      isError: !action.payload.isSuccess,
      msg: action.payload.msg,
      isFetching: false,
    }),
    [signIn.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: "Server Error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = signInReducer;
export const { increment, stateClear } = actions;
export default reducer;
