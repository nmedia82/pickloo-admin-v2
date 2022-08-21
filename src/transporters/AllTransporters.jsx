import React from "react";
// importing Link
import { Link } from "react-router-dom";

const AllTranspoters = ({ Transpoters }) => {
  console.log(Transpoters);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">All Products</h1>
          <div className="table-responsive">
            <table className="table table-light table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing transpoters ======= */}
                {/* {Transpoters.map((transpoter, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{transpoter.full_name}</td>
                    <td>{transpoter.transporter_phone}</td>
                    <td>{transpoter.email}</td>
                    <td>{transpoter.address}</td>
                    <td>{transpoter.city}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTranspoters;
