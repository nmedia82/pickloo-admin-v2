import React, { useState, useEffect } from "react";

const AllCities = ({ Cities }) => {
  return (
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
              {/* ======= Listing Cities ======= */}
              {Cities.map((city, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{city.city_name}</td>
                  <td>{city.city_areas}</td>

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
                      // onClick={() => doDelete()}
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
  );
};

export default AllCities;
