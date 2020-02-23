import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class API {
  static getPosts = () => {
    return axios.get(`${API_URL}/posts`);
  }
}

export default API;