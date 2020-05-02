import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import axios from "axios";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  /* const products = [
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
  ]; */
  const products = [];
  const [state, dispatch] = useReducer(ProductReducer, products);

  //actions
  async function getProducts() {
    try {
      const res = await axios.get("/customer");
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.rows,
      });
      state.map((s) => (s["amount"] = 0));
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <ProductContext.Provider value={{ products: state, getProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const CartContext = createContext();

export const CartProvider = (props) => {
  /*const cartItems = [
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
  ];*/
  const cartItems = [];
  const [state, dispatch] = useReducer(CartReducer, cartItems);

  async function addToCart(product) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/customer/addtocart", product, config);

      dispatch({
        type: "ADD_TO_CART",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function getCart(id) {
    try {
      const res = await axios.get("/customer/checkout?customerid=" + id);
      console.log(res.data);
      dispatch({
        type: "GET_CART",
        payload: res.data,
      });
      //state.map((s) => (s["amount"] = 0));
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      console.log(err);
    }
  }
  async function addOrder(order) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/customer/placeorder", order, config);

      /* dispatch({
        type: "ADD_TO_CART",
        payload: res.data,
      }); */
    } catch (err) {
      console.log(err);
    }
  }
  function deleteFromCart(product) {
    product["customerid"] = "C101";
    dispatch({
      type: "DELETE_FROM_CART",
      payload: product,
    });
  }

  return (
    <CartContext.Provider
      value={{ cartItems: state, addToCart, deleteFromCart, getCart, addOrder }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
