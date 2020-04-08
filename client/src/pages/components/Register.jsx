import React, { useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";
/* import './s.css' */

import { GlobalContext } from "../context/GlobalContext";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [DoB, setDoB] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");

  const { addRegister } = useContext(GlobalContext);

  const mStyle = {
    background: "black",
    width: "800px",
    height: "1050px",
    color: "white",
    margin: "auto",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newrDetails = {
      id: Math.floor(Math.random() * 100000000),
      Name,
      Email,
      DoB,
      Contact,
      Address,
      Pincode,
      Password,
      Cpassword,
    };

    addRegister(newrDetails);
    console.log("Name:", Name);
    console.log("email:", Email);
    console.log("Date of Birth:", DoB);
    console.log("Contact Details:", Contact);
    console.log("Address:", Address);
    console.log("Pincode", Pincode);
    console.log("password:", Password);
    console.log("Confirm Password", Cpassword);
  };

  return (
    <div>
      <div className="row-md-100 mt-5">
        <div className="col-md-1000">
          <div className="card card-body" style={mStyle}>
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt "></i> Register
            </h1>

            <form onSubmit={onSubmit} method="POST">
              <div className="form-group">
                <span className="badge badge-warning m-2">Name</span>
                <br />
                <input
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  type="Name"
                  id="Name"
                  name="Name"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-warning m-2">Email</span>
                <br />
                <input
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-warning m-2">Date of Birth</span>
                <br />
                <input
                  value={DoB}
                  onChange={(e) => setDoB(e.target.value)}
                  type="text"
                  id="DateofBirth"
                  name="DateofBirth"
                  className="form-control"
                  placeholder="Enter Date of Birth"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-warning m-2">Contact Details</span>
                <br />
                <input
                  value={Contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="num"
                  id="ContactDetails"
                  name="ContactDetails"
                  className="form-control"
                  placeholder="Enter Contact Details"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-warning m-2">Address</span>
                <br />
                <input
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="Address"
                  name="Address"
                  className="form-control"
                  placeholder="Enter Address"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">Pin Code</span>
                <br />
                <input
                  value={Pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  type="num"
                  id="ContactDetails"
                  name="ContactDetails"
                  className="form-control"
                  placeholder="Enter Pin Code"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-warning m-2">Enter Password</span>
                <br />
                <input
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="Password1"
                  name="Password1"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>

              <div className="form-group">
                <label className="badge badge-warning m-2" htmlFor="password">
                  Confirm Password
                </label>
                <br />
                <input
                  value={Cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  type="password"
                  id="password2"
                  name="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>

              <label>
                <input type="radio" value="small" />
                Farmer
              </label>
              <br />
              <label>
                <input type="radio" value="small" />
                Delivery Person
              </label>
              <br />
              <span className="badge badge-primary ">
                <input type="radio" value="small" font="20px" />
                Customer
              </span>

              <button type="submit" className="btn btn-warning btn-block ">
                Register
              </button>

              <p className="lead mt-4">
                Already Registered?<a href="/">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/*  </div>
  // </div>*/}
    </div>
  );
}
export default Register;
