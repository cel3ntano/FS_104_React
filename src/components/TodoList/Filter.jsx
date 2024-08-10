import { useDispatch } from "react-redux";
import s from "./TodoList.module.css";
import { changeSortType } from "../../redux/todos/slice";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div className={s.flex}>
      <button onClick={() => dispatch(changeSortType("active"))}>Active</button>
      <button onClick={() => dispatch(changeSortType("completed"))}>
        Completed
      </button>
      <button onClick={() => dispatch(changeSortType("all"))}>All</button>
    </div>
  );
}
