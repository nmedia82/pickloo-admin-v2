import httpService from "./httpService";
import config from "./../config.json";
export const get_transporter_phone = () => {
  // fake
  const user = getCurrentUser();
  return user.phone;
};

export function getCurrentUser() {
  try {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  } catch (e) {
    return null;
  }
}

const is_loggedin = () => {
  return true;
};

export const verifyLogin = (login) => {
  const url = `${config.uri_roaddy}?action=login`;
  return httpService.post(url, login);
};
