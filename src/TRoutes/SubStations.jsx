import { FaPlus, FaMinus } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";

function SubStationsComponent({
  SubStations,
  onSubStationChange,
  onMoreSubStation,
  onRemoveSubStation,
  Cities,
}) {
  return (
    <>
      <h5>Sub Stations</h5>
      <hr></hr>

      {SubStations.map((substation, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-5">
              <select
                className="form-select"
                name="station_name"
                id="substation"
                onChange={(e) => onSubStationChange(e, index)}
              >
                <option>Select From</option>
                {Cities.map((city, index) => (
                  <option key={index} value={city.city_name}>
                    {city.city_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <InputGroup className="mb-3">
                <InputGroup.Text>Rs.</InputGroup.Text>
                <Form.Control
                  aria-label="Amount"
                  name="station_ticket_price"
                  onChange={(e) => onSubStationChange(e, index)}
                  value={substation.station_ticket_price}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-success"
                onClick={() => onMoreSubStation(index)}
              >
                <FaPlus />
              </button>
              {SubStations.length > 1 && (
                <button
                  className="btn btn-danger"
                  onClick={() => onRemoveSubStation(index)}
                >
                  <FaMinus />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SubStationsComponent;
