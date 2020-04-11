import React, { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

// Initial state
const initialState = {
  details: [
    { id: 1, email: "asd2@gmail.com", password: "123456" },
    { id: 2, email: "asd3@gmail.com", password: "1323456" },
  ],
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
      vehiclenumber:'fjsdfjk',
      capacity:"13120",
      license:"vsufdb",
      vtype:"lambo" 
    },
  ],
};
const storagedetails = {
  sdetails:[
      {ID:4,
      Capacity:'satish',
      State:'satish@gmail.com',
      Street:'25',
      PinCode:'456789',
      Locality:'45689',
    
      }

  ]
}

const review = {
  redetails:[
      {
        ID:"123456",
        Type:'customer',
       Quality:'satish',
      Friendliness:'satish@gmail.com',
      Knowledge:'25',
      Comment:'456789',
      Efficiency:'45689',
    
      }

  ]
}


// Create context
export const UserContext = createContext(initialState);
export const GlobalContexts = createContext(registerdetails);
export const GlobalContextv =createContext(vehicledetails);
export const GlobalContextst = createContext(storagedetails);
export const GlobalContextre = createContext(review);
// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const [states, dispatchs] = useReducer(UserReducer, registerdetails);
  const [statev,dispatchv]=useReducer(UserReducer,vehicledetails) 
  const [stateSt,dispatches] = useReducer(UserReducer,storagedetails)
  const [stateRe,dispatchRe] = useReducer(UserReducer,review)
  // Actions
  function addDetails(details) {
    dispatch({
      type: "ADD_DETAILS",
      payload: details,
    });
  }

  function addRegister(rdetails) {
    dispatchs({
      type: "REGISTER_DETAILS",
      payload: rdetails,
    });
  }
  function addVdetails(vdetails) {
    dispatchv({
      type: "VEHICLE_DETAILS",
      payload: vdetails,
    });
  }

  function addStorage(sdetails){
    dispatches({
        type:'STORAGE_DETAILS',
        payload:sdetails
    })
  }
  function addReview(redetails){
    dispatchRe({
        type:'REVIEW',
        payload:redetails
    })
  }

  return (
    <UserContext.Provider
      value={{
        Vdetails:statev.vdetails,
        rdetails: states.rdetails,
        details: state.details,
        redetails:stateRe.redetails,
            sdetails:stateSt.sdetails,
        addDetails,
        addRegister,
        addVdetails,
         addStorage,
         addReview
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
