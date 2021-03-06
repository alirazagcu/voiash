import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { extend } from "lodash";
import {
  BASE_URL,
  GET_ALL_FAMILIES,
  UPDATE_FAMILY_BY_ID,
  DELETE_FAMILY_BY_ID,
  ADD_FAMILY,
} from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
  family: {},
};

export const families = createAsyncThunk(
  "getall/families",
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
          response = await axios.get(`${BASE_URL}${GET_ALL_FAMILIES}`, config);
          break;
        case "put":
          let newUpdateData = new FormData();
          if (
            !(obj.data.backgroundImage && obj.data.backgroundImage.imageLink)
          ) {
            newUpdateData.append("image", obj.data.backgroundImage, "image");
          }
          if (!(obj.data.logo && obj.data.logo.logoLink)) {
            newUpdateData.append("image", obj.data.logo, "logo");
          }
          newUpdateData.append("name", obj.data.name);
          newUpdateData.append("status", obj.data.status);
          newUpdateData.append("slug", obj.data.slug);
          newUpdateData.append("hashtag", obj.data.hashtag);
          newUpdateData.append("color", obj.data.color);
          newUpdateData.append("description", obj.data.description);
          extend(config.headers, {
            "Content-Type": "multipart/form-data",
          });
          response = await axios.put(
            `${BASE_URL}${UPDATE_FAMILY_BY_ID}/${obj._id}`,
            newUpdateData,
            config
          );
          break;
        case "delete":
          response = await axios.delete(
            `${BASE_URL}${DELETE_FAMILY_BY_ID}/${obj._id}`,
            config
          );
          break;
        case "add":
          let newData = new FormData();
          newData.append("image", obj.data.backgroundImage, "image");
          newData.append("image", obj.data.logo, "logo");
          newData.append("name", obj.data.name);
          newData.append("status", obj.data.status);
          newData.append("slug", obj.data.slug);
          newData.append("hashtag", obj.data.hastag);
          newData.append("color", obj.data.color);
          newData.append("description", obj.data.description);
          extend(config.headers, {
            "Content-Type": "multipart/form-data",
          });
          response = await axios.post(
            `${BASE_URL}${ADD_FAMILY}`,
            newData,
            config
          );
          break;
        default:
          break;
      }
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

const familiesReducer = createSlice({
  name: "signReducer",
  initialState,
  reducers: {
    getAllFamiliesstateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
    }),
    selectedFamily: (state, action) => ({
      ...state,
      family: action.payload,
    }),
  },
  extraReducers: {
    [families.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [families.fulfilled]: (state, action) => ({
      ...state,
      responseData: (action.payload && action.payload.responseData) || {},
      isSuccess: (action.payload && action.payload.isSuccess) || false,
      msg: (action.payload && action.payload.msg) || "",
      isFetching: false,
    }),
    [families.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: (action.payload && action.payload.msg) || "Network error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = familiesReducer;
export const { getAllFamiliesstateClear, selectedFamily } = actions;
export default reducer;
