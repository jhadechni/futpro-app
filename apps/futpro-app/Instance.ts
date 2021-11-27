import axios from 'axios';

const Instance = axios.create({
  headers: { 
    'x-rapidapi-key': process.env.NX_APP_KEY
    },
});

export default Instance;