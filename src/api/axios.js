import axios from "axios";

export default axios.create({
  baseURL: 'https://cartestwebapp.herokuapp.com'
})