import React, { useReducer, useState, createContext } from "react";
import PickupReducer from "./PickupReducer";
import DeliveryReducer from "./DeliveryReducer";
import VehicleReducer from "./VehicleReducer";
import axios from "axios";

export const PickupContext = createContext();
export const DeliveryContext = createContext();
export const VehicleContext = createContext();

export const VehicleProvider = (props) => {
  const vehicle = {};
  const [state, dispatch] = useReducer(VehicleReducer, vehicle);

  //actions
  async function getDetails(id) {
    try {
      const res = await axios.get("/delivery/vehicledetails?deliveryid=" + id);
      //console.log(res.data);
      dispatch({
        type: "GET_DETAILS",
        payload: res.data,
      });
      //state.map((s) => (s["amount"] = 0));
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <VehicleContext.Provider
      value={{
        vehicle: state,
        getDetails,
      }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
};

export const PickupProvider = (props) => {
  /*const pickups = [
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
  ];*/
  const pickups = [];
  var location = "";
  const [state, dispatch] = useReducer(PickupReducer, pickups);
  async function getPickup(id) {
    try {
      const res = await axios.get("/delivery/pickup?deliveryid=" + id);
      //console.log(res);
      dispatch({
        type: "GET_PICKUP",
        payload: res.data[0],
      });
      //console.log(state);
      //state.map((s) => (s["amount"] = 0));
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      console.log(err);
    }
  }
  function addPickup(pickup) {
    dispatch({
      type: "ADD_PICKUP",
      payload: pickup,
    });
  }
  function map(l) {
    location = l;
    console.log(location);
  }
  function getmap() {
    location = location;
  }
  async function isPickedup(pickup) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put("/delivery/pickupdone", pickup, config);
      //console.log(res);
      dispatch({
        type: "IS_PICKEDUP",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  /* function isPickedup(pickup) {
    dispatch({
      type: "IS_PICKEDUP",
      payload: pickup,
    });
  } */
  return (
    <PickupContext.Provider
      value={{
        pickups: state,
        addPickup,
        isPickedup,
        getPickup,
        location,
        map,
        getmap,
      }}
    >
      {props.children}
    </PickupContext.Provider>
  );
};

export const DeliveryProvider = (props) => {
  const deliveries = [];

  const [state, dispatch] = useReducer(DeliveryReducer, deliveries);

  async function getDeliveries(id) {
    try {
      const res = await axios.get("/delivery/deliverydetails?deliveryid=" + id);
      //console.log(res);
      dispatch({
        type: "GET_DELIVERIES",
        payload: res.data,
      });
      console.log(state);
      //state.map((s) => (s["amount"] = 0));
      //crops = res.data.cultCrops;
      //console.log(crops[0]);
    } catch (err) {
      console.log(err);
    }
  }
  function addDelivery(delivery) {
    dispatch({
      type: "ADD_DELIVERY",
      payload: delivery,
    });
  }
  async function isDelivered(delivery) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        "/delivery/deliverycomplete",
        delivery,
        config
      );
      //console.log(res);
      dispatch({
        type: "IS_DELIVERED",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <DeliveryContext.Provider
      value={{
        deliveries: state,
        addDelivery,
        getDeliveries,
        isDelivered,
      }}
    >
      {props.children}
    </DeliveryContext.Provider>
  );
};
