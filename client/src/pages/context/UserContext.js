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

// Create context
export const UserContext = createContext(initialState);
export const GlobalContexts = createContext(registerdetails);
// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const [states, dispatchs] = useReducer(UserReducer, registerdetails);

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
  return (
    <UserContext.Provider
      value={{
        rdetails: states.rdetails,
        details: state.details,
        addDetails,
        addRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
