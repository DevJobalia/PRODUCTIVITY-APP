import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_SERVER_DOMAIN;

export async function registerUser(credentials) {
  // INSTEAD OF THEN AND .CATCH PROMISE.RESOLVE AND PROMISE.REJECT IS USED for the promise returned by axios post request
  try {
    const response = await axios.post("/api/v1/account/register", credentials);
    return Promise.resolve(response.data.msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}
