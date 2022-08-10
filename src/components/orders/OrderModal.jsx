import React, { useState } from "react";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CLink,
//   CModal,
//   CModalBody,
//   CModalFooter,
//   CModalHeader,
//   CModalTitle,
//   CPopover,
//   CRow,
//   CTooltip,
// } from "@coreui/react";
// import { DocsCallout, DocsExample } from "src/components";
import { __price } from "../../services/helpers";

const OrderModal = ({ Orders, OrderID }) => {
  // myOrder
  const [myOrder, setmyOrder] = useState({});
  // Order
  const [Order, setOrder] = useState([]);

  // Get Order Detail
  const orderDetail = (OrderID) => {
    let myOrder = Orders.find((order) => order.order_id === OrderID);
    console.log(myOrder);
    setmyOrder(myOrder);
    let orderDetail = myOrder.order_items;
    console.log(orderDetail);
    setOrder(orderDetail);
  };

  const [visible, setVisible] = useState(false);

  return <></>;
};

export default OrderModal;
