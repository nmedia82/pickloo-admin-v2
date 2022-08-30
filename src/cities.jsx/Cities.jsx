import React, { useState, useEffect } from "react";
// importing Link and useNavigate for navigation
import { Link, useNavigate } from "react-router-dom";
// importing alerts
import { alert_error, alert_info } from "../services/helpers";
// importing saveProduct API
import { saveCity, loadCities } from "../services/modalService";

const Cities = () => {
  // const navigate = useNavigate();

  // State for City
  const [City, setCity] = useState({
    city_name: "",
    city_areas: "",
  });

  // Getting Cities for AllCities
  useEffect(() => {
    const loadCities = async () => {
      let cities = await getCities();
      // products = products.data.AllItems.Items;
      // console.log(products)
      setCity(cities);
    };
    loadCities();
  });

  // Delete City from AllCities
  const doDelete = async (id) => {
    // ask first
    const a = window.confirm("Are you sure to delete?");
    if (!a) return;

    const resp = await deleteCity(id);
    if (resp.status !== 200) return alert_error("Error while deleting city");
    // removing city from list and udpate
    const city = City.filter((p) => p.id !== barcode);
    setCity(city);
  };

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
    // navigate("/cities/all");
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

              <Link to="/cities/all" className="btn btn-danger ms-2 mb-3">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
      {/* ============ Listing Cities ============ */}
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">All Products</h1>
          <div className="table-responsive">
            <table className="table table-light table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">City Name</th>
                  <th scope="col">City Areas</th>
                  <th scope="col" colSpan="2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing products ======= */}
                {City.map((cty, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{cty.city_name}</td>
                    <td>{cty.city_areas}</td>

                    {/* <td>
                      <Link
                        className="btn btn-sm btn-warning"
                        to={`/products/edit/${product.barcode}`}
                      >
                        Edit
                      </Link>
                    </td> */}
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => doDelete()}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
