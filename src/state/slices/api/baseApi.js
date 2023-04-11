import axios from 'axios';
// https://shuttle-backend.onrender.com
// 'http://localhost:4040/aau_shuttle',
export default axios.create({
    baseURL: 'http://localhost:4040/aau_shuttle',
});
