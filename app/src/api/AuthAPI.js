import { baseUrl, KEY } from "../utils/constants";

const isLoggedInAPI = !!localStorage.getItem(KEY);
const loginAPI = async body =>
  await fetch(`${baseUrl}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });
const saveLoginStateAPI = () => localStorage.setItem(KEY, true);
const logoutAPI = () => localStorage.removeItem(KEY);
export { isLoggedInAPI, loginAPI, saveLoginStateAPI, logoutAPI };
