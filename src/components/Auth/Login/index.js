import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-5 text-2xl">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/auth/login",
              values
            );
            alert(response.data.message);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {() => (
          <Form className="w-80">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="border p-2 mb-2 w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 mb-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
