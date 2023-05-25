import React, { useState } from "react";

import {Link, useNavigate } from 'react-router-dom'
import { loginApi } from "../api/api";
import { useDispatch } from "react-redux";
import ErrorMaterialUI from "../components/ErrorMaterialUI";

const Login = () => {

  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const [ isvalidCredentials, setIsvalidCredentials] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState( {

    userName: '',
    password: '',
  } );

  const onChangeHandeller = (event) => {
    setLoginCredentials( {
      ...loginCredentials,
      [event.target.name]:event.target.value,
    })
  }

  
  const onnSubmitHandeller = async ( event ) => {
    event.preventDefault();
    const apiData=await loginApi( loginCredentials );
    console.log( loginCredentials );
    console.log( apiData?.data );
    if ( apiData?.data === undefined ) {
      setIsvalidCredentials( true );
    }
    else {
      
      localStorage.setItem( 'token', apiData?.data?.token );
      dispatch( {
        type: 'login',
        payload:apiData?.data,
      })
      navigate( '/' );
    }
    

  }


  return (
    <div className="container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>We're so exited to see you again!</p>

        {isvalidCredentials && <ErrorMaterialUI />}
 
      <form onSubmit={onnSubmitHandeller}>

        <label className="login-box__label" htmlFor="email">
          email or phone number
        </label>
        <input type="text" placeholder="Username or email" name="userName" value={loginCredentials.userName} onChange={onChangeHandeller} />
        <label className="login-box__label" htmlFor="password">
          password
        </label>
      
       
        <input type="password" placeholder="Password" name="password" value={loginCredentials.passwword} onChange={onChangeHandeller
        } />

        
        <Link className="login-box__label">Forget your password ?</Link>

        <br />
        <br />
          <button formAction="submit">Login</button>
          </form>

        <br />
        <br />

        <p className="login-box__label">need an account <Link to='/register'>Register</Link></p>

       
      </div>
    </div>
  );
};

export default Login;
