import React from "react";
// importing Link
import { Link } from "react-router-dom";

const AllRoutes = ({ Routes }) => {
  console.log(Routes);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">All Routes</h1>
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
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing Routes ======= */}
                {/* {Routes.map((route, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{route.full_name}</td>
                    <td>{route.phone}</td>
                    <td>{route.email}</td>
                    <td>{route.address}</td>
                    <td>{route.city}</td>
                    <td>{route.transporter_status}</td>
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

export default AllRoutes;
