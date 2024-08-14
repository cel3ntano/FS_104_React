import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);

    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='email' placeholder='Enter email' />
          <Field name='password' type='password' placeholder='Enter password' />
          <button type='submit'>Login</button>
          <p>
            Need a new account? <Link to='/register'>Sign up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
