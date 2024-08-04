import { Field, Form, Formik } from "formik";
import s from "./TodoList.module.css";
import { addTodo } from "../../redux/todos/slice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export const AddForm = () => {
  const dispatch = useDispatch();
  const initialValues = { todo: "" };
  const onSubmit = (values, options) => {
    const newItem = {
      todo: values.todo,
      id: nanoid(),
    };
    dispatch(addTodo(newItem));
    options.resetForm();
    console.log(values);
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='todo' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
