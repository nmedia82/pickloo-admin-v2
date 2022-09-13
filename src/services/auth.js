import httpService from "./httpService";
import config from "./../config.json";
export const get_member_phone = () => {
  // fake
  const user = getCurrentUser();
  return user.phone;
};

export const get_user_type = () => {
  const user = getCurrentUser();
  return user.type;
};

export const get_member_name = () => {
  // fake
  const user = getCurrentUser();
  return user.full_name;
};

export const get_company_name = () => {
  // fake
  const user = getCurrentUser();
  return user.company_name;
};

export const get_store_code = () => {
  // fake
  const user = getCurrentUser();
  return user.store_code;
};

export const get_country_code = () => {
  // fake
  return "PK";
};

export function getCurrentUser() {
  try {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  } catch (e) {
    return null;
  }
}

export const verifyLogin = (login) => {
  const url = `${config.uri_roaddy}?action=login`;
  return httpService.post(url, login);
};

export const verifyLoginPickloo = (login) => {
  const url = `${config.uri}/member/login`;
  return httpService.post(url, login);
};
