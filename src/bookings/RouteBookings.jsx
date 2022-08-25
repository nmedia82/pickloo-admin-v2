import React, { useState, useEffect } from "react";
import { __price } from "../services/helpers";
import { alert_info, alert_error, __todate } from "../services/helpers";
import { getBookings, setBookingStatus } from "../services/modalService";
// importing Link
import { Link, useParams } from "react-router-dom";

const RouteBookings = ({ TRoutes }) => {
  // console.log(TRoutes);
  const [AllBookings, setAllBookings] = useState([]);
  const [Route, setRoute] = useState({});
  const { route_id } = useParams();

  useEffect(() => {
    const loadBookings = async () => {
      var bookings = await getBookings(route_id);
      bookings = bookings.data.AllItems.Items;
      console.log(bookings);
      setAllBookings(bookings);
    };
    loadBookings();

    const loadRoute = async () => {
      const route = TRoutes.find((r) => r.route_id === route_id);
      setRoute(route);
    };
    loadRoute();
  }, [route_id, TRoutes]);

  const updateStatus = async (route) => {
    let resp;
    try {
      var status = route.route_status === "pending" ? "done" : "pending";
      resp = await setBookingStatus(route.route_id, status);
      console.log(resp);
      if (resp.status === 200 && resp.data.Message === "SUCCESS") {
        const routes = [...AllBookings];
        const index = routes.indexOf(route);
        routes[index].route_status = status;
        setAllBookings(routes);
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
          <h1 className="text-center my-3">{Route.route_name}</h1>
          <div className="table-responsive">
            <table className="table table-light table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Name</th>
                  <th scope="col">Total Seats</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing TRoutes ======= */}
                {AllBookings.map((booking, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{__todate(booking.booking_date)}</td>
                    <td>{booking.passenger_phone}</td>
                    <td>{booking.passenger_name}</td>
                    <td>{booking.total_seats}</td>
                    <td>{booking.booking_status}</td>
                    <td>
                      <button
                        onClick={() => updateStatus(booking)}
                        className={
                          booking.booking_status === "pending"
                            ? "btn btn-danger"
                            : "btn btn-info"
                        }
                      >
                        {booking.booking_status}
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

export default RouteBookings;
