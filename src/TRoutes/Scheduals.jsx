import { FaPlus, FaMinus } from "react-icons/fa";
import { InputGroup, Form, Table } from "react-bootstrap";

function SchedualsComponent({
  Scheduals,
  onSchedualChange,
  onMoreSchedual,
  onRemoveSchedual,
  Vehicles,
}) {
  return (
    <>
      <hr />
      <h5>
        Scheduals{" "}
        <button
          className="btn btn-success me-1 mb-1 text-right"
          onClick={() => onMoreSchedual(0)}
        >
          <FaPlus />
        </button>
      </h5>
      <hr />

      {Scheduals.map((schedual, index) => {
        return (
          <div className="row sbox" key={index}>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Departure"
                    name="departure"
                    value={schedual.departure}
                    onChange={(e) => onSchedualChange(e, index)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Arrival"
                    name="arrival"
                    value={schedual.arrival}
                    onChange={(e) => onSchedualChange(e, index)}
                  />
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="vehicle"
                    id="RouteFrom"
                    onChange={(e) => onSchedualChange(e, index)}
                  >
                    <option>Select Vehicle</option>
                    {Vehicles.map((vehicle, index) => (
                      <option key={index} value={vehicle.vehicle_number}>
                        {vehicle.vehicle_number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Rs.</InputGroup.Text>
                    <Form.Control
                      aria-label="Amount"
                      name="ticket_price"
                      onChange={(e) => onSchedualChange(e, index)}
                      value={schedual.ticket_price}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup>
                </div>
              </div>
            </div>
            <div className="col-md-2 schedual-controls">
              <div className="row">
                <div className="col-md-12">
                  {Scheduals.length > 1 && (
                    <button
                      className="btn btn-danger"
                      onClick={() => onRemoveSchedual(index)}
                    >
                      <FaMinus />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SchedualsComponent;
