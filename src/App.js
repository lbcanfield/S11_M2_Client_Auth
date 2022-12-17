import React from 'react';
import './App.css';
import {
     BrowserRouter as Router,
     Routes,
     Route,
     Link
} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';


function App() {
     return (
          <div className="App">
               <header>
                    <h2>Friends Database</h2>
                    <Link className='link' to='/'>Login</Link>
                    <Link className='link' to='friends'>Friends List</Link>
                    <Link className='link' to='friends/add'>Add Friend</Link>
                    <Link className='link' to='logout'>Logout</Link>
               </header>
               <Routes>
                    <Route path='/' element={<Login />} />
                    {/* <Route path='/friends/' element={<FriendsList />} /> */}
                    <Route path='/friends' element={<PrivateRoute><FriendsList /></PrivateRoute>} />
                    {/* <Route exact path='/friends/add' element={<AddFriends />} /> */}
                    <Route path='/friends/add' element={<PrivateRoute><AddFriends /></PrivateRoute>} />
                    {/* <Route path='/logout' element={<Logout />} /> */}
                    <Route path='/logout' element={<PrivateRoute><Logout /></PrivateRoute>} />
                    <PrivateRoute path='/logout'><Logout /></PrivateRoute>

               </Routes>
          </div >
     );
}

export default App;
