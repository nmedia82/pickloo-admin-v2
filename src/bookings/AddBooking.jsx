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
    <div>
      <button onClick={handleShow} className="btn btn-success">
        Add New Booking
      </button>
      <Modal show={Show} onHide={handleClose} className="no-urdu-font">
        <Modal.Header closeButton>
          <Modal.Title>Add Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {JSON.stringify(Booking)}
          <p>
            <label className="form-label">
              Phone Number
              <input
                type="text"
                className="form-input"
                name="passenger_phone"
                value={Booking.passenger_phone}
                onChange={(e) => onChangeBooking(e)}
              />
            </label>
          </p>
          <p>
            <label className="form-label">
              Phone Name
              <input
                type="Phone Name"
                className="form-input"
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
                className="form-input"
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
                className="form-input"
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
