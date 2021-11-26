import axios from 'axios';

const Instance = axios.create({
  headers: { 
    'X-RapidAPI-Key': '7908c27466msh9fd4ecaf23f4d35p116d47jsn37da3ac8c05d'
    },
});

export default Instance;