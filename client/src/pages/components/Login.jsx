import React, { useContext, useState } from "react";
import { Card, Container } from "react-bootstrap";
/* import "./s.css"; */
import link from "react-router-dom";
import axios from "axios";
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

function Login() {
  const [edetails, setedetails] = useState("");
  const [pdetails, setpdetails] = useState("");
  const { addDetails } = useContext(UserContext);
  //console.log(addDetails)

  // console.log(setldetails)

  const mStyle = {
    // background: "black",
    background: "White",
    marginLeft: "800px",
    width: "500px",
    height: "500px",

    color: "Black",
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newDetails = {
      //id: Math.floor(Math.random() * 100000000),
      email: edetails,
      password: pdetails,
    };

    addDetails(newDetails);
    console.log("email:", edetails);
    console.log("password:", pdetails);
  };
  const imgStyle = {
    width: "400px",
    height: "600px",
    marginLeft: "200px",
    marginTop: "10px",
  };

  const textStyle = {
    marginTop: "20px",
  };

  return (
    <div>
      <h1 className="text-center mb-3" style={textStyle}>
        <i className="fas fa-sign-in-alt"></i> Welcome to Delivery App
      </h1>
      <img
        src="/webapp1.png"
        className="m-2"
        style={imgStyle}
        alt=""
        className="float-left"
      />
      <div className="row-md-100 mt-5">
        <div className="col-md-1000">
          <div className="card card-body" style={mStyle}>
            <form onSubmit={onSubmit} action="/NavBars" method="POST">
              <div className="form-group">
                <span className="badge badge-danger m-2">Email</span>
                <br />
                <input
                  type="email"
                  value={edetails}
                  onChange={(e) => setedetails(e.target.value)}
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-danger m-2" htmlFor="password">
                  Password
                </span>
                <br />
                <input
                  value={pdetails}
                  onChange={(e) => setpdetails(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <button
                link="true"
                to="/NavBars"
                type="submit"
                className="btn btn-danger
            btn-block"
              >
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No Account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    //  {ldetails.map(ldetail =>(
    //   <li>{ldetail.email}</li>
    //   ))}
  );
}
export default Login;
