import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing alerts
import { alert_error, alert_info } from "../services/helpers";
// importing saveProduct API
import { saveVehicle } from "../services/modalService";
import AllVehicles from "./AllVehicles";

const VehiclesMain = ({ Vehicles }) => {
  // const navigate = useNavigate();

  // State for Vehicle
  const [Vehicle, setVehicle] = useState({
    transporter_phone: "",
    vehicle_number: "",
    total_seats: "",
    vehicle_type: "",
  });

  // handle on Change
  const handleChange = (e) => {
    const vehicle = {
      ...Vehicle,
      [e.target.name]: e.target.value,
    };
    setVehicle(vehicle);
  };

  // handle on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Vehicle);
    // await saveVehicle(Vehicle);}
    // {
    // let resp = {};
    // try {
    //   const vehicle = {
    //     ...Vehicle,
    //   };
    //   resp = await saveVehicle(vehicle);
    //   if (resp.status === 200) {
    //     alert_info("Done");
    //   } else {
    //     alert_error("Error while saving");
    //   }
    // } catch (e) {
    //   alert_error(e.message);
    // }
  };
  return (
    <div className="min-vh-100 d-flex flex-row">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-6 bg-light p-3">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Add Vehicle</h1>
              <p className="text-medium-emphasis text-center">
                Add your Vehicle details
              </p>
              <div className="mb-3">
                <label htmlFor="transporterPhone" className="form-label">
                  Transporter Phone
                </label>
                <input
                  className="form-control"
                  type="tel"
                  id="transporterPhone"
                  placeholder="03221234657"
                  required
                  name="transporter_phone"
                  onChange={handleChange}
                  value={Vehicle.transporter_phone}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="vehicleNumber" className="form-label">
                  Vehicle Number
                </label>
                <input
                  className="form-control"
                  id="vehicleNumber"
                  type="text"
                  placeholder="ABC123"
                  required
                  name="vehicle_number"
                  onChange={handleChange}
                  value={Vehicle.vehicle_number}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="total Seats" className="form-label">
                  Total Seats
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="total Seats"
                  placeholder="72"
                  required
                  name="total_seats"
                  onChange={handleChange}
                  value={Vehicle.total_seats}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="vehicleType" className="form-label">
                  Vehicle type
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="vehicleType"
                  placeholder="Bus"
                  required
                  name="vehicle_type"
                  onChange={handleChange}
                  value={Vehicle.vehicle_type}
                />
              </div>
              <button type="sumbmit" className="btn btn-info mb-3">
                Add Vehicle
              </button>

              {/* <Link to="/cities/all" className="btn btn-danger ms-2 mb-3">
                Cancel
              </Link> */}
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{/* <AllCities Cities={Cities} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesMain;
