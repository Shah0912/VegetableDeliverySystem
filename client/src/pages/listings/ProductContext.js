import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const products = [
    {
      id: 1,
      name: "Potato",
      price: 50,
      quantity: 0,
      image:
        "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg",
    },
    {
      id: 2,
      name: "Onion",
      price: 40,
      quantity: 0,
      image:
        "https://cdn.theatlantic.com/thumbor/TxEw_yjPER1uluJjP8qc0nNRHpw=/0x72:1000x635/720x405/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
    },
    {
      id: 3,
      name: "Potato",
      price: 50,
      quantity: 0,
      image:
        "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg",
    },
    {
      id: 4,
      name: "Onion",
      price: 40,
      quantity: 0,
      image:
        "https://cdn.theatlantic.com/thumbor/TxEw_yjPER1uluJjP8qc0nNRHpw=/0x72:1000x635/720x405/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
    },
    {
      id: 5,
      name: "Potato",
      price: 50,
      quantity: 0,
      image:
        "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg",
    },
    {
      id: 6,
      name: "Onion",
      price: 40,
      quantity: 0,
      image:
        "https://cdn.theatlantic.com/thumbor/TxEw_yjPER1uluJjP8qc0nNRHpw=/0x72:1000x635/720x405/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
    },
    {
      id: 7,
      name: "Potato",
      price: 50,
      quantity: 0,
      image:
        "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg",
    },
    {
      id: 8,
      name: "Onion",
      price: 40,
      quantity: 0,
      image:
        "https://cdn.theatlantic.com/thumbor/TxEw_yjPER1uluJjP8qc0nNRHpw=/0x72:1000x635/720x405/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
    },
    {
      id: 9,
      name: "Potato",
      price: 50,
      quantity: 0,
      image:
        "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg",
    },
    {
      id: 10,
      name: "Onion",
      price: 40,
      quantity: 0,
      image:
        "https://cdn.theatlantic.com/thumbor/TxEw_yjPER1uluJjP8qc0nNRHpw=/0x72:1000x635/720x405/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
    },
    {
      id: 9,
      name: "Potato",
      price: 50,
      quantity: 0,
      image:
        "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg",
    },
    {
      id: 10,
      name: "Onion",
      price: 40,
      quantity: 0,
      image:
        "https://cdn.theatlantic.com/thumbor/TxEw_yjPER1uluJjP8qc0nNRHpw=/0x72:1000x635/720x405/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
    },
  ];
  const [state, dispatch] = useReducer(ProductReducer, products);

  return (
    <ProductContext.Provider value={{ products: state }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const CartContext = createContext();

export const CartProvider = (props) => {
  const cartItems = [];
  const [state, dispatch] = useReducer(CartReducer, cartItems);

  function addToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    console.log(state);
  }

  return (
    <CartContext.Provider value={{ cartItems: state, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
