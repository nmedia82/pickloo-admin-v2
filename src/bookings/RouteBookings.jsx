import React, { useState, useEffect } from "react";
import { __price } from "../services/helpers";
import { alert_info, alert_error, __todate } from "../services/helpers";
import {
  getBookingsByDatePeriod,
  saveBooking,
  setBookingStatus,
} from "../services/modalService";
// importing Link
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import DateBookings from "./DateBookings";
import AddBooking from "./AddBooking";
import { get_transporter_phone } from "../services/auth";
import Joi from "joi";

const RouteBookings = ({ TRoutes }) => {
  // console.log(TRoutes);
  const [RawBookings, setRawBookings] = useState([]);
  const [AllBookings, setAllBookings] = useState([]);
  const [Route, setRoute] = useState({});
  const { route_id } = useParams();

  const validateBooking = Joi.object({
    passenger_phone: Joi.string().min(11).max(11).required(),
    passenger_name: Joi.string().min(4).required(),
    total_seats: Joi.required(),
    booking_date: Joi.date().required(),
  }).unknown(true);

  useEffect(() => {
    const loadBookings = async () => {
      var bookings = await getBookingsByDatePeriod(route_id);
      bookings = bookings.data.AllItems.Items;
      setRawBookings(bookings);
      bookings = process_booking(bookings);
      setAllBookings(bookings);
    };

    loadBookings();
    const loadRoute = async () => {
      const route = TRoutes.find((r) => r.route_id === route_id);
      setRoute(route);
    };
    loadRoute();
  }, [route_id, TRoutes]);

  // process bookings to render group wise
  const process_booking = (bookings) => {
    var bookings = bookings.map((b) => {
      b.booking_date = moment(b.booking_date).format("YYYY-MM-DD");
      b.seat_info = !b.seat_info ? [] : b.seat_info;
      return b;
    });
    // Sorting by date
    bookings.sort((a, b) => moment(a.booking_date) - moment(b.booking_date));
    // group by booking dates
    bookings = bookings.reduce(function (r, a) {
      r[a.booking_date] = r[a.booking_date] || [];
      r[a.booking_date].push(a);
      return r;
    }, Object.create(null));

    return bookings;
  };

  const handleBookingStatus = async (
    booking,
    seat_info,
    booking_status = null
  ) => {
    let resp;
    try {
      var status = booking_status;
      if (!status) {
        status = booking.booking_status === "pending" ? "done" : "pending";
      }
      resp = await setBookingStatus(
        route_id,
        booking.booking_id,
        status,
        seat_info
      );
      // console.log(setRawBookings);
      if (resp.status === 200 && resp.data.Message === "SUCCESS") {
        var bookings = [...RawBookings];
        const index = bookings.indexOf(booking);
        bookings[index].booking_status = status;
        bookings[index].seat_info = seat_info;
        console.log(bookings);
        bookings = process_booking(bookings);
        setAllBookings(bookings);
        alert_info("Status updated");
      } else {
        alert_error("Error while saving");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };

  const handleNewTicket = async (Booking) => {
    const booking = {
      ...Booking,
      route_id: route_id,
      route_name: Route.route_name,
      seat_info: [],
      booking_status: "pending",
      transporter_phone: get_transporter_phone(),
    };
    const { total_seats, booking_date } = booking;
    booking.total_seats = Number(total_seats);
    booking.booking_date =
      moment(booking_date).utc().local().format("YYYY-MM-DDTHH:mm:ss") + "Z";

    const { error, value } = validateBooking.validate(booking);
    if (error) {
      alert(error);
      return;
    }

    // console.log(booking);
    // return;

    try {
      const resp = await saveBooking(booking);
      console.log(resp);
      if (resp.status === 200) {
        var bookings = [...RawBookings, resp.data.Item];
        setRawBookings(bookings);
        bookings = process_booking(bookings);
        setAllBookings(bookings);
        alert_info("Status updated");
      } else {
        alert_error("Error while Booking");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };

  return (
    <div className="container-fluid non-printable">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">{Route.route_name}</h1>
          <AddBooking onNewTicket={handleNewTicket} />
          {Object.keys(AllBookings).map((bookings, index) => (
            <div key={index}>
              <h3>{__todate(bookings)}</h3>
              <DateBookings
                Bookings={AllBookings[bookings]}
                onTicketUpdate={handleBookingStatus}
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
