import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ id: 1, todo: "Learn Redux" }],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

console.log(slice);

export const todosReducer = slice.reducer;
export const deleteTodo = slice.actions;
