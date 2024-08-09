import { createSlice } from "@reduxjs/toolkit";
import { deleteTodosThunk, fetchTodosThunk, addTodoThunk } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodosThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTodosThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodosThunk.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export const todosReducer = slice.reducer;
