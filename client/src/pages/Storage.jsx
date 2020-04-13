import React, { useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import './s.css'

import { UserContext } from './context/UserContext';

function Storage() {
  const [ID, setID] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [State, setState] = useState("");
  const [Street, setStreet] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [Locality, setLocality] = useState("");

  const {addStorage}=useContext(UserContext);
 
  const mStyle = {
    background: "Black",
    width: "800px",
    margin: "auto",
    color: "White",
    marginBottom: "20px",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newsDetails = {
      id: Math.floor(Math.random() * 100000000),
      ID,
      Capacity,
      State,
      Street,
      PinCode,
      Locality,
    };

    addStorage(newsDetails);
    console.log("ID:", ID);
    console.log("Capacity:", Capacity);
    console.log("State:", State);
    console.log("Street:", Street);
    console.log("PinCode:", PinCode);
    console.log("Locality:", Locality);
  };

  return (
    <div>
      <div className="row-md-100 mt-5">
        <div className="col-md-1000">
          <div className="card card-body" style={mStyle}>
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt "></i> Storage Details
            </h1>

            <form onSubmit={onSubmit} method="POST">
              <div className="form-group">
                <span className="badge badge-dark m-2">Storage ID</span>
                <br />
                <input
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                  type="Name"
                  id="ID"
                  name="ID"
                  className="form-control"
                  placeholder="Enter Storage ID "
                />
              </div>

              <div className="form-group">
                <span className="badge badge-dark m-2">Capacity</span>
                <br />
                <input
                  value={Capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  type="name"
                  id="capacity"
                  name="Capacity"
                  className="form-control"
                  placeholder="Enter Storage Capacity"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-dark m-2">State</span>
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
                <span className="badge badge-dark m-2">Street</span>
                <br />
                <input
                  value={Street}
                  onChange={(e) => setStreet(e.target.value)}
                  type="num"
                  id="Street"
                  name="Street"
                  className="form-control"
                  placeholder="Enter Street"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-dark m-2">Pin Code</span>
                <br />
                <input
                  value={PinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  type="number"
                  id="PinCode"
                  name="PinCode"
                  className="form-control"
                  placeholder="Enter PinCode"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-dark m-2">Locality</span>
                <br />
                <input
                  value={Locality}
                  onChange={(e) => setLocality(e.target.value)}
                  type="num"
                  id="Locality"
                  name="Locality"
                  className="form-control"
                  placeholder="Enter Locality"
                />
              </div>

              <button
                style={{ width: "50%", margin: "auto" }}
                type="submit"
                className="btn btn-primary btn-block "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*  </div>
  // </div>*/}
    </div>
  );
}
export default Storage;
