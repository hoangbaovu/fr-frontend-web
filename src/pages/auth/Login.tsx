import React from 'react';
import { useFormik } from "formik";
import { login } from '../../services/auth';
import { setToken } from '../../utils/auth';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate  = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      await login({
        identifier: values.email,
        password: values.password
      }).then(res => {
        setToken(res.data.jwt)
        // localStorage.setItem('token', res.data.jwt);
        // localStorage.setItem('userId', res.data.user.id);

        navigate("/");
      }).catch(err => {
        console.log('err', err);
        // setError(true);

        if (err.response) {
          console.log(err.response.data); // => the response payload
          // setMessage(err.response.data.message[0].messages[0].message);
        }
      })
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginPage;