import React, { useState } from "react";
// importing All Stock
import AllStock from "./AllStock";
// react-bootstrap Modalbox components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// importing alerts
import { alert_error, alert_info } from "../../services/helpers";
// importing saveProduct API
import { saveCity } from "../../services/modalService";
import { get_member_phone } from "../../services/auth";

const AddStock = ({ onNewCity }) => {
  // States for react-bootstrap Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // State for City
  const [City, setCity] = useState({
    city_name: "",
    city_areas: [],
  });

  // handle on Change
  const handleChange = (e) => {
    const city = {
      ...City,
      country_code: "PK",
      [e.target.name]: e.target.value,
    };
    setCity(city);
  };

  // handle on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(City);
    let resp = {};
    try {
      const city = {
        ...City,
        country_code: "PK",
        transporter_phone: get_member_phone(),
      };
      // city.city_areas = city.city_areas.split(",");
      resp = await saveCity(city);
      if (resp.status === 200) {
        alert_info("City added..");
        onNewCity(city);
        // navigate("/cities");
      } else {
        alert_error("Error while saving");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };
  return (
    <>
      {/* Button trigger modal  */}
      <Button variant="primary" size="sm" onClick={handleShow}>
        Stock
      </Button>

      {/* Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Stock Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Detail</Form.Label>
              <Form.Control
                className=""
                type="text"
                id="cityName"
                placeholder="Dal"
                required
                name="city_name"
                onChange={handleChange}
                value={City.city_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                className=""
                type="number"
                id="cityName"
                placeholder="5"
                required
                name="city_name"
                onChange={handleChange}
                value={City.city_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                className=""
                type="date"
                id="cityName"
                placeholder=""
                required
                name="city_name"
                onChange={handleChange}
                value={City.city_name}
              />
            </Form.Group>
          </Form>
          {/* All Stock */}
          <AllStock />
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

export default AddStock;
