import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const PrintBooking = ({ Booking }) => {
  const [Show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="non-printable">
      <button className="btn btn-primary" onClick={handleShow}>
        Print
      </button>
      <Modal show={Show} onHide={handleClose}>
        <Modal.Body>
          <h3 className="booking-print-heading1 text-center">Bilal Travels</h3>
          <h5 className="booking-print-heading2 text-center">0322 5565655</h5>
          <hr />
          <div className="booking-print-route text-center">
            Aug 29, 2022 - Chenab Nagar to Lahore
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
                  <td>Najeeb</td>
                  <td>0233232332</td>
                  <td>5,2,9</td>
                </tr>
              </tbody>
            </table>
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
