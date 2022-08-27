export const get_transporter_phone = () => {
  // fake
  return "03224028612";
};

const is_loggedin = () => {
  return true;
};

export const verifyLogin = (login) => {
  if( login.password === '1122' ){
    return {"fullname":"Najeeb","phone":"03224028612", "type":"transporter"};
  } else {
    return null;
  }
  
}