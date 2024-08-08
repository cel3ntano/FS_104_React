import axios from "axios";
import {
  deleteTodo,
  fetchData,
  setErrorStatus,
  setLoadingStatus,
} from "./slice";

axios.defaults.baseURL = "https://66b252df1ca8ad33d4f75f79.mockapi.io/";
axios("todos");
export const fetchTodosThunk = () => async dispatch => {
  try {
    dispatch(setLoadingStatus(true));
    const response = await axios("todos");
    dispatch(fetchData(response.data));
  } catch (error) {
    dispatch(setErrorStatus(true));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export const deleteTodoThunk = id => async dispatch => {
  try {
    dispatch(setLoadingStatus(true));
    await axios.delete(`todos/${id}`);
    dispatch(deleteTodo(id));
  } catch (error) {
    dispatch(setErrorStatus(true));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};
