import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apikey: process.env.REACT_APP_API_KEY || "faf7e5bb"
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
