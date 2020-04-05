import React, { useState, createContext } from "react";

export const DeliveryContext = createContext();

export const DeliveryProvider = props => {
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      cust_number: 123456789,
      farmer_number: 234567891,
      content: ["potato", "onion", "tomato", "apple"],
      cust_name: "Ramesh Singh",
      cust_add: "fsdsf;fsl;ksfsf",
      pickup_add: "sdffsfdsfsflskfdslfk",
      isPickedup: false,
      isDelivered: false
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
      isDelivered: false
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
      isDelivered: false
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
      isDelivered: false
    }
  ]);

  return (
    <DeliveryContext.Provider value={[deliveries, setDeliveries]}>
      {props.children}
    </DeliveryContext.Provider>
  );
};
