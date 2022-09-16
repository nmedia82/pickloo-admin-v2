import React, { useEffect, useState } from "react";
// importing Link
import { Link } from "react-router-dom";
// importing price function
import {
  alert_info,
  __cart_total_amount,
  __price,
} from "../../services/helpers";
import CartItems from "./Cart";

const cart_total = __cart_total_amount();
const POS = ({ Products, Cart, onAddToCart, onItemRemove, onCartUpdate }) => {
  const [TotalAmout, setTotalAmout] = useState(0);
  const [ReceivedAmount, setReceivedAmount] = useState(0);
  const [Balance, setBalance] = useState(0);

  useEffect(() => {
    setTotalAmout(cart_total);
    const balance = parseFloat(ReceivedAmount) - parseFloat(cart_total);
    setBalance(balance);
  }, [cart_total, ReceivedAmount]);

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
                <input
                  type="number"
                  onChange={(e) => setReceivedAmount(e.target.value)}
                />
              </div>
              <div className="cart-balance">{__price(Balance)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
