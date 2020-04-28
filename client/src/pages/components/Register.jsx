import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
/* import './s.css' */

import { UserContext } from "../context/UserContext";

function stringToHash(string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  console.log(hash);
  return hash;
}

function Register() {
  const state = {
    variety: "Farmer",
  };

  const radioChangeHandler = (event) => {
    this.setState({
      variety: event.target.value,
    });
  };

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [DoB, setDoB] = useState("");
  const [Street, setStreet] = useState("");
  const [State, setState] = useState("");
  const [Locality, setLocality] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [type, setType] = useState("");

  const { addRegister } = useContext(UserContext);

  const mStyle = {
    background: "White",
    width: "800px",
    height: "1100px",
    color: "Black",
    margin: "auto",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newrDetails = {
      //id: Math.floor(Math.random() * 100000000),
      Name,
      Email,
      DoB,
      Street,
      State,
      Locality,
      Pincode,
      Password,
      Cpassword,
      type,
    };

    addRegister(newrDetails);
    console.log("Name:", Name);
    console.log("email:", Email);
    console.log("Date of Birth:", DoB);
    console.log("Street:", Street);
    console.log("State:", State);
    console.log("Locality:", Locality);
    console.log("Pincode", Pincode);
    console.log("password:", Password);
    console.log("Confirm Password", Cpassword);
    window.location.replace("/");
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
                <span className="badge badge-warning m-2">Street</span>
                <br />
                <input
                  value={Street}
                  onChange={(e) => setStreet(e.target.value)}
                  type="text"
                  id="Street"
                  name="Street"
                  className="form-control"
                  placeholder="Enter Street"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">State</span>
                <br />
                <input
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  id="State"
                  name="State"
                  className="form-control"
                  placeholder="Enter State"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">Locality</span>
                <br />
                <input
                  value={Locality}
                  onChange={(e) => setLocality(e.target.value)}
                  type="text"
                  id="Locality"
                  name="Locality"
                  className="form-control"
                  placeholder="Enter Locality"
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
                <span className="badge badge-warning m-2">Type</span>
                <br />
                <input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  id="Type"
                  name="Type"
                  className="form-control"
                  placeholder="F for Farmer; D for Delivery-Person; C for Customer"
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

              {/* <Form>
                <div key={`default-radio`} className="mb-3">
                  <Form.Check type="radio" id="1" label={`Farmer`} />
                  <Form.Check type="radio" id="2" label={`Customer`} />
                  <Form.Check type="radio" id="3" label={`Delivery Person`} />
                </div>
              </Form>
              <br />
              <label>
                <input
                  type="radio"
                  value="Delivery"
                  changed={radioChangeHandler}
                  isSelected={state.variety === "Delivery"}
                  id="2"
                />
                Delivery Person
              </label>
              <br />
              <span className="badge badge-primary ">
                <input
                  type="radio"
                  value="Customer"
                  changed={radioChangeHandler}
                  isSelected={state.variety === "Customer"}
                  id="3"
                />
                Customer
              </span> */}

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
