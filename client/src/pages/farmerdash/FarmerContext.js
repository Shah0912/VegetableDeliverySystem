import React, { useReducer, useState, createContext } from "react";
import CultivationReducer from "./CultivationReducer";
import StorageReducer from "./StorageReducer";

export const CultivationContext = createContext();
export const StorageContext = createContext();

export const CultivationProvider = (props) => {
  const crops = [
    {
      id: 1,
      name: "Potato",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare",
    },
    {
      id: 2,
      name: "Onion",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare",
    },
    {
      id: 3,
      name: "Apple",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare",
    },
    {
      id: 4,
      name: "Tomato",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare",
    },
  ];

  const [state, dispatch] = useReducer(CultivationReducer, crops);

  function addCrop(crop) {
    dispatch({
      type: "ADD_CROP",
      payload: crop,
    });
  }
  function moveCrop(crop) {
    dispatch({
      type: "MOVE_CROP",
      payload: crop,
    });
  }
  return (
    <CultivationContext.Provider
      value={{
        crops: state,
        addCrop,
        moveCrop,
      }}
    >
      {props.children}
    </CultivationContext.Provider>
  );
};

export const StorageProvider = (props) => {
  const crops = [];

  const [state, dispatch] = useReducer(StorageReducer, crops);

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
      }}
    >
      {props.children}
    </StorageContext.Provider>
  );
};

/* export const StorageProvider = (props) => {
  const storageCrops = [];
  const [state, dispatch] = useReducer(StorageReducer, storageCrops);
  function addStorage(crop) {
    dispatch({
      type: "ADD_CROP",
      payload: crop,
    });
  }

  return (
    <StorageContext.Provider
      value={{
        addStorage,
        crops: state,
      }}
    >
      {props.children}
    </StorageContext.Provider>
  );
};
 */
export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const [orders, setOrders] = useState([
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
  ]);

  return (
    <OrderContext.Provider value={[orders, setOrders]}>
      {props.children}
    </OrderContext.Provider>
  );
};
