import React, { useState } from "react";
// react-bootstrap Modalbox components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// importing alerts
import { alert_error, alert_info } from "../services/helpers";
// importing saveProduct API
import { saveVehicle } from "../services/modalService";

const AddVehicle = ({ onNewVehicle }) => {
  // States for react-bootstrap Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // State for Vehicle
  const [Vehicle, setVehicle] = useState({
    transporter_phone: "",
    vehicle_number: "",
    total_seats: "",
    vehicle_type: "",
  });

  // handle on Change
  const handleChange = (e) => {
    const vehicle = {
      ...Vehicle,
      [e.target.name]: e.target.value,
    };
    setVehicle(vehicle);
  };

  // handle on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Vehicle);
    {
      let resp = {};
      try {
        const vehicle = {
          ...Vehicle,
        };
        resp = await saveVehicle(vehicle);
        if (resp.status === 200) {
          alert_info("Done");
          onNewVehicle(vehicle);
        } else {
          alert_error("Error while saving");
        }
      } catch (e) {
        alert_error(e.message);
      }
    }
  };
  return (
    <>
      {/* Button trigger modal  */}

      <Button variant="primary" onClick={handleShow}>
        Add Vehicle
      </Button>

      {/* Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Vehicle Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Transporter Phone</Form.Label>
              <Form.Control
                className="form-ontrol"
                type="tel"
                id="transporterPhone"
                placeholder="03221234657"
                required
                name="transporter_phone"
                onChange={handleChange}
                value={Vehicle.transporter_phone}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control
                className=""
                id="vehicleNumber"
                type="text"
                placeholder="ABC123"
                required
                name="vehicle_number"
                onChange={handleChange}
                value={Vehicle.vehicle_number}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Total Seats</Form.Label>
              <Form.Control
                className="form-control"
                type="number"
                id="total Seats"
                placeholder="72"
                required
                name="total_seats"
                onChange={handleChange}
                value={Vehicle.total_seats}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle type</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                id="vehicleType"
                placeholder="Bus"
                required
                name="vehicle_type"
                onChange={handleChange}
                value={Vehicle.vehicle_type}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="success"
            onClick={(e) => {
              handleSubmit(e);
              handleClose();
            }}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddVehicle;
