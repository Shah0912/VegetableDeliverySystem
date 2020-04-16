import React, { useContext, useState } from "react";
import DeliveryNav from "../navbars/DeliveryNav";
import { Card, Container } from "react-bootstrap";
/* import "./s.css"; */
import link from "react-router-dom";
import { UserContext } from "../context/UserContext";

function VehicleDetails() {
  const [vno, setvno] = useState("");
  const [cap, setcap] = useState("");
  const [lis, setlis] = useState("");
  const [vtype, setvtype] = useState("");
  const { addVdetails } = useContext(UserContext);
  //console.log(addDetails)

  // console.log(setldetails)

  const mStyle = {
    background: "black",
    width: "500px",
    height: "500px",
    color: "white",
    margin: "auto",
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newvDetails = {
      id: Math.floor(Math.random() * 100000000),
      vno,
      cap,
      lis,
      vtype,
    };

    addVdetails(newvDetails);
    console.log("Vehicle Number:", vno);
    console.log("Vehicle Capacity:", cap);
    console.log("License:", lis);
    console.log("Vehicle Type:", vtype);
  };

  return (
    <div>
      <DeliveryNav />
      <div className="row-md-100 mt-5">
        <div className="col-md-1000">
          <div className="card card-body" style={mStyle}>
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Vehicle Details
            </h1>

            <form onSubmit={onSubmit} action="/NavBars" method="POST">
              <div className="form-group">
                <span className="badge badge-danger m-2">Vehicle Number</span>
                <br />
                <input
                  type="number"
                  value={vno}
                  onChange={(e) => setvno(e.target.value)}
                  id="VehicleNumber"
                  name="VehicleNumber"
                  className="form-control"
                  placeholder="Enter VehicleNumber"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-danger m-2" htmlFor="text">
                  Capacity
                </span>
                <br />
                <input
                  value={cap}
                  onChange={(e) => setcap(e.target.value)}
                  type="Capacity"
                  id="Capacity"
                  name="Capacity"
                  className="form-control"
                  placeholder="Enter Capacity"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-danger m-2" htmlFor="text">
                  License Details
                </span>
                <br />
                <input
                  value={lis}
                  onChange={(e) => setlis(e.target.value)}
                  type="License"
                  id="License"
                  name="License"
                  className="form-control"
                  placeholder="Enter License"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-danger m-2" htmlFor="text">
                  Type
                </span>
                <br />
                <input
                  value={vtype}
                  onChange={(e) => setvtype(e.target.value)}
                  type="Type"
                  id="Type"
                  name="Type"
                  className="form-control"
                  placeholder="Enter Type"
                />
              </div>

              <button
                link="true"
                to="/NavBars"
                type="submit"
                className="btn btn-danger
            btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    //  {ldetails.map(ldetail =>(
    //   <li>{ldetail.email}</li>
    //   ))}
  );
}
export default VehicleDetails;
