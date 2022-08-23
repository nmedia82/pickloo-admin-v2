import React from "react";
// importing Link
import { Link } from "react-router-dom";
// importing status API
import { setTransporterStatus } from "../services/modalService";

const AllTransporters = ({ Transporters }) => {
  // console.log(Transporters);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">All Transporters</h1>
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
                {/* ======= listing transporters ======= */}
                {Transporters.map((transporter, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{transporter.full_name}</td>
                    <td>{transporter.phone}</td>
                    <td>{transporter.email}</td>
                    <td>{transporter.address}</td>
                    <td>{transporter.city}</td>

                    <td>
                      {transporter.transporter_status === "active" ? (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => setTransporterStatus()}
                        >
                          {transporter.transporter_status}
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => setTransporterStatus()}
                        >
                          {transporter.transporter_status}
                        </button>
                      )}
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

export default AllTransporters;
