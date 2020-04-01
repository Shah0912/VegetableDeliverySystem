import React, { useState, createContext } from "react";

export const CultivationContext = createContext();

export const CultivationProvider = props => {
  const [crops, setCrops] = useState([
    {
      id: 1,
      name: "Potato",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare"
    },
    {
      id: 2,
      name: "Onion",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare"
    },
    {
      id: 3,
      name: "Apple",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare"
    },
    {
      id: 4,
      name: "Tomato",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      farm_age: "5 months",
      farm_size: "10 hectare"
    }
  ]);

  return (
    <CultivationContext.Provider value={[crops, setCrops]}>
      {props.children}
    </CultivationContext.Provider>
  );
};

export const StorageContext = createContext();

export const StorageProvider = props => {
  const [crops, setCrops] = useState([
    {
      id: 1,
      name: "Potato",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      stock: "12kg"
    },
    {
      id: 2,
      name: "Onion",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      stock: "12kg"
    },
    {
      id: 3,
      name: "Apple",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      stock: "12kg"
    },
    {
      id: 4,
      name: "Tomato",
      rate: 30,
      type: "Seasonal",
      season: "Summer",
      stock: "12kg"
    }
  ]);

  return (
    <StorageContext.Provider value={[crops, setCrops]}>
      {props.children}
    </StorageContext.Provider>
  );
};

export const OrderContext = createContext();

export const OrderProvider = props => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      content: [
        {
          name: "Potato",
          quantity: "10kg"
        },
        {
          name: "Tomato",
          quantity: "50kg"
        },
        {
          name: "Onion",
          quantity: "5kg"
        }
      ],
      del_name: "Arthur",
      total_cost: "500"
    },
    {
      id: 2,
      content: [
        {
          name: "Potato",
          quantity: "10kg"
        },
        {
          name: "Tomato",
          quantity: "50kg"
        },
        {
          name: "Onion",
          quantity: "5kg"
        }
      ],
      del_name: "Arthur",
      total_cost: "500"
    },
    {
      id: 3,
      content: [
        {
          name: "Potato",
          quantity: "10kg"
        },
        {
          name: "Tomato",
          quantity: "50kg"
        },
        {
          name: "Onion",
          quantity: "5kg"
        }
      ],
      del_name: "Arthur",
      total_cost: "500"
    },
    {
      id: 4,
      content: [
        {
          name: "Potato",
          quantity: "10kg"
        },
        {
          name: "Tomato",
          quantity: "50kg"
        },
        {
          name: "Onion",
          quantity: "5kg"
        }
      ],
      del_name: "Arthur",
      total_cost: "500"
    }
  ]);

  return (
    <OrderContext.Provider value={[orders, setOrders]}>
      {props.children}
    </OrderContext.Provider>
  );
};
