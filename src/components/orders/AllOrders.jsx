import React from "react";
import OrderModal from "./OrderModal";
import { __price } from "../../services/helpers";

const AllOrders = ({ Orders }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">All Orders</h1>
          <table className="table table-light table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Total</th>
                <th scope="col">Service Charges</th>
                <th scope="col">Discount</th>
                <th scope="col">Grand Total</th>
                <th scope="col">Status</th>
                <th scope="col">Order Detail</th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((order, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{__price(order.total)}</td>
                  <td>{order.service_charges}</td>
                  <td>{order.discount}</td>
                  <td>{__price(order.grand_total)}</td>
                  <td>
                    {order.status === "Paid" ? (
                      <span className="badge rounded-pill bg-success">
                        {order.status}
                      </span>
                    ) : order.status === "Cancelled" ? (
                      <span className="badge rounded-pill bg-danger">
                        {order.status}
                      </span>
                    ) : (
                      <span className="badge rounded-pill bg-primary">
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td>
                    <OrderModal Orders={Orders} OrderID={order.order_id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
