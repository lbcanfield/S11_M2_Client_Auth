import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appData from '../appData/appData';
import axios from 'axios';

const AddFriends = () => {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
          name: '',
          age: '',
          email: ''
     })

     const handleChange = event => {
          setFormData({
               ...formData,
               [event.target.name]: event.target.value
          });
     }

     const handleSubmit = event => {
          event.preventDefault();
          const token = localStorage.getItem('token');
          axios.post(`${appData.baseURL}/friends`, formData, {
               headers: {
                    authorization: token
               }
          }, formData)
               .then(response => {
                    // console.log(response)
               })
               .catch(error => {
                    console.log(error)
               })
               .finally(
                    navigate('/friends')
               )
     }

     return (
          <div>
               <h2>AddFriends Component</h2>
               <form onSubmit={handleSubmit}>
                    <div>
                         <label htmlFor='name' >Name:</label>
                         <input id='name' name='name' onChange={handleChange} placeholder='First Last'></input>
                    </div>
                    <div>
                         <label htmlFor='age'>Age:</label>
                         <input id='age' name='age' onChange={handleChange} placeholder='Age'></input>
                    </div>
                    <div>
                         <label htmlFor='email'>Email:</label>
                         <input id='email' name='email' onChange={handleChange} placeholder='name@domain'></input>
                    </div>
                    <button>Submit</button>
               </form>
          </div>
     )
}

export default AddFriends;