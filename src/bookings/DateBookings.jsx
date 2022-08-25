import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const DateBookings = ({ Route, Bookings, onUpdateStatus }) => {
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
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const BookTicket = (seat_no) => {
    const new_booking = [...NewBooking, seat_no];
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
            <th scope="col">Actions</th>
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
                <button
                  onClick={() => onUpdateStatus(booking)}
                  className={
                    booking.booking_status === "pending"
                      ? "btn btn-danger"
                      : "btn btn-info"
                  }
                >
                  {booking.booking_status}
                </button>
                <button
                  onClick={() => handleShow(booking)}
                  className="btn btn-primary"
                >
                  Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={ShowModal} onHide={handleClose} className="no-urdu-font">
        <Modal.Header closeButton>
          <Modal.Title>Photos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DateBookings;
