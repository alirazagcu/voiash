import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, ALL_USERS } from "./constant";
import { isEmpty } from "lodash";

const initialState = {
  allUsers: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
};

export const allUsersAction = createAsyncThunk(
  "apis/allUsers",
  async (obj, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + obj.token,
        },
      };
      let response = {};
      switch (obj.type) {
        case "get":
          response = await axios.get(`${BASE_URL}${ALL_USERS}`, config);
          break;
        default:
          break;
      }
      if (response.status === 200) {
        if (response.data && response.data.responseCode === 200) {
          return {
            allUsers: response.data.responseData,
            isSuccess: response.data.success,
          };
        }
        if (response.data && response.data.responseCode === 500) {
          return thunkAPI.rejectWithValue({ msg: response.data.message });
        }
        if (response.data && response.data.responseCode === 400) {
          return thunkAPI.rejectWithValue({
            msg: !isEmpty(response.data.errors)
              ? response.data.errors[0].message
              : response.data.message,
          });
        }
      }
    } catch (e) {
      if (e.response && e.response.status === 401)
        return thunkAPI.rejectWithValue({
          msg: (e.response.data && e.response.data.error) || "",
        });
      return thunkAPI.rejectWithValue({ msg: "server error" });
    }
  }
);

const allUsersReducer = createSlice({
  name: "allUsersReducer",
  initialState,
  reducers: {
    allUsersStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
  },
  extraReducers: {
    [allUsersAction.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [allUsersAction.fulfilled]: (state, action) => ({
      ...state,
      allUsers: (action.payload && action.payload.allUsers) || {},
      isSuccess: (action.payload && action.payload.isSuccess) || false,
      msg: (action.payload && action.payload.msg) || "",
      isFetching: false,
    }),
    [allUsersAction.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: (action.payload && action.payload.msg) || "Network error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = allUsersReducer;
export const { allUsersStateClear } = actions;
export default reducer;
