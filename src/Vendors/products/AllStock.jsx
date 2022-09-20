const AllStock = ({ Cities }) => {
  return (
    <div className="table-responsive">
      <h4>Stock Detail</h4>
      <table className="table table-light table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Detail</th>
            <th scope="col">Qty</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* ======= Listing Cities ======= */}
          {/* {Cities.map((city, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{city.city_name}</td>
              <td>{city.city_areas}</td>

              <td>Detail</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default AllStock;
