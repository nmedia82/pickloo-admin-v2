import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing saveTransporter API
import { saveTransporter } from "../services/modalService";

const AddTransporter = () => {
  const Navigate = useNavigate();
  // State for transporter
  const [transporter, setTransporter] = useState({
    full_name: "",
    transporter_phone: "",
    email: "",
    address: "",
    city: "",
  });
  // handle on Change
  const handleChange = (e) => {
    const Transporter = {
      ...transporter,
      [e.target.name]: e.target.value,
    };
    setTransporter(Transporter);
  };

  // handle on Submit
  const handleSubmit = async (e, transporter) => {
    e.preventDefault();
    console.log(transporter);
    // await saveTransporter(transporter);
    // console.log("transpoter added");
    // Navigate("/transporters/all");
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-6 bg-light p-3 my-5">
            {/* <div className="mx-4">
            <CCardBody className="p-4"> */}
            <form onSubmit="">
              <h1>Register transporter</h1>
              <p className="text-medium-emphasis">
                Add your transporter details
              </p>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="fullName"
                  placeholder="Bilal Transports"
                  required
                  name="full_name"
                  onChange={handleChange}
                  value={transporter.full_name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="phone"
                  placeholder="03211234567"
                  required
                  name="transporter_phone"
                  onChange={handleChange}
                  value={transporter.transporter_phone}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="email@email.com"
                  required
                  name="email"
                  onChange={handleChange}
                  value={transporter.email}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows="3"
                  required
                  name="address"
                  onChange={handleChange}
                  value={transporter.address}
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="city">City</label>
                <select
                  className="form-control"
                  id="city"
                  required
                  name="city"
                  onChange={handleChange}
                  value={transporter.city}
                >
                  <option>Chenab Nagar</option>
                  <option>Lahore</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                  <option>Faisalabad</option>
                </select>
              </div>
              <button
                type="sumbmit"
                className="btn btn-info mb-3"
                onClick={(e) => handleSubmit(e, transporter)}
              >
                Add transporter
              </button>
              {/* <button className="btn btn-info m-2" onClick="">
                  Save
                </button> */}
              {/* <CButton className="btn-danger ms-2 mb-3" onClick={onCancel}>
                  Cancel
                </CButton> */}
              <Link to="/transporters/all">
                <button className="btn btn-danger ms-2 mb-3">Cancel</button>
              </Link>
            </form>
            {/* </CCardBody>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTransporter;
