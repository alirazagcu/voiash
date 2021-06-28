import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, USER_DETAIL } from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const userDetail = createAsyncThunk(
  "user/detail",
  async (userObject, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + userObject.token,
        },
      };
      let response = {};
      if (userObject.type === "get") {
        response = await axios.get(`${BASE_URL}${USER_DETAIL}${userObject._id}`, config);
      } else {
        response = await axios.post(`${BASE_URL}${USER_DETAIL}${userObject._id}`, userObject.updateResponseData, config);
      }
      if (response.status === 200) {
        if (response.data && response.data.responseCode === 200) {
          return {
            responseData: response.data.responseData,
            isSuccess: userObject.type === "get" ? false :response.data.success,
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

const userDetailReducer = createSlice({
  name: "userDetailReducer",
  initialState,
  reducers: {
    userDetailStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
  },
  extraReducers: {
    [userDetail.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [userDetail.fulfilled]: (state, action) => ({
      ...state,
      responseData: action.payload.responseData,
      isSuccess: action.payload.isSuccess || false,
      msg: action.payload.msg,
      isFetching: false,
    }),
    [userDetail.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: "Server Error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = userDetailReducer;
export const { userDetailStateClear } = actions;
export default reducer;
