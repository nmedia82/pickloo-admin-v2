import { useEffect, useState } from "react";
import { __price } from "./../../services/helpers";
import "./Cart.css";

function CartItems({ Cart, onItemRemove, onQtyUpdate }) {
  const [CartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(Cart);
  }, [Cart]);

  return (
    <>
      {CartItems.map((p) => (
        <div className="cart-item" key={p.barcode}>
          <div className="cart-item-name box">
            <span>{p.title.toUpperCase()}</span>
            <br />
            <em>{__price(p.price)}</em>
          </div>
          <div className="cart-item-qty box">
            <input
              type="number"
              name=""
              id=""
              maxLength={3}
              className="form-control"
              value={p.qty}
              onChange={(e) => onQtyUpdate(e.target.value, p)}
            />
          </div>
          <div className="cart-item-total box"> {__price(p.qty * p.price)}</div>
        </div>
      ))}
    </>
  );
}

export default CartItems;
