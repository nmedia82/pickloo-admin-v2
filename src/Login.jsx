import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing saveTransporter API
import { saveTransporter } from "./services/modalService";
import AddTransporter from "./transporters/AddTransporter";

const Login = () => {
  const Navigate = useNavigate();
  // State for transporter
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  // handle on Change
  const handleChange = (e) => {
    const Login = {
      ...Login,
      [e.target.name]: e.target.value,
    };
    setLogin(Login);
  };

  // handle on Submit
  const handleSubmit = async (e, Login) => {
    e.preventDefault();
    console.log(Login);
    await saveLogin(Login);
    console.log("transpoter added");
    // Navigate("/Logins/all");
  };
  return (
    <div className="container-fluid">
      <div className="row bg-light d-flex min-vh-100 align-items-center justify-content-center p-5">
        <div className="col-md-6 p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <div className="col-md-6 bg-white p-4">
          {/* Register Transporter */}
          <AddTransporter />
        </div>
      </div>
    </div>
  );
};

export default Login;
