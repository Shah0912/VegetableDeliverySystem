import React, { useContext } from "react";
import { CartContext } from "../listings/ProductContext";

const List = () => {
  const { cartItems, deleteFromCart } = useContext(CartContext);
  const onSubmit = (cartItem) => {
    deleteFromCart(cartItem);
  };
  return (
    <div>
      <h3>Products in Cart</h3>
      <ul id="list" className="list">
        {cartItems.map((cartItem) => (
          <li>
            <span>{cartItem.name}</span>
            <button
              className="delete-btn"
              style={{ backgroundColor: "#c0392b" }}
              onClick={(e) => onSubmit(cartItem)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
