import React, { useContext,useState } from 'react'
import { Card, Container } from "react-bootstrap";
import './s.css'
import link from "react-router-dom"
import { GlobalContext } from '../context/GlobalContext';


function Login() {

  const[edetails,setedetails]=useState('');
  const[pdetails,setpdetails]=useState('');
 const {addDetails}=useContext(GlobalContext);
   //console.log(addDetails)
 
  // console.log(setldetails)
  
    const mStyle={
      background:"black",
      width:'500px',
       height:'500px',
       color:"white"
    }
       const onSubmit = e =>{
         e.preventDefault();
         const newDetails =
         {
           id:Math.floor(Math.random()*100000000),
           edetails,
           pdetails
         }
        
         addDetails(newDetails)
         console.log('email:',edetails)
         console.log( 'password:', pdetails)
       }
   
    return (
   
      <div >
          <div className="row-md-100 mt-5">
    <div className="col-md-1000">
      <div className="card card-body" style={mStyle}> 
        <h1 className="text-center mb-3">
          <i className="fas fa-sign-in-alt"></i>  Login</h1>
       
        <form  onSubmit={onSubmit} action="/NavBars"method="POST">
         
          <div className="form-group">
            <span className="badge badge-danger m-2">Email</span>
            <br/>
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
            <span className="badge badge-danger m-2" htmlFor="password">Password</span>
            <br/>
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
           link="true" to="/NavBars"
           type="submit"
           className="btn btn-danger
            btn-block"
            
            >Login</button>
        </form>
        <p  className="lead mt-4">
          No Account? <a href="/Register">Register</a>
         
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
