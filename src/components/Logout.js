import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import appData from '../appData/appData';


const Logout = () => {
     const navigate = useNavigate();
     useEffect(() => {
          const token = localStorage.getItem('token');
          axios.post(`${appData.baseURL}/logout`, {}, {
               headers: {
                    authorization: token
               }
          })
               .then(response => {
                    console.log(response);
                    localStorage.removeItem('token')
                    navigate('/')
               })
     })
}

export default Logout;