import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { ClipLoader } from 'react-spinners';
import { AuthContext } from '@/Context/AuthContext/AuthContext';
import { Helmet } from 'react-helmet';

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMassage, setErrorMassage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);



  function loginUser(values) {
    setIsClicked(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then(function (x) {
        setToken(x.data.token);
        localStorage.setItem('tkn', x.data.token);
        setIsSuccess(true);
        setIsClicked(false);

        setTimeout(() => {
          navigate('/products');
        }, 2000);


      })
      .catch(function (x) {
        console.log(x);
        setErrorMassage(x.response.data.message);
        setIsClicked(false);
        setTimeout(() => {
          setErrorMassage(null);
        }, 2000);
      });

  }


  const registerFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: loginUser,
    // use yup to validate input 
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is Required").email("Invalid Email"),
      password: yup.string().required("Password is Required").min(6).max(12),
    }),


  });
  return (
    <>
      <Helmet><title>Login</title></Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">

          {isSuccess ? <div className="p-3  text-sm text-green-800 rounded-lg bg-green-50" role='alert'>
            You are successfully logged in
          </div> : ''}
          {errorMassage ? <div className="p-3  text-sm text-red-800 rounded-lg bg-red-50" role='alert'>
            {errorMassage}
          </div> : ''}


          <h2 className="text-2xl font-bold mb-6 text-center">Login Now</h2>
          <form onSubmit={registerFormik.handleSubmit} >

            <div className="relative z-0 w-full mb-5 group">
              <input value={registerFormik.values.email} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              {registerFormik.errors.email && registerFormik.touched.email ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
                {registerFormik.errors.email}
              </div> : ''}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              {registerFormik.errors.password && registerFormik.touched.password ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
                {registerFormik.errors.password}
              </div> : ''}
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              {!isClicked ? 'Login' : <ClipLoader
                color="#fff"
                size={25}

              />}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <a href="/forget-password" className="text-blue-600 hover:underline">Forget Password</a>
          </p>

        </div>
      </div>
    </>
  )
}
