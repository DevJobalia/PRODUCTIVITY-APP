import AxiosClient from "./AxiosClient";

export async function registerUser(credentials) {
  // INSTEAD OF THEN AND .CATCH PROMISE.RESOLVE AND PROMISE.REJECT IS USED for the promise returned by axios post request
  try {
    const response = await AxiosClient.post(
      "/api/v1/account/register",
      credentials,
      { withCredentials: true }
    );
    return Promise.resolve(response.data.msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function login({ username, password }) {
  console.log(password);
  try {
    if (username && password) {
      const { data } = await AxiosClient.post("/api/v1/account/login", {
        username,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match" });
  }
}
