import React, { useState } from "react";
// importing All Stock
import AllStock from "./AllStock";
// react-bootstrap Modalbox components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// importing alerts
import { alert_error, alert_info } from "../../services/helpers";
// importing saveStock API
import { saveStock } from "../../services/modalService";
import { get_member_phone } from "../../services/auth";

const AddStock = ({ Stock, onNewStock }) => {
  // States for react-bootstrap Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // State for New Stock
  const [NewStock, setNewStock] = useState({
    stock_title: "",
    stock_qty: 0,
    stock_date: "{{today}}",
  });

  // handle on Change
  const handleChange = (e) => {
    const stock = {
      ...NewStock,
      store_code: "JT",
      [e.target.name]: e.target.value,
    };
    setNewStock(stock);
  };

  // handle on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(NewStock);
    let resp = {};
    try {
      const stock = {
        ...NewStock,
        store_code: "JT",
        // transporter_phone: get_member_phone(),
      };
      resp = await saveStock(stock);
      if (resp.status === 200) {
        alert_info("Stock added..");
        // onNewStock(stock);
        // navigate("/products/all");
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
                id=""
                placeholder="Dal"
                required
                name="stock_title"
                onChange={handleChange}
                value={NewStock.stock_title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                className=""
                type="number"
                id=""
                placeholder="5"
                required
                name="stock_qty"
                onChange={handleChange}
                value={NewStock.stock_qty}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                className=""
                type="date"
                id=""
                placeholder=""
                required
                name="stock_date"
                onChange={handleChange}
                value={NewStock.stock_date}
              />
            </Form.Group>
          </Form>
          {/* All Stock */}
          <AllStock Stock={Stock} />
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
