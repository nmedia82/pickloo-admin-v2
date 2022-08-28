import React, { useState, useEffect } from "react";
import { __price } from "../services/helpers";
import { alert_info, alert_error } from "../services/helpers";
import { setRouteStatus } from "../services/modalService";
// importing Link
import { Link } from "react-router-dom";

const AllTRoutes = ({ TRoutes }) => {
  // console.log(TRoutes);
  const [AllRoutes, setAllRoutes] = useState([]);

  useEffect(() => {
    setAllRoutes([...TRoutes]);
  }, [TRoutes]);

  const updateStatus = async (route) => {
    let resp;
    try {
      var status = route.route_status === "active" ? "inactive" : "active";
      resp = await setRouteStatus(route.route_id, status);
      console.log(resp);
      if (resp.status === 200 && resp.data.Message === "SUCCESS") {
        const routes = [...AllRoutes];
        const index = routes.indexOf(route);
        routes[index].route_status = status;
        setAllRoutes(routes);
        alert_info("Status updated");
      } else {
        alert_error("Error while saving");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };

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
                {AllRoutes.map((route, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{route.route_name}</td>
                    <td>{route.vehicle_no}</td>
                    <td>{route.total_seats}</td>
                    <td>{__price(route.ticket_price)}</td>
                    <td>{route.time_departure}</td>
                    <td>
                      <button
                        onClick={() => updateStatus(route)}
                        className={
                          route.route_status === "inactive"
                            ? "btn btn-danger"
                            : "btn btn-info"
                        }
                      >
                        {route.route_status}
                      </button>
                      <Link
                        className="btn btn-success m-1"
                        to={`/route/${route.route_id}/bookings`}
                      >
                        Bookings
                      </Link>
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
