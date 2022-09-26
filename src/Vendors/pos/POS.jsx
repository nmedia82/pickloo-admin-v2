import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
// importing Link
import { Link } from "react-router-dom";
// importing price function
import {
  alert_info,
  __cart_total_amount,
  __price,
} from "../../services/helpers";
import CartItems from "./Cart";
import { get_company_name, get_store_code } from "../../services/auth";
import { createOrder } from "../../services/modalService";

const cart_total = __cart_total_amount();
const POS = ({
  Products,
  Cart,
  onAddToCart,
  onItemRemove,
  onCartUpdate,
  onOrderPlaced,
}) => {
  const [TotalAmout, setTotalAmout] = useState(0);
  const [ReceivedAmount, setReceivedAmount] = useState(0);
  const [OrderDiscount, setOrderDiscount] = useState(0);
  const [Balance, setBalance] = useState(0);

  useEffect(() => {
    setTotalAmout(cart_total);
    const receive_amount = ReceivedAmount || 0;
    const balance =
      parseFloat(receive_amount) -
      (parseFloat(cart_total) - parseFloat(OrderDiscount));
    setBalance(balance);
  }, [ReceivedAmount, OrderDiscount]);

  const onScanProduct = (e) => {
    const barcode = e.target.value;
    const found = Products.find((p) => p.barcode === barcode);
    if (found) {
      onAddToCart(found);
    }
  };

  const handleQtyUpdate = (qty, item) => {
    const items = [...Cart];
    const index = items.indexOf(item);
    var q = Number(qty) || 1;
    items[index].qty = q;
    onCartUpdate(items);
  };

  const handleBillPayment = async () => {
    var service_charges = 0;
    var grand_total =
      parseFloat(TotalAmout) + service_charges - parseFloat(OrderDiscount);

    const order_date = moment().utc().format("YYYY-MM-DDTHH:mm:ss") + "Z";
    const order = {
      order_id: uuidv4(),
      order_date: order_date,
      buyer_phone: "POS",
      total: parseFloat(TotalAmout),
      discount: parseFloat(OrderDiscount),
      service_charges: service_charges,
      grand_total: grand_total,
      address: "POS",
      order_items: Cart,
      checkout_type: "POS",
      status: "Placed",
      store_code: get_store_code(),
      store_title: get_company_name(),
    };

    try {
      var order_new = await createOrder(order);
      order_new = order_new.data.Item;
      // console.log(order_new);
      alert_info("Order Placed");
      onOrderPlaced(order_new);
    } catch (e) {
      alert_info("Error while order, check internet connect");
    }

    console.log(order);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h1 className="">Checkout/POS</h1>
        <div className="row">
          <div className="col-md-4 pos-1">
            <header className="text-center">
              <h4>Low Stock</h4>
            </header>
          </div>
          <div className="col-md-4 pos-2">
            <header className="text-center">
              <h4>Recent Sales</h4>
            </header>
          </div>
          <div className="col-md-4 pos-3">
            <header className="text-center">
              <h4>Sales</h4>
            </header>
            <section>
              <input
                type="text"
                name="barcode"
                id=""
                className="form-control"
                placeholder="Barcode"
                onChange={(e) => onScanProduct(e)}
              />
              <hr />
              <CartItems
                Cart={Cart}
                onItemRemove={onItemRemove}
                onQtyUpdate={handleQtyUpdate}
              />
            </section>
            <div id="cart-totals">
              <div className="cart-total-amount">
                Order Total {__price(TotalAmout)}
              </div>
              <div className="cart-total-received">
                <p>
                  <input
                    type="number"
                    onChange={(e) => setOrderDiscount(e.target.value)}
                    placeholder="Discount"
                  />
                </p>
                <p>
                  <input
                    type="number"
                    onChange={(e) => setReceivedAmount(e.target.value)}
                    placeholder="Received"
                  />
                </p>
              </div>
              <div className="cart-balance">{__price(Balance)}</div>
              <div class="d-grid gap-2">
                <button
                  onClick={() => handleBillPayment()}
                  className={
                    `btn btn-info btn-block m-2 ` + (Balance <= 0 && "disabled")
                  }
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
