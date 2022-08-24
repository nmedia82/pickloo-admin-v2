import React from "react";
import { __price } from "../services/helpers";
// importing Link
import { Link } from "react-router-dom";

const AllTRoutes = ({ TRoutes }) => {
  // console.log(TRoutes);

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
                  <th scope="col">Route Name</th>
                  <th scope="col">Vehicle Number</th>
                  <th scope="col">Total Seats</th>
                  <th scope="col">Ticket Price</th>
                  <th scope="col">Departure Time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing TRoutes ======= */}
                {TRoutes.map((route, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{route.route_name}</td>
                    <td>{route.vehicle_no}</td>
                    <td>{route.total_seats}</td>
                    <td>{__price(route.ticket_price)}</td>
                    <td>{route.time_departure}</td>
                    {/* <td>{route.route_status}</td> */}
                    <td>
                      <button
                        className={
                          route.route_status === "active"
                            ? "btn btn-sm btn-success"
                            : "btn btn-sm btn-danger"
                        }
                        // onClick={() => setRouteStatus()}
                      >
                        {route.route_status}
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

export default AllTRoutes;
