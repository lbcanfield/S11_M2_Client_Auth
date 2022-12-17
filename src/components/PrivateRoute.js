import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function useAuth() {
     return true;
}

const PrivateRoute = (props) => {

     return localStorage.getItem('token') ? props.children : <Navigate to="/" />;
}

export default PrivateRoute;