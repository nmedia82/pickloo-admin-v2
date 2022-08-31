import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing alerts
import { alert_error, alert_info } from "../services/helpers";
// importing saveProduct API
import { saveCity } from "../services/modalService";
import AllCities from "./AllCities";

const CitiesMain = ({ Cities }) => {
  // const navigate = useNavigate();

  // State for City
  const [City, setCity] = useState({
    city_name: "",
    city_areas: [],
  });

  // handle on Change
  const handleChange = (e) => {
    const city = {
      ...City,
      country_code: "PK",
      [e.target.name]: e.target.value,
    };
    setCity(city);
  };

  // handle on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(City);
    // await saveCity(City);
    let resp = {};
    try {
      const city = {
        ...City,
        country_code: "PK",
      };
      resp = await saveCity(city);
      if (resp.status === 200) {
        alert_info("Done");
        // navigate("/cities/all");
      } else {
        alert_error("Error while saving");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };
  return (
    <div className="min-vh-100 d-flex flex-row">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-6 bg-light p-3">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Add City</h1>
              <p className="text-medium-emphasis text-center">
                Add your City details
              </p>
              <div className="mb-3">
                <label htmlFor="cityName" className="form-label">
                  City Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="cityName"
                  placeholder="Lahore"
                  required
                  name="city_name"
                  onChange={handleChange}
                  value={City.city_name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cityArea" className="form-label">
                  City Areas
                </label>
                <textarea
                  className="form-control"
                  id="cityArea"
                  rows="3"
                  placeholder="Lahore"
                  required
                  name="city_areas"
                  onChange={handleChange}
                  value={City.city_areas}
                ></textarea>

                {/* <input
                  className="form-control"
                  type="text"
                  id="cityArea"
                  placeholder="Lahore"
                  required
                  name="city_areas"
                  onChange={handleChange}
                  value={City.city_areas}
                /> */}
              </div>

              <button type="sumbmit" className="btn btn-info mb-3">
                Add City
              </button>

              {/* <Link to="/cities/all" className="btn btn-danger ms-2 mb-3">
                Cancel
              </Link> */}
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AllCities Cities={Cities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesMain;
