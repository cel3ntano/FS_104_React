import { createSlice } from "@reduxjs/toolkit";
// 1.
const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

// 2.
const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.isError = action.payload;
    },

    fetchData: (state, action) => {
      state.items = action.payload;
    },

    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
// 3.
export const todosReducer = slice.reducer;
export const {
  deleteTodo,
  addTodo,
  setLoadingStatus,
  setErrorStatus,
  fetchData,
} = slice.actions;
