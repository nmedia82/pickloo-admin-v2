import React from "react";
// importing Link
import { Link } from "react-router-dom";
// importing price function
import { alert_info, __price } from "../../services/helpers";
import CartItems from "./Cart";

const POS = ({ Products, Cart, onAddToCart, onItemRemove, onCartUpdate }) => {
  const onScanProduct = (e) => {
    const barcode = e.target.value;
    const found = Products.find((p) => p.barcode === barcode);
    if (found) {
      onAddToCart(found);
    }
  };

  const handleQtyUpdate = (qty, item) => {
    console.log(qty);
    const items = [...Cart];
    const index = items.indexOf(item);
    var q = Number(qty) || 1;
    items[index].qty = q;
    onCartUpdate(items);
  };
  return (
    <div className="container-fluid">
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
                <CartItems
                  Cart={Cart}
                  onItemRemove={onItemRemove}
                  onQtyUpdate={handleQtyUpdate}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
