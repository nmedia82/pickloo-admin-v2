import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
import { get_transporter_phone } from "../services/auth";
// importing alerts
import { alert_error, alert_info } from "../services/helpers";
// importing saveRoute API
import { saveRoute } from "../services/modalService";

const AddTRoute = () => {
  const Navigate = useNavigate();

  // State for Route
  const [Route, setRoute] = useState({
    route_name: "",
    vehicle_no: "",
    total_seats: "",
    time_departure: "",
    ticket_price: "",
  });
  // handle on Change
  const handleChange = (e) => {
    const route = {
      ...Route,
      [e.target.name]: e.target.value,
    };
    setRoute(route);
  };

  // handle on Submit
  const handleSubmit = async () => {
    // e.preventDefault();
    // console.log(Route);
    // await saveRoute(Route);
    // console.log("Route added");
    let resp = {};
    try {
      const route = {
        ...Route,
        phone: get_transporter_phone(), // it's from user storage
        route_status: "inactive",
      };
      resp = await saveRoute(route);
      if (resp.status === 200) {
        // const { data } = resp;
        alert_info("Done");
        Navigate("/routes/all");
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
          <div className="col-md-9 col-lg-7 col-xl-6 bg-light p-3 my-5">
            {/* <div className="mx-4">
            <CCardBody className="p-4"> */}
            <h1>Add Route</h1>
            <p className="text-medium-emphasis">Add your Route details</p>
            <div className="mb-3">
              <label htmlFor="RouteName" className="form-label">
                Route Name
              </label>
              <input
                className="form-control"
                type="text"
                id="RouteName"
                placeholder="Motorway"
                required
                name="route_name"
                onChange={handleChange}
                value={Route.route_name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vehicleNumber" className="form-label">
                Vehicle Number
              </label>
              <input
                className="form-control"
                type="text"
                id="vehicleNumber"
                placeholder="ABC123"
                required
                name="vehicle_no"
                onChange={handleChange}
                value={Route.vehicle_no}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="totalSeats" className="form-label">
                Total Seats
              </label>
              <input
                className="form-control"
                type="number"
                id="totalSeats"
                placeholder="70"
                required
                name="total_seats"
                onChange={handleChange}
                value={Route.total_seats}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="timeDeparture" className="form-label">
                Time Departure
              </label>
              <input
                className="form-control"
                type="time"
                id="timeDeparture"
                placeholder="9 AM"
                required
                name="time_departure"
                onChange={handleChange}
                value={Route.time_departure}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ticketPrice" className="form-label">
                Ticket Price
              </label>
              <input
                className="form-control"
                type="number"
                id="ticketPrice"
                placeholder="70"
                required
                name="ticket_price"
                onChange={handleChange}
                value={Route.ticket_price}
              />
            </div>

            <button
              className="btn btn-info mb-3"
              onClick={(e) => handleSubmit()}
            >
              Add Route
            </button>
            {/* <button className="btn btn-info m-2" onClick="">
                  Save
                </button> */}
            {/* <CButton className="btn-danger ms-2 mb-3" onClick={onCancel}>
                  Cancel
                </CButton> */}
            <Link to="/routes/all">
              <button className="btn btn-danger ms-2 mb-3">Cancel</button>
            </Link>
            {/* </CCardBody>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTRoute;
