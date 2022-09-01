const AllVehicles = ({ Vehicles, onDeleteVehicle }) => {
  return (
    <div className="table-responsive">
      <table className="table table-light table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Vehicle Number</th>
            <th scope="col">Total Seats</th>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* ======= Listing Vehicles ======= */}
          {Vehicles.map((vehicle, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{vehicle.vehicle_number}</td>
              <td>{vehicle.total_seats}</td>
              <td>{vehicle.vehicle_type}</td>

              {/* <td>
                        <Link
                          className="btn btn-sm btn-warning"
                          to={`/products/edit/${product.barcode}`}
                        >
                          Edit
                        </Link>
                      </td> */}
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDeleteVehicle(vehicle.vehicle_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllVehicles;
