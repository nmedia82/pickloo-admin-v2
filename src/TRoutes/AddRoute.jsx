import React, { useState } from "react";
import { InputGroup, Form, Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
import { get_member_phone } from "../services/auth";
// importing alerts
import { alert_error, alert_info, __totimeampam } from "../services/helpers";
// importing saveRoute API
import { saveRoute } from "../services/modalService";
import SubStationsComponent from "./SubStations";
import SchedualsComponent from "./Scheduals";

const AddTRoute = ({ Cities, Vehicles }) => {
  const Navigate = useNavigate();

  // State for Route
  const [Route, setRoute] = useState({
    route_name: "",
    vehicle_no: "",
    total_seats: "",
    time_departure: "",
    ticket_price: "",
  });

  const [SubStationControls, setSubStationControls] = useState([
    {
      station_name: "",
      station_ticket_price: "",
    },
  ]);

  const [SchedualControls, setSchedualControls] = useState([
    {
      departure: "",
      arrival: "",
      vehicle: "",
    },
  ]);
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
    let resp = {};
    try {
      const route = {
        ...Route,
        phone: get_member_phone(), // it's from user storage
        route_status: "inactive",
        route_schedual: [...SchedualControls],
        route_stations: [...SubStationControls],
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

  const handleSubStationChange = (e, i) => {
    var substation = [...SubStationControls];
    var k = { ...substation[i] };
    k[e.target.name] = e.target.value;
    substation[i] = k;
    console.log(i, substation);
    setSubStationControls(substation);
  };

  const handleMoreSubStation = (i) => {
    const substations = [...SubStationControls, SubStationControls[i]];
    console.log(i, substations);
    setSubStationControls(substations);
  };

  const handleRemoveSubStation = (i) => {
    const substations = SubStationControls.filter((k, index) => index !== i);
    setSubStationControls(substations);
  };

  const handleSchedualChange = (e, i) => {
    var schedual = [...SchedualControls];
    var k = { ...schedual[i] };
    var value = "";
    if (e.target.name === "departure" || e.target.name === "arrival") {
      value = __totimeampam(e.target.value);
    } else {
      value = e.target.value;
    }
    k[e.target.name] = value;
    schedual[i] = k;
    setSchedualControls(schedual);
  };

  const handleMoreSchedual = (i) => {
    const scheduals = [...SchedualControls, SchedualControls[i]];
    console.log(i, scheduals);
    setSchedualControls(scheduals);
  };

  const handleRemoveSchedual = (i) => {
    const scheduals = SchedualControls.filter((k, index) => index !== i);
    setSchedualControls(scheduals);
  };
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-7 col-xl-6 bg-light p-3 my-5">
            {JSON.stringify(Route)}
            {/* <div className="mx-4">
            <CCardBody className="p-4"> */}

            <h1>Add Route</h1>
            <p className="text-medium-emphasis">Add your Route details</p>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Route Name
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                required
                name="route_name"
                onChange={handleChange}
                value={Route.route_name}
              />
            </InputGroup>
            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="RouteFrom" className="form-label">
                    From
                  </label>
                  <select
                    className="form-select"
                    name="route_from"
                    id="RouteFrom"
                    onChange={handleChange}
                  >
                    <option>Select From</option>
                    {Cities.map((city, index) => (
                      <option key={index} value={city.city_name}>
                        {city.city_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="RouteTo" className="form-label">
                    Route Name
                  </label>
                  <select
                    id="RouteTo"
                    className="form-select"
                    name="route_to"
                    onChange={handleChange}
                  >
                    <option>Select To</option>
                    {Cities.map((city, index) => (
                      <option key={index} value={city.city_name}>
                        {city.city_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <SchedualsComponent
              Scheduals={SchedualControls}
              onSchedualChange={handleSchedualChange}
              onMoreSchedual={handleMoreSchedual}
              onRemoveSchedual={handleRemoveSchedual}
              Vehicles={Vehicles}
            />

            <SubStationsComponent
              SubStations={SubStationControls}
              onSubStationChange={handleSubStationChange}
              onMoreSubStation={handleMoreSubStation}
              onRemoveSubStation={handleRemoveSubStation}
              Cities={Cities}
            />

            <button
              type="submit"
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
