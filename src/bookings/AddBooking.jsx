import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddBooking = ({ onNewTicket }) => {
  const [Show, setShow] = useState(false);
  const [Booking, setBooking] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeBooking = (e) => {
    const booking = { ...Booking, [e.target.name]: e.target.value };
    setBooking(booking);
  };

  return (
    <div className="booking-add-form text-center m-3">
      <button onClick={handleShow} className="btn btn-success">
        Add New Booking
      </button>
      <Modal show={Show} onHide={handleClose} className="no-urdu-font">
        <Modal.Header closeButton>
          <Modal.Title>Add Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <label className="form-label">
              Phone Number
              <input
                type="text"
                className="form-control"
                name="passenger_phone"
                value={Booking.passenger_phone}
                onChange={(e) => onChangeBooking(e)}
              />
            </label>
          </p>
          <p>
            <label className="form-label">
              Customer Name
              <input
                type="Phone Name"
                className="form-control"
                name="passenger_name"
                value={Booking.passenger_name}
                onChange={(e) => onChangeBooking(e)}
              />
            </label>
          </p>
          <p>
            <label className="form-label">
              Total Seats
              <input
                type="number"
                className="form-control"
                name="total_seats"
                value={Booking.total_seats}
                onChange={(e) => onChangeBooking(e)}
              />
            </label>
          </p>
          <p>
            <label className="form-label">
              Date
              <input
                type="date"
                className="form-control"
                name="booking_date"
                value={Booking.booking_date}
                onChange={(e) => onChangeBooking(e)}
              />
            </label>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={() => onNewTicket(Booking)}>
            Add Booking
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBooking;
