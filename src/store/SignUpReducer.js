import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, USER_SIGN_UP } from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async (userObject, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}${USER_SIGN_UP}`, userObject);
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
        else if (response.data && response.data.responseCode === "EAUTH") {
          return{
            isSuccess: true,
            msg: "Your account is succfully created"
          }
        }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({ msg: "server error" });
    }
  }
);

const SignUpSlice = createSlice({
  name: "signUpReducer",
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
    [signUp.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [signUp.fulfilled]: (state, action) => ({
      ...state,
      responseData: action.payload.responseData,
      isSuccess: action.payload.isSuccess || false,
      isError: !action.payload.isSuccess,
      msg: action.payload.msg,
      isFetching: false,
    }),
    [signUp.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: action.payload.msg || "Network error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = SignUpSlice;
export const { stateClear } = actions;
export default reducer;
