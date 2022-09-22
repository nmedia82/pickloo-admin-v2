const AllStock = ({ Stock }) => {
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
          {/* ======= Listing Stock ======= */}
          {Stock.map((stk, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{stk.stock_title}</td>
              <td>{stk.stock_qty}</td>
              <td>{stk.stock_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStock;
