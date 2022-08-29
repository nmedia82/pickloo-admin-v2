import React from "react";

const RouteReport = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">Rout Report</h1>
          <div className="table-responsive">
            <table className="table table-light table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total Tickets</th>
                  <th scope="col">Done</th>
                  <th scope="col">Pending</th>
                  <th scope="col">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing Report ======= */}
                {/* {AllRoutes.map((route, index) => (
                  <tr key={index}>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{route.route_name}</td>
                    <td>{route.vehicle_no}</td>
                    <td>{route.total_seats}</td>
                    <td>{__price(route.ticket_price)}</td>
                    <td>{route.time_departure}</td>
                  </tr>
                  
                ))} */}
                <tr>
                  <th scope="row">1</th>
                  <td>28.08.2022</td>
                  <td>150</td>
                  <td>130</td>
                  <td>20</td>
                  <td>50000</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>29.08.2022</td>
                  <td>150</td>
                  <td>130</td>
                  <td>20</td>
                  <td>60000</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>30.08.2022</td>
                  <td>150</td>
                  <td>130</td>
                  <td>20</td>
                  <td>70000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteReport;
