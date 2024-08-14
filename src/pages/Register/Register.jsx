import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function Register() {
  const initialValues = {
    name: "",
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
