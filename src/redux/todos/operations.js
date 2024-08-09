import axios from "axios";
import { deleteTodo } from "./slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b252df1ca8ad33d4f75f79.mockapi.io/";
axios("todos");

export const fetchTodosThunk = createAsyncThunk(
  "fetchTodos",
  async (_, thunkApi) => {
    try {
      const { data } = await axios("todos");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTodosThunk = createAsyncThunk(
  "deleteTodos",
  async (id, thunkApi) => {
    try {
      // const { data } = await axios.delete(`todos/${id}`);
      await axios.delete(`todos/${id}`);
      // return data.id;
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const fetchTodosThunk = () => async dispatch => {
//   try {
//     dispatch(setLoadingStatus(true));
//     const response = await axios("todos");
//     dispatch(fetchData(response.data));
//   } catch (error) {
//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };

// export const deleteTodoThunk = id => async dispatch => {
// try {
//   dispatch(setLoadingStatus(true));
//   await axios.delete(`todos/${id}`);
//   dispatch(deleteTodo(id));
// } catch (error) {
//   dispatch(setErrorStatus(true));
// } finally {
//   dispatch(setLoadingStatus(false));
// }
// };
