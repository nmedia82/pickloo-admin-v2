import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing alerts
import { alert_error, alert_info } from "../services/helpers";
// importing saveTransporter API
import { saveTransporter, sendWelcomePin } from "../services/modalService";

const AddTransporter = () => {
  const Navigate = useNavigate();
  // State for transporter
  const [Transporter, setTransporter] = useState({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });
  // handle on Change
  const handleChange = (e) => {
    const transporter = {
      ...Transporter,
      [e.target.name]: e.target.value,
    };
    setTransporter(transporter);
  };

  // handle on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let resp = {};
    try {
      const transporter = {
        ...Transporter,
        transporter_status: "inactive",
        type: "transporter",
      };
      resp = await saveTransporter(transporter);
      if (resp.status === 200) {
        // const { data } = resp;
        const { email, full_name, pin, phone } = resp.data.Item;
        const welcome_data = {
          full_name: full_name,
          email: email,
          pin: pin.toString(),
          phone: phone,
        };
        resp = await sendWelcomePin(welcome_data);
        alert_info("Your account is created, please check email for your pin.");
        Navigate("/login");
      } else {
        alert_error("Error while saving");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="bg-light p-4">
            <form onSubmit={(e) => handleSubmit(e)}>
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
                  placeholder="Amir Khalid"
                  required
                  name="full_name"
                  onChange={handleChange}
                  value={Transporter.full_name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="company_name" className="form-label">
                  Company Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="company_name"
                  placeholder="Usman Travels"
                  required
                  name="company_name"
                  onChange={handleChange}
                  value={Transporter.company_name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  placeholder="03211234567"
                  required
                  name="phone"
                  onChange={handleChange}
                  value={Transporter.phone}
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
                  value={Transporter.email}
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
                  value={Transporter.address}
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
                  value={Transporter.city}
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
                // onClick={(e) => handleSubmit()}
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
              {/* </CCardBody>
          </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTransporter;
