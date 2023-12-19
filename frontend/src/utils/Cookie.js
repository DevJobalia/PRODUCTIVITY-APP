// ACCESS COOKIE
export const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((s) => s.trim());

    if (cookieName === name) {
      return cookieValue;
    }
  }

  return null; // Return null if the cookie is not found
};

//   CREATE COOKIE
export const setCookie = (name, value, hours) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + hours * 60 * 60 * 1000);

  document.cookie = `${name}=${value};expires=${expirationDate.toUTCString()};path=/`;
};
