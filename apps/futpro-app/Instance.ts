import axios from 'axios';

const Instance = axios.create({
  headers: { 
    'x-rapidapi-key': process.env.NX_APP_KEY,
    'x-rapidapi-host': process.env.NX_HOST
    },
});

export default Instance;