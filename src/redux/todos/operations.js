import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItAPI } from "../../config/goItAPI";

export const fetchTodosThunk = createAsyncThunk(
  "fetchTodos",
  async (_, thunkAPI) => {
    try {
      const { data } = await goItAPI.get("tasks");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "deleteTodo",
  async (id, thunkAPI) => {
    try {
      await goItAPI.delete(`tasks/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  "addTodo",
  async (body, thunkAPI) => {
    try {
      const { data } = await goItAPI.post("tasks", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleTodoThunk = createAsyncThunk(
  "toggleTodo",
  async (body, thunkAPI) => {
    try {
      const { data } = await goItAPI.put(`tasks/${body.id}`, {
        ...body,
        completed: !body.completed,
      });
      console.log(data);
      return body.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchTodosThunk = () => async dispatch => {
//   try {
//     dispatch(setLoadingStatus(true));
//     const response = await goItAPI.get('todos');
//     console.log(response.data);
//     dispatch(fetchData(response.data));
//   } catch (error) {
//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };

// export const deleteTodoThunk = id => async dispatch => {
//   // try {
//   //   dispatch(setLoadingStatus(true));
//   //   await goItAPI.delete(`todos/${id}`);
//   //   dispatch(deleteTodo(id));
//   // } catch (error) {
//   //   dispatch(setErrorStatus(true));
//   // } finally {
//   //   dispatch(setLoadingStatus(false));
//   // }
// };
