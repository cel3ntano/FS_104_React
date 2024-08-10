import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = state => state.todos.items;
export const selectIsLoading = state => state.todos.isLoading;
export const selectIsError = state => state.todos.isError;

// export const selectUncompletedTodos = state => {
//   const todos = selectTodos(state);
//   return todos.reduce(
//     (total, current) => (!current.completed ? ++total : total),
//     0
//   );
// };

export const selectUncompletedTodosMemo = createSelector(
  [selectTodos],
  todos => {
    return todos.reduce(
      (total, current) => (!current.completed ? ++total : total),
      0
    );
  }
);
