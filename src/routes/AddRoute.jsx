import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing saveroute API
import { saveRoute } from "../services/modalService";

const AddRoute = () => {
  const Navigate = useNavigate();
  // State for route
  const [route, setRoute] = useState({
    route_name: "",
    vehicle_no: "",
    total_seats: "",
    time_departure: "",
    ticket_price: "",
  });
  // handle on Change
  const handleChange = (e) => {
    const Route = {
      ...route,
      [e.target.name]: e.target.value,
    };
    setRoute(Route);
  };

  // handle on Submit
  const handleSubmit = async (e, route) => {
    e.preventDefault();
    console.log(route);
    await saveRoute(route);
    // console.log("route added");
    // Navigate("/routes/all");
  };
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-6 bg-light p-3 my-5">
            {/* <div className="mx-4">
            <CCardBody className="p-4"> */}
            <form onSubmit="">
              <h1>Add Route</h1>
              <p className="text-medium-emphasis">Add your Route details</p>
              <div className="mb-3">
                <label htmlFor="routeName" className="form-label">
                  Route Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="routeName"
                  placeholder="Motorway"
                  required
                  name="route_name"
                  onChange={handleChange}
                  value={route.route_name}
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
                  value={route.vehicle_no}
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
                  name="total_seats "
                  onChange={handleChange}
                  value={route.total_seats}
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
                  value={route.time_departure}
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
                  value={route.ticket_price}
                />
              </div>

              <button
                type="sumbmit"
                className="btn btn-info mb-3"
                onClick={(e) => handleSubmit(e, route)}
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
            </form>
            {/* </CCardBody>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoute;
