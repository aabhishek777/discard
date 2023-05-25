import React, { useState } from "react";
import { registerApi } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [registerData, setRegisterData] = useState( {
    userName: '',
    email: '',
    password: '',

  } );
  const onChangeHandeller = ( event ) => {
    setRegisterData( {
      ...registerData,
      [event.target.name]:event.target.value,
    })
  }



  const onSubmitHandeller = async  ( event ) => {
    event.preventDefault();
   
    console.log( registerData );
    const apiData =  await registerApi( registerData );
    // console.log( apiData?.data?.msg );

    dispatch( {
      type: "register",
      payload: apiData?.data,
      
    } );
    localStorage.setItem( 'token', apiData?.data.token );
    
    if ( apiData?.data.msg === "registered success" )
      navigate('/')
    

    

}


  return (
    <div className="container">
      <div className="register-box">
        <h2 className="color-white">Create an Account</h2>
        <form onSubmit={onSubmitHandeller}>


          <label htmlFor="username" className="color-white">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            name="userName"
            value={registerData.userName} onChange={onChangeHandeller} 
            required
          />



          <label fohtmlFor="email" className="color-white" >  Email   </label>
          <input
            type="email"
            id="email"
            name='email'
            value={registerData.email}
            placeholder="Enter your email" onChange={onChangeHandeller}
            required
          />

          <label htmlFor="password" className="color-white">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={registerData.password} onChange={onChangeHandeller}
            required
          />

          <button type="submit">Register</button>
        </form>
        <p className="color-white">
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
