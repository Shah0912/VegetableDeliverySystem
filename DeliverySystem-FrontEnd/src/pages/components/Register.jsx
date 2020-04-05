import React, { Component,useState } from 'react'
import { Card, Container } from "react-bootstrap";
import './s.css'
class Register extends Component {
    
  render() {
    return (
         
      <div>
          {/* <div className="row mt-5">
    <div className="col-md-6 m-auto">*/}
      <div className="card card-body"> 
        <h1 className="text-center mb-3">
          <i className="fas fa-sign-in-alt"></i>  Register</h1>
       
        <form  action="/" method="POST">
          <div className="form-group">
            <span >Name</span>
            <br/>
            <input 
              type="Name"
              id="Name"
              name="Name"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
            
          <div className="form-group">
            <span >Email</span>
            <br/>
            <input 
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <span >Date of Birth</span>
            <br/>
            <input 
              type="email"
              id="DateofBirth"
              name="DateofBirth"
              className="form-control"
              placeholder="Enter Date of Birth"
            />
          </div>
            
          <div className="form-group">
            <span >Contact Details</span>
            <br/>
            <input 
              type="email"
              id="ContactDetails"
              name="ContactDetails"
              className="form-control"
              placeholder="Enter Contact Details"
            />
          </div>
             
          <div className="form-group">
            <span >Address</span>
            <br/>
            <input 
              type="email"
              id="Address"
              name="Address"
              className="form-control"
              placeholder="Enter Address"
            />
          </div>
            
          <div className="form-group">
            <span >Enter Password</span>
            <br/>
            <input 
              type="password"
              id="Password1"
              name="Password1"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
           
          <div className="form-group">
            <label for="password">Confirm Password</label>
            <br/>
            <input
              type="password"
              id="password2"
              name="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <label>
            <input
              type="radio"
              value="small"
             
            />
            Farmer
          </label>
          <br/>
          <label>
            <input
              type="radio"
              value="small"
             
            />

            Delivery Person
          </label>
          <br/>
          <label>
            <input
              type="radio"
              value="small"
              font="20px"
            />
            Customer
          </label>
      
      
      
          <button type="submit" className="btn btn-primary btn-block">Register</button>
          
         
        </form>
        <p className="lead mt-4">
         Already Registered?<a href="/users/Login">Login</a>
        </p>
       </div> 
  {/*  </div>
  // </div>*/}
    </div>
         
        
    )
  }
}
export default Register;
