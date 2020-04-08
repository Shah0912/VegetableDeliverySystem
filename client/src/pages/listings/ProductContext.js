import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const products = [
    {
      id: 1,
      name: "Potato",
      price: 50,
      quantity: 0,
    },
    {
      id: 2,
      name: "Onion",
      price: 40,
      quantity: 0,
    },
    {
      id: 3,
      name: "Potato",
      price: 50,
      quantity: 0,
    },
    {
      id: 4,
      name: "Onion",
      price: 40,
      quantity: 0,
    },
    {
      id: 5,
      name: "Potato",
      price: 50,
      quantity: 0,
    },
    {
      id: 6,
      name: "Onion",
      price: 40,
      quantity: 0,
    },
    {
      id: 7,
      name: "Potato",
      price: 50,
      quantity: 0,
    },
    {
      id: 8,
      name: "Onion",
      price: 40,
      quantity: 0,
    },
    {
      id: 9,
      name: "Potato",
      price: 50,
      quantity: 0,
    },
    {
      id: 10,
      name: "Onion",
      price: 40,
      quantity: 0,
    },
  ];
  const [state, dispatch] = useReducer(ProductReducer, products);

  return (
    <ProductContext.Provider value={{ products: state }}>
      {props.children}
    </ProductContext.Provider>
  );
};
