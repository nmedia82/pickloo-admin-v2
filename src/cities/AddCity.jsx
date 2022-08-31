import React, { useState } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing alerts
import { alert_error, alert_info } from "../services/helpers";
// importing saveProduct API
import { saveCity } from "../services/modalService";

const AddCity = ({ onNewCity }) => {
  const navigate = useNavigate();

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
      city.city_areas = city.city_areas.split(",");
      resp = await saveCity(city);
      if (resp.status === 200) {
        alert_info("Done");
        onNewCity(city);
        navigate("/cities");
      } else {
        alert_error("Error while saving");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };
  return (
    <>
      {/* Button trigger modal  */}
      <button
        type="button"
        class="btn btn-lg btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add City
      </button>

      {/* Modal  */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add your City details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
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

                <button type="sumbmit" className="btn btn-success mb-3">
                  Save
                </button>

                {/* <Link to="/cities/all" className="btn btn-danger ms-2 mb-3">
                        Cancel
                    </Link> */}
              </form>
            </div>
          </div>
          {/* <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AddCity;
