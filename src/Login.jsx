import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing saveTransporter API
// import { saveLogin } from "./services/modalService";
import AddTransporter from "./transporters/AddTransporter";

const Login = ({ onLogin }) => {
  const Navigate = useNavigate();
  // State for transporter
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  // handle on Change
  const handleChange = (e) => {
    const login = {
      ...Login,
      [e.target.name]: e.target.value,
    };
    setLogin(login);
  };

  // handle on Submit
  const handleSubmit = async (e, Login) => {
    e.preventDefault();
    onLogin(Login);
  };
  return (
    <div className="container-fluid">
      <div className="row bg-light d-flex min-vh-100 align-items-center justify-content-center p-5">
        <div className="col-md-6 p-4">
          <form onSubmit={(e) => handleSubmit(e, Login)}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="loginEmail"
                aria-describedby="emailHelp"
                required
                onChange={handleChange}
                name="phone"
                value={Login.phone}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                required
                onChange={handleChange}
                name="pin"
                value={Login.pin}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <div className="col-md-6 p-4">
          {/* Register Transporter */}
          <AddTransporter />
        </div>
      </div>
    </div>
  );
};

export default Login;
