import React, { useState } from "react";
import { __price } from "../../services/helpers";

const OrderModal = ({ Orders, OrderID }) => {
  // console.log(Orders, OrderID);

  // State for myOrder
  const [myOrder, setmyOrder] = useState({});
  // State for Order
  const [Order, setOrder] = useState([]);

  // Get Order Detail
  const orderDetail = (OrderID) => {
    let myOrder = Orders.find((order) => order.order_id === OrderID);
    // console.log(myOrder);
    setmyOrder(myOrder);
    let orderDetail = myOrder.order_items;
    // console.log(orderDetail);
    setOrder(orderDetail);
  };

  return (
    <>
      {/* Button trigger modal  */}
      <button
        type="button"
        class="btn btn-sm btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          orderDetail(OrderID);
        }}
      >
        View
      </button>

      {/* Modal  */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Thanks for your Order
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <h6 className="text-center">Order Details</h6>
                <table className="table text-center table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Order.map((ord, ind) => (
                      <tr key={ind}>
                        <th scope="col">{ind + 1}</th>
                        {console.log(ord.title)}
                        <td>{ord.title}</td>
                        <td>{__price(ord.price)}</td>
                        <td>{ord.qty}</td>
                      </tr>
                    ))}
                    <tr>
                      <th colSpan="2">Total</th>
                      <td colSpan="2">{__price(myOrder.total)}</td>
                    </tr>
                    <tr>
                      <th colSpan="2">Delivery Charges</th>
                      <td colSpan="2">{__price(myOrder.service_charges)}</td>
                    </tr>
                    <tr>
                      <th colSpan="2">Discount</th>
                      <td colSpan="2">{__price(myOrder.discount)}</td>
                    </tr>
                    <tr>
                      <th colSpan="2">Grand Total</th>
                      <td colSpan="2">{__price(myOrder.grand_total)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" class="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
