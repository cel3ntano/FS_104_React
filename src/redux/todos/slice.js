import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const todosReducer = slice.reducer;
