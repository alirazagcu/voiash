import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { extend, isEmpty } from "lodash";
import {
  BASE_URL,
  GET_ALL_GROUPS,
  UPDATE_GROUPS_BY_ID,
  DELETE_GROUPS_BY_ID,
  ADD_GROUPS,
} from "./constant";

const initialState = {
  responseData: {},
  isError: false,
  isFetching: false,
  msg: "",
  isSuccess: false,
  group: {},
};

export const groupsActions = createAsyncThunk(
  "apis/groupsActions",
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
          response = await axios.get(`${BASE_URL}${GET_ALL_GROUPS}`, config);
          break;
        case "put":
          // let newData = new FormData();
          // if (!isEmpty(obj.listImage)) {
          //   newData.append("image", obj.listImage, "listImage");
          // }
          // if (!isEmpty(obj.allImages)) {
          //   obj.allImages.map(() => {
          //     newData.append("image", obj.data.listImage, "images");
          //   });
          // }
          // if (obj.data.name) {
          //   newData.append("name", obj.data.name);
          // }
          // if (obj.data.paymentDetails) {
          //   newData.append("paymentDetails", obj.data.paymentDetails);
          // }
          // if (obj.data.duration) {
          //   newData.append("duration", obj.data.duration);
          // }
          // if (!isEmpty(obj.data.destination)) {
          //   newData.append("destination", JSON.stringify(obj.data.destination));
          // }
          // if (!isEmpty(obj.data.hotel)) {
          //   newData.append("hotel", JSON.stringify(obj.data.hotel));
          // }
          // if (!isEmpty(obj.data.family)) {
          //   newData.append("family", JSON.stringify(obj.data.family));
          // }
          // if (obj.data.airports) {
          //   newData.append("airports", obj.data.airports);
          // }
          // if (obj.data.status) {
          //   newData.append("status", obj.data.status);
          // }
          // if (obj.data.departureDate) {
          //   newData.append("departureDate", obj.data.departureDate);
          // }
          // if (obj.data.returnDate) {
          //   newData.append("returnDate", obj.data.returnDate);
          // }
          // if (!isEmpty(obj.data.contractInPdf)) {
          //   newData.append(
          //     "contractInPdf",
          //     JSON.stringify(obj.data.contractInPdf)
          //   );
          // }
          // if (obj.data.descriptionMobile) {
          //   newData.append("descriptionMobile", obj.data.descriptionMobile);
          // }
          // if (!isEmpty(obj.data.listImage)) {
          //   newData.append("listImage", JSON.stringify(obj.data.listImage));
          // }
          // if (obj.data.kind) {
          //   newData.append("kind", obj.data.kind);
          // }
          // if (!isEmpty(obj.data.experience)) {
          //   newData.append("experience", JSON.stringify(obj.data.experience));
          // }
          // if (!isEmpty(obj.data.insurance)) {
          //   newData.append("insurance", JSON.stringify(obj.data.insurance));
          // }
          // if (obj.data.description) {
          //   newData.append("description", obj.data.description);
          // }
          // if (!isEmpty(obj.data.images)) {
          //   newData.append("images", JSON.stringify(obj.data.images));
          // }
          // if (!isEmpty(obj.data.paymentTable)) {
          //   newData.append(
          //     "paymentTable",
          //     JSON.stringify(obj.data.paymentTable)
          //   );
          // }
          // if (!isEmpty(obj.data.share)) {
          //   newData.append("share", JSON.stringify(obj.data.share));
          // }
          // if (obj.data.visibility) {
          //   newData.append("visibility", obj.data.visibility);
          // }

          // extend(config.headers, {
          //   "Content-Type": "multipart/form-data",
          // });
          response = await axios.put(
            `${BASE_URL}${UPDATE_GROUPS_BY_ID}${obj._id}`,
            obj.data,
            config
          );
          break;
        case "delete":
          response = await axios.delete(
            `${BASE_URL}${DELETE_GROUPS_BY_ID}/${obj._id}`,
            config
          );
          break;
        case "add":
          // let newData = new FormData();
          // newData.append("image", obj.listImage, "listImage");
          // obj.allImages.map(()=>{
          //   newData.append("image", obj.data.listImage, "images");
          // })
          // newData.append("name", obj.data.name);
          // newData.append("paymentDetails", obj.data.paymentDetails);
          // newData.append("duration", obj.data.duration);
          // newData.append("destination", JSON.stringify(obj.data.destination));
          // newData.append("hotel", JSON.stringify(obj.data.hotel));
          // newData.append("family", JSON.stringify(obj.data.family));
          // newData.append("airports", obj.data.airports);
          // newData.append("status", obj.data.status);
          // newData.append("departureDate", obj.data.departureDate);
          // newData.append("returnDate", obj.data.returnDate);
          // newData.append("contractInPdf", JSON.stringify(obj.data.contractInPdf));
          // newData.append("descriptionMobile", obj.data.descriptionMobile);
          // newData.append("listImage", JSON.stringify(obj.data.listImage));
          // newData.append("kind", obj.data.kind);
          // newData.append("experience", JSON.stringify(obj.data.experience));
          // newData.append("insurance", JSON.stringify(obj.data.insurance));
          // newData.append("description", obj.data.description);
          // newData.append("images", JSON.stringify(obj.data.images));
          // newData.append("paymentTable", JSON.stringify(obj.data.paymentTable));
          // newData.append("share", JSON.stringify(obj.data.share));
          // newData.append("visibility", obj.data.visibility);
          // extend(config.headers, {
          //   "Content-Type": "multipart/form-data",
          // });
          response = await axios.post(
            `${BASE_URL}${ADD_GROUPS}`,
            obj.data,
            config
          );
          break;
        default:
          break;
      }
      if (response.status === 200) {
        if (response.data && response.data.responseCode === 200) {
          switch (obj.type) {
            case "get":
              return {
                responseData: response.data.responseData,
                isSuccess: false,
              };
            case "add":
              return {
                responseData: response.data.responseData,
                isSuccess: true,
                msg: "Your record is succfully added",
              };
            case "put":
              return {
                responseData: response.data.responseData,
                isSuccess: true,
                msg: "Your record is succfully updated",
              };
            case "delete":
              return {
                responseData: response.data.responseData,
                isSuccess: true,
                msg: "Your record is succfully deleted",
              };
            default:
              return {
                responseData: response.data.responseData,
                isSuccess: response.data.success,
              };
          }
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

const groupsReducer = createSlice({
  name: "groupsReducer",
  initialState,
  reducers: {
    groupsStateClear: (state) => ({
      ...state,
      isError: false,
      isFetching: false,
      isSuccess: false,
      msg: "",
    }),
    selectedGroup: (state, action) => ({
      ...state,
      group: action.payload,
    }),
  },
  extraReducers: {
    [groupsActions.pending]: (state, action) => ({
      ...state,
      isFetching: true,
    }),
    [groupsActions.fulfilled]: (state, action) => ({
      ...state,
      responseData: (action.payload && action.payload.responseData) || {},
      isSuccess: (action.payload && action.payload.isSuccess) || false,
      msg: (action.payload && action.payload.msg) || "",
      isFetching: false,
    }),
    [groupsActions.rejected]: (state, action) => ({
      ...state,
      isError: true,
      msg: (action.payload && action.payload.msg) || "Network error",
      isFetching: false,
    }),
  },
});

export const { actions, reducer } = groupsReducer;
export const { groupsStateClear, selectedGroup } = actions;
export default reducer;
