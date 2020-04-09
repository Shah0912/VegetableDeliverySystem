import React, { useReducer, useState, createContext } from "react";
import PickupReducer from "./PickupReducer";
import DeliveryReducer from "./DeliveryReducer";

export const PickupContext = createContext();
export const DeliveryContext = createContext();

export const PickupProvider = (props) => {
  const pickups = [
    {
      id: 1,
      cust_number: 123456789,
      farmer_number: 234567891,
      content: ["potato", "onion", "tomato", "apple"],
      cust_name: "Ramesh Singh",
      cust_add: "fsdsf;fsl;ksfsf",
      pickup_add: "sdffsfdsfsflskfdslfk",
      isPickedup: false,
      isDelivered: false,
    },
    {
      id: 2,
      cust_number: 123456789,
      farmer_number: 234567891,
      content: ["potato", "onion", "tomato", "apple"],
      cust_name: "Ramesh Singh",
      cust_add: "fsdsf;fsl;ksfsf",
      pickup_add: "sdffsfdsfsflskfdslfk",
      isPickedup: false,
      isDelivered: false,
    },
    {
      id: 3,
      cust_number: 123456789,
      farmer_number: 234567891,
      content: ["potato", "onion", "tomato", "apple"],
      cust_name: "Ramesh Singh",
      cust_add: "fsdsf;fsl;ksfsf",
      pickup_add: "sdffsfdsfsflskfdslfk",
      isPickedup: false,
      isDelivered: false,
    },
    {
      id: 4,
      cust_number: 123456789,
      farmer_number: 234567891,
      content: ["potato", "onion", "tomato", "apple"],
      cust_name: "Ramesh Singh",
      cust_add: "fsdsf;fsl;ksfsf",
      pickup_add: "sdffsfdsfsflskfdslfk",
      isPickedup: false,
      isDelivered: false,
    },
  ];

  const [state, dispatch] = useReducer(PickupReducer, pickups);

  function addPickup(pickup) {
    dispatch({
      type: "ADD_PICKUP",
      payload: pickup,
    });
  }
  function isPickedup(pickup) {
    dispatch({
      type: "IS_PICKEDUP",
      payload: pickup,
    });
  }
  return (
    <PickupContext.Provider
      value={{
        pickups: state,
        addPickup,
        isPickedup,
      }}
    >
      {props.children}
    </PickupContext.Provider>
  );
};

export const DeliveryProvider = (props) => {
  const deliveries = [];

  const [state, dispatch] = useReducer(DeliveryReducer, deliveries);

  function addDelivery(delivery) {
    dispatch({
      type: "ADD_DELIVERY",
      payload: delivery,
    });
  }

  return (
    <DeliveryContext.Provider
      value={{
        deliveries: state,
        addDelivery,
      }}
    >
      {props.children}
    </DeliveryContext.Provider>
  );
};
