import React, { useState } from "react";

const LoginPickloo = ({ onLogin }) => {
  // State for transporter
  const [Login, setLogin] = useState({});
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
      <div className="row d-flex min-vh-100 justify-content-center p-5">
        <div className="col-md-12 p-4">
          <h2>Login</h2>
          <form
            onSubmit={(e) => handleSubmit(e, Login)}
            className="bg-light p-3"
          >
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                aria-describedby="emailHelp"
                required
                onChange={handleChange}
                name="phone"
                value={Login.phone}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your phone number with anyone else.
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
          {/* <AddTransporter /> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPickloo;
