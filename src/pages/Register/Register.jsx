import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

export default function Register() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='name' placeholder='Enter name' />
          <Field name='email' placeholder='Enter email' />
          <Field name='password' type='password' placeholder='Enter password' />
          <button type='submit'>Register</button>
          <p>
            Already registered? <Link to='/login'>Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
