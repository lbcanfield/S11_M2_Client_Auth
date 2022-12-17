import React, { useState, useEffect } from 'react';
import appData from '../appData/appData';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
     const [friends, setFriends] = useState([]);

     useEffect(() => {
          const token = localStorage.getItem('token');
          axiosWithAuth().get(`/friends`)
               .then(response => {
                    setFriends(response.data);
               })
               .catch(error => {
                    console.log(error);
               })
     }, [])
     console.log(friends);

     return (
          < div >
               <h2>FriendsList Component</h2>
               <ul>
                    {
                         friends.map(friend => {
                              return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
                         })
                    }
               </ul>
          </div >
     )
}

export default FriendsList;