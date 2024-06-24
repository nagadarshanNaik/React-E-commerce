import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/Shopcontext";
import remove_icon from "../Assets/cart_cross_icon.png";

export default function CartItems() {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={item.image}
                  alt=""
                  className="cartItems-product-icon"
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="cartitem-quantity">
                  {cartItems[item.id]}
                </button>
                <p>{item.new_price * cartItems[item.id]}</p>
                <img
                  className="cartItems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(item.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}
