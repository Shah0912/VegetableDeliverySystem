import React, { useContext, useEffect } from "react";
import { CartContext } from "../listings/ProductContext";

const List = ({ id }) => {
  const { cartItems, deleteFromCart, getCart } = useContext(CartContext);
  useEffect(() => {
    getCart(id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = (cartItem) => {
    deleteFromCart(cartItem);
  };
  return (
    <div>
      {console.log(cartItems)}
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
