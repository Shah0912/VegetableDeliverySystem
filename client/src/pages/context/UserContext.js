import React, { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";

// Initial state
const initialState = {
  details: [],
};
const registerdetails = {
  rdetails: [
    {
      id: 4,
      Name: "satish",
      Email: "satish@gmail.com",
      DoB: "25",
      Contact: "456789",
      Address: "45689",
      Pincode: "456789",
      Password: "132465",
      Cpassword: "123456",
    },
  ],
};

const vehicledetails = {
  vdetails: [
    {
      id: 4,
      vehiclenumber: "fjsdfjk",
      capacity: "13120",
      license: "vsufdb",
      vtype: "lambo",
    },
  ],
};
const storagedetails = {
  sdetails: [
    {
      ID: 4,
      Capacity: "satish",
      State: "satish@gmail.com",
      Street: "25",
      PinCode: "456789",
      Locality: "45689",
    },
  ],
};

const review = {
  redetails: [
    {
      ID: "123456",
      Type: "customer",
      Quality: "satish",
      Friendliness: "satish@gmail.com",
      Knowledge: "25",
      Comment: "456789",
      Efficiency: "45689",
    },
  ],
};

// Create context
export const UserContext = createContext(initialState);
export const GlobalContexts = createContext(registerdetails);
export const GlobalContextv = createContext(vehicledetails);
export const GlobalContextst = createContext(storagedetails);
export const GlobalContextre = createContext(review);
// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const [states, dispatchs] = useReducer(UserReducer, registerdetails);
  const [statev, dispatchv] = useReducer(UserReducer, vehicledetails);
  const [stateSt, dispatches] = useReducer(UserReducer, storagedetails);
  const [stateRe, dispatchRe] = useReducer(UserReducer, review);
  // Actions
  async function addDetails(details) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/auth", details, config);
      //console.log(res.data);
      details["value"] = res.data;
      dispatch({
        type: "ADD_DETAILS",
        payload: details,
      });
      //console.log(details);
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: "ADD_DETAILS",
      payload: details,
    });
  }

  async function addRegister(rdetails) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/reg", rdetails, config);
      dispatchs({
        type: "REGISTER_DETAILS",
        payload: rdetails,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function addVdetails(vdetails) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/delivery/vehicle", vdetails, config);
      dispatchv({
        type: "VEHICLE_DETAILS",
        payload: vdetails,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function addStorage(sdetails) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/farmer/storage", sdetails, config);
      dispatches({
        type: "STORAGE_DETAILS",
        payload: sdetails,
      });
    } catch (err) {
      console.log(err);
    }
  }
  function addReview(redetails) {
    dispatchRe({
      type: "REVIEW",
      payload: redetails,
    });
  }

  return (
    <UserContext.Provider
      value={{
        Vdetails: statev.vdetails,
        rdetails: states.rdetails,
        details: state,
        redetails: stateRe.redetails,
        sdetails: stateSt.sdetails,
        addDetails,
        addRegister,
        addVdetails,
        addStorage,
        addReview,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
