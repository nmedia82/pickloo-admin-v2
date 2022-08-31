import { FaPlus, FaMinus } from "react-icons/fa";

function SchedualsComponent({
  Scheduals,
  onSchedualChange,
  onMoreSchedual,
  onRemoveSchedual,
}) {
  return (
    <>
      <h5>Scheduals</h5>
      <hr></hr>

      {Scheduals.map((schedual, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-3">
              <input
                type="time"
                className="form-control"
                placeholder="Departure"
                name="departure"
                value={schedual.departure}
                onChange={(e) => onSchedualChange(e, index)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="time"
                className="form-control"
                placeholder="Arrival"
                name="arrival"
                value={schedual.arrival}
                onChange={(e) => onSchedualChange(e, index)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Vehicle"
                name="vehicle"
                value={schedual.vehicle}
                onChange={(e) => onSchedualChange(e, index)}
              />
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-success"
                onClick={() => onMoreSchedual(index)}
              >
                <FaPlus />
              </button>
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
        );
      })}
    </>
  );
}

export default SchedualsComponent;
