import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BASE_URL,
  GET_ALL_EXPERIENCES,
  UPDATE_EXPERIENCES_BY_ID,
  DELETE_EXPERIENCES_BY_ID,
  ADD_EXPERIENCES,
} from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
  experience: {},
};

export const experiences = createAsyncThunk(
  "apis/experiences",
  async (obj, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + obj.token,
        },
      };
      console.log("obj ", obj);
      let response = {};
      switch (obj.type) {
        case "get":
          response = await axios.get(
            `${BASE_URL}${GET_ALL_EXPERIENCES}`,
            config
          );
          break;
        case "put":
          response = await axios.put(
            `${BASE_URL}${UPDATE_EXPERIENCES_BY_ID}/${obj._id}`,
            obj.data,
            config
          );
          break;
        case "delete":
          response = await axios.delete(
            `${BASE_URL}${DELETE_EXPERIENCES_BY_ID}/${obj._id}`,
            config
          );
          break;
        case "add":
          response = await axios.post(
            `${BASE_URL}${ADD_EXPERIENCES}`,
            obj.data,
            config
          );
          break;
        default:
          break;
      }
      console.log("response ", response);
      if (response.status === 200) {
        if (response.data && response.data.responseCode === 200) {
          return {
            responseData: response.data.responseData,
            isSuccess: response.data.success,
          };
        }
        if (response.data && response.data.responseCode === 500) {
          return thunkAPI.rejectWithValue({ msg: response.data.message });
        }
        if (response.data && response.data.responseCode === 400) {
          return thunkAPI.rejectWithValue({ msg: response.data.message });
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

const experienceReducer = createSlice({
  name: "experienceReducer",
  initialState,
  reducers: {
    experienceStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
    selectedExperience: (state, action) => ({
      ...state,
      experience: action.payload,
    }),
  },
  extraReducers: {
    [experiences.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [experiences.fulfilled]: (state, action) => ({
      ...state,
      responseData: (action.payload && action.payload.responseData) || {},
      isSuccess: (action.payload && action.payload.isSuccess) || false,
      msg: (action.payload && action.payload.msg) || "",
      isFetching: false,
    }),
    [experiences.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: (action.payload && action.payload.msg) || "Network error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = experienceReducer;
export const { experienceStateClear, selectedExperience } = actions;
export default reducer;
