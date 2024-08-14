import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItAPI } from "../../config/goItApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goItAPI.post("users/signup", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
