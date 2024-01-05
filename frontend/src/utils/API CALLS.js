import AxiosClient from "./AxiosClient";

export async function registerUser(credentials) {
  // INSTEAD OF THEN AND .CATCH PROMISE.RESOLVE AND PROMISE.REJECT IS USED for the promise returned by axios post request
  try {
    const response = await AxiosClient.post(
      "/api/v1/account/register",
      credentials,
      {
        credentials: "include",
      }
    );
    return Promise.resolve(response.data.msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function login({ username, password }) {
  console.log(username, password);
  try {
    if (username && password) {
      const { data } = await AxiosClient.post("/api/v1/account/login", {
        username,
        password,
      });
      console.log(data);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match" });
  }
}

export async function sendToken() {
  try {
    const { data } = await AxiosClient.get("/api/v1/account/protected");
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error: "Empty token Match" });
  }
}

export async function getUser() {
  try {
    const { data } = await AxiosClient.get(`/api/v1/account/user`);
    return data;
  } catch (error) {
    return { error: "Password doesn't Match!" };
  }
}

// updateUser
