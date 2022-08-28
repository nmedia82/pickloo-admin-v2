import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { getCurrentUser } from "../services/auth";
import { __todate } from "../services/helpers";

const PrintBooking = ({ Booking }) => {
  const [Show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { company_name, phone, address } = getCurrentUser();

  return (
    <div className="non-printable">
      <button className="btn btn-primary" onClick={handleShow}>
        Print
      </button>
      <Modal show={Show} onHide={handleClose}>
        <Modal.Body>
          <h3 className="booking-print-heading1 text-center">{company_name}</h3>
          <h5 className="booking-print-heading2 text-center">
            Contact: {phone}
          </h5>
          <p className="booking-print-heading2 text-center">{address}</p>
          <hr />
          <div className="booking-print-route text-center">
            {__todate(Booking.booking_date)} - {Booking.route_name}
          </div>
          <div className="booking-info table-responsive">
            <table className="text-center table-striped table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Booking.passenger_name}</td>
                  <td>{Booking.passenger_phone}</td>
                  <td>{Booking.seat_info.join(",")}</td>
                </tr>
              </tbody>
            </table>
            <div className="roaddy-print-footer text-center">
              Online booking ystem developed by N-Media - 0322 4028612
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={() => window.print()}>
            Print
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PrintBooking;
