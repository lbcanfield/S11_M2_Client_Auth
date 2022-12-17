import axios from 'axios';
import appData from '../appData/appData';

const axiosWithAuth = () => {
     const token = localStorage.getItem('token');
     return axios.create({
          headers: {
               authorization: token
          },
          baseURL: appData.baseURL
     })
}

export default axiosWithAuth;