import React, { useReducer, useState, createContext } from "react";
import CultivationReducer from "./CultivationReducer";
import StorageReducer from "./StorageReducer";
import OrderReducer from "./OrderReducer";
import axios from "axios";

export const CultivationContext = createContext();
export const StorageContext = createContext();

export const CultivationProvider = (props) => {
  const crops = [];

  const [state, dispatch] = useReducer(CultivationReducer, crops);

  //Actions
  async function getCrops(id) {
    try {
      const res = await axios.get("/farmer?farmerid=" + id);
      dispatch({
        type: "GET_CROPS",
        payload: res.data.cultCrops,
      });
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      dispatch({
        type: "CROP_ERROR",
        payload: err.response.data,
      });
    }
  }

  async function addCrop(crop) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/farmer/growing", crop, config);
      dispatch({
        type: "ADD_CROP",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "CROP_ERROR",
        payload: err.response.data,
      });
    }
  }
  async function moveCrop(crop) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    /* const sub = {
      farmerid: "F104",
      cropid: crop.cropid,
    }; */
    try {
      const res = await axios.put("/farmer/cropstore", crop, config);
      console.log(res.data.rows[0]);
      dispatch({
        type: "MOVE_CROP",
        payload: res.data.rows[0],
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <CultivationContext.Provider
      value={{
        crops: state,
        addCrop,
        moveCrop,
        getCrops,
      }}
    >
      {props.children}
    </CultivationContext.Provider>
  );
};

export const StorageProvider = (props) => {
  const crops = [];

  const [state, dispatch] = useReducer(StorageReducer, crops);
  async function getCrops(id) {
    try {
      const res = await axios.get("/farmer?farmerid=" + id);
      dispatch({
        type: "GET_CROPS",
        payload: res.data.compCrops,
      });
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      dispatch({
        type: "CROP_ERROR",
        payload: err.response.data,
      });
    }
  }

  function addCrop(crop) {
    dispatch({
      type: "ADD_CROP",
      payload: crop,
    });
  }

  return (
    <StorageContext.Provider
      value={{
        crops: state,
        addCrop,
        getCrops,
      }}
    >
      {props.children}
    </StorageContext.Provider>
  );
};

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const orders = [];
  const [state, dispatch] = useReducer(OrderReducer, orders);
  //actions
  async function getOrders(id) {
    try {
      const res = await axios.get("/farmer/orders?farmerid=" + id);
      //console.log(res);
      dispatch({
        type: "GET_ORDERS",
        payload: res.data,
      });
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      console.log(err);
    }
  }
  async function orderComplete(order) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    /* const sub = {
      farmerid: "F104",
      cropid: crop.cropid,
    }; */
    try {
      const res = await axios.put("/farmer/ordercomplete", order, config);
      console.log(res);
      /* dispatch({
        type: "MOVE_CROP",
        payload: res.data.rows[0],
      }); */
    } catch (err) {
      console.log(err);
    }
  }
  /* const [orders, setOrders] = useState([
    {
      id: 1,
      content: [
        {
          name: "Potato",
          quantity: "10kg",
        },
        {
          name: "Tomato",
          quantity: "50kg",
        },
        {
          name: "Onion",
          quantity: "5kg",
        },
      ],
      del_name: "Arthur",
      total_cost: "500",
    },
    {
      id: 2,
      content: [
        {
          name: "Potato",
          quantity: "10kg",
        },
        {
          name: "Tomato",
          quantity: "50kg",
        },
        {
          name: "Onion",
          quantity: "5kg",
        },
      ],
      del_name: "Arthur",
      total_cost: "500",
    },
    {
      id: 3,
      content: [
        {
          name: "Potato",
          quantity: "10kg",
        },
        {
          name: "Tomato",
          quantity: "50kg",
        },
        {
          name: "Onion",
          quantity: "5kg",
        },
      ],
      del_name: "Arthur",
      total_cost: "500",
    },
    {
      id: 4,
      content: [
        {
          name: "Potato",
          quantity: "10kg",
        },
        {
          name: "Tomato",
          quantity: "50kg",
        },
        {
          name: "Onion",
          quantity: "5kg",
        },
      ],
      del_name: "Arthur",
      total_cost: "500",
    },
  ]); */

  return (
    <OrderContext.Provider value={{ orders: state, getOrders, orderComplete }}>
      {props.children}
    </OrderContext.Provider>
  );
};
