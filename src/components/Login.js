import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appData from '../appData/appData';
import axios from 'axios';

const Login = () => {
     const [credentials, setCredentials] = useState({ username: '', password: '' });
     const [loginSuccess, setLoginSuccess] = useState(false);
     const navigate = useNavigate();

     const handleInputChange = event => {
          setCredentials({
               ...credentials,
               [event.target.name]: event.target.value
          })
     }

     const handleSubmit = event => {
          event.preventDefault();
          axios.post(`${appData.baseURL}/login`, credentials)
               .then(response => {
                    console.log(response)
                    localStorage.setItem('token', response.data.token)
                    navigate("/friends")
               })
               .catch(error => {
                    console.log(error)
               })
     }

     return (
          <div>
               <h2>Login</h2>
               <form onSubmit={handleSubmit}>
                    <div>
                         <label htmlFor='username'>User Name</label>
                         <input onChange={handleInputChange} id='username' name='username' />
                    </div>
                    <div>
                         <label htmlFor='password'>Password</label>
                         <input onChange={handleInputChange} type='password' id='password' name='password' />
                    </div>

                    <button>Submit</button>
               </form>
          </div>
     )
}

export default Login;