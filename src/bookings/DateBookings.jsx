import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { alert_error, __price } from "../services/helpers";
import PrintBooking from "./PrintBooking";
import Icons from "../components/Icons";

const DateBookings = ({ Route, Bookings, onUpdateStatus, onTicketUpdate }) => {
  const [ShowModal, setShowModal] = useState(false);
  const [TickGrid, setTickGrid] = useState([]);
  const [BookedSeats, setBookedSeats] = useState([]);
  const [SelectedBooking, setSelectedBooking] = useState(null);
  const [NewBooking, setNewBooking] = useState([]);
  const [CellClass, setCellClass] = useState("");

  useEffect(() => {
    var grid = [];
    for (var i = 1; i <= Route.total_seats; i++) {
      grid.push(i);
    }
    setTickGrid(grid);

    // merging all seats_info
    var booked_seats = [];
    Bookings.forEach(function (booking, i) {
      booked_seats[booking.booking_date] = [
        ...(booked_seats[booking.booking_date] || []),
        ...booking.seat_info,
      ];
    });
    // console.log(booked_seats);
    setBookedSeats(booked_seats);
  }, [Route, Bookings]);

  const handleClose = () => setShowModal(false);
  const handleShow = (booking) => {
    setNewBooking([]);
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const BookTicket = (seat_no) => {
    // check it is already book
    var new_booking = [...NewBooking];
    const index = new_booking.indexOf(seat_no);
    if (index !== -1) {
      new_booking = new_booking.filter((b) => b !== seat_no);
    } else {
      const { total_seats } = SelectedBooking;
      if (total_seats <= new_booking.length) {
        return alert_error(`Maximum ${total_seats} can be assigned.`);
      }
      new_booking = [...NewBooking, seat_no];
    }

    // console.log(new_booking);
    setNewBooking(new_booking);
  };

  const getCellClassName = (cell) => {
    var classname = "roaddy-booking-cell";
    classname += isBooked(cell) ? " green" : "";
    // if new booking
    classname += NewBooking.find((b) => b === cell) ? " new-booking" : "";
    return classname;
  };

  const isBooked = (cell) => {
    return (
      SelectedBooking &&
      BookedSeats[SelectedBooking.booking_date].find((info) => info === cell)
    );
  };

  const getPassengerName = () => {
    return SelectedBooking && SelectedBooking.passenger_name;
  };

  const handleTicketAssign = () => {
    handleClose();
    onTicketUpdate(SelectedBooking, NewBooking, "done");
  };

  const getOrderTotal = () => {
    const total_seats = NewBooking.length * Route.ticket_price;
    return __price(total_seats);
  };

  return (
    <div className="table-responsive">
      <table className="table table-light table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Phone</th>
            <th scope="col">Name</th>
            <th scope="col">Booking</th>
            <th scope="col">Seats</th>
            <th scope="col">Status</th>
            <th scope="col" colspan="2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* ======= listing TRoutes ======= */}
          {Bookings.map((booking, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{booking.passenger_phone}</td>
              <td>{booking.passenger_name}</td>
              <td>{booking.total_seats}</td>
              <td>{booking.seat_info && booking.seat_info.join(",")}</td>
              <td>{booking.booking_status}</td>
              <td>
                {booking.booking_status === "done" && (
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => onTicketUpdate(booking, [], "cancelled")}
                      className="btn btn-danger me-2"
                      title="Cancel"
                    >
                      {/* Cancel */}
                      <Icons icon="cancel" />
                    </button>
                    <PrintBooking Booking={booking} />
                  </div>
                )}
                {booking.booking_status !== "done" && (
                  <button
                    onClick={() => handleShow(booking)}
                    className="btn btn-sm btn-primary"
                  >
                    Ticket
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={ShowModal} onHide={handleClose} className="no-urdu-font">
        <Modal.Header closeButton>
          <Modal.Title>
            Total Amount: <span>{getOrderTotal()}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{getPassengerName()}</h4>
          <div className="booking-grid-wrapper">
            {TickGrid.map((cell) => (
              <div
                onClick={() => !isBooked(cell) && BookTicket(cell)}
                className={getCellClassName(cell)}
              >
                {cell}
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={() => handleTicketAssign()}>
            Assign Tickets
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DateBookings;
