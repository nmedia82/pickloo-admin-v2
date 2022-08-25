import React, { useState, useEffect } from "react";
import { __price } from "../services/helpers";
import { alert_info, alert_error, __todate } from "../services/helpers";
import { getBookings, setBookingStatus } from "../services/modalService";
// importing Link
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import DateBookings from "./DateBookings";

const RouteBookings = ({ TRoutes }) => {
  // console.log(TRoutes);
  const [AllBookings, setAllBookings] = useState([]);
  const [Route, setRoute] = useState({});
  const { route_id } = useParams();

  useEffect(() => {
    const loadBookings = async () => {
      var bookings = await getBookings(route_id);
      bookings = bookings.data.AllItems.Items;
      bookings = bookings.map((b) => {
        b.booking_date = moment(b.booking_date).format("YYYY-MM-DD");
        b.seat_info = !b.seat_info ? [] : b.seat_info;
        return b;
      });
      // Sorting by date
      bookings.sort((a, b) => moment(a.booking_date) - moment(b.booking_date));
      console.log(bookings);
      // group by booking dates
      bookings = bookings.reduce(function (r, a) {
        r[a.booking_date] = r[a.booking_date] || [];
        r[a.booking_date].push(a);
        return r;
      }, Object.create(null));
      setAllBookings(bookings);
    };

    loadBookings();

    const loadRoute = async () => {
      const route = TRoutes.find((r) => r.route_id === route_id);
      setRoute(route);
    };
    loadRoute();
  }, [route_id, TRoutes]);

  const handleStatus = async (booking) => {
    let resp;
    try {
      var status = booking.booking_status === "pending" ? "done" : "pending";
      resp = await setBookingStatus(route_id, booking.booking_id, status);
      console.log(resp);
      if (resp.status === 200 && resp.data.Message === "SUCCESS") {
        const bookings = [...AllBookings];
        const index = bookings.indexOf(booking);
        bookings[index].booking_status = status;
        setAllBookings(bookings);
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

          {Object.keys(AllBookings).map((bookings, index) => (
            <div key={index}>
              <h3>{bookings}</h3>
              <DateBookings
                Bookings={AllBookings[bookings]}
                onUpdateStatus={handleStatus}
                Route={Route}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteBookings;
