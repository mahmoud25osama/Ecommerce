import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import * as yup from 'yup';

export default function Register() {

  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMassage, setErrorMassage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  

  function registerUser(values){
  setIsClicked(true);
  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
  .then(function () {
    setIsSuccess(true);
    setIsClicked(false);
    setTimeout(() => {
      navigate('/login');
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


  const registerFormik= useFormik({   
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',     
    },
    onSubmit:registerUser,


    validationSchema:yup.object().shape({
      name:yup.string().required("Name is Required").min(3,"Minmum is 3 character").max(12,"Max is 12 character"),
      email:yup.string().required("Email is Required").email("Invalid Email"),
      phone:yup.string().required("Phone is Required").matches(/^01[0125][0-9]{8}$/),
      password:yup.string().required("Password is Required").min(6).max(12),
      rePassword:yup.string().required("re Password is Required").oneOf([yup.ref("password")],"re Password dosn't matches"),
    }),


      });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">

        {isSuccess ? <div className="p-3  text-sm text-green-800 rounded-lg bg-green-50" role='alert'>
                    You are successfully registered
        </div> :''}
        {errorMassage ? <div className="p-3  text-sm text-red-800 rounded-lg bg-red-50" role='alert'>
                    {errorMassage}
        </div> :''}


        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={registerFormik.handleSubmit} >

              <div className="relative z-0 w-full mb-5 group">
                  <input value={registerFormik.values.name} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                  {registerFormik.errors.name && registerFormik.touched.name ? <div className="p-3  text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
                    {registerFormik.errors.name}
                  </div> :''}
              </div>
            
            <div className="relative z-0 w-full mb-5 group">
              <input value={registerFormik.values.email}   onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange}type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              {registerFormik.errors.email && registerFormik.touched.email ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
                    {registerFormik.errors.email}
                  </div> :''}
            </div>

            <div class="relative z-0 w-full mb-5 group">
                  <input value={registerFormik.values.phone} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="tel"  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75  top-1   -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                  {registerFormik.errors.phone && registerFormik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
                    {registerFormik.errors.phone}
                  </div> :''}
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                {registerFormik.errors.password && registerFormik.touched.password ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
                    {registerFormik.errors.password}
                  </div> :''}
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input value={registerFormik.values.rePassword} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                {registerFormik.errors.rePassword && registerFormik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
                    {registerFormik.errors.rePassword}
                  </div> :''}
            </div>

            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              { ! isClicked? 'Register':<ClipLoader
                color="#fff"
                size={20}
              
              /> }
            </button>
          </form>
      </div>
    </div>
  )
}
