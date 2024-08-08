import { useEffect } from "react";
import { AddForm } from "./AddForm";
import { List } from "./List";
import { SearchBar } from "./SearchBar";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { fetchTodosThunk } from "../../redux/todos/operations";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/todos/selectors";
export const TodoList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
};
