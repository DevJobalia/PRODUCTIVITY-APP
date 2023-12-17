import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_SERVER_DOMAIN;
const USER_ID = 123;

export default axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    //     'x-user-id': USER_ID,
  },
  timeout: 5000,
});
