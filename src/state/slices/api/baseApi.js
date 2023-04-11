import axios from 'axios';
// https://shuttle-backend.onrender.com
// 'http://localhost:4040/aau_shuttle',
export default axios.create({
    baseURL: 'https://shuttle-backend.onrender.com/aau_shuttle',
});
