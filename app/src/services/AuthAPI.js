import { baseUrl, KEY } from "../utils/constants";

export const isLoggedInAPI = !!localStorage.getItem(KEY);
export const loginAPI = async body =>
  await fetch(`${baseUrl}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });
export const saveLoginStateAPI = () => localStorage.setItem(KEY, true);
export const logoutAPI = () => localStorage.removeItem(KEY);
