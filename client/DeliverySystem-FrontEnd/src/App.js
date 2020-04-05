import React from "react";
import Login from './pages/components/Login'
import Register from './pages/components/Register'
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { DeliveryDash } from "./pages/deliverydash/DeliveryDash";
import {BrowserRouter as Route} from 'react-router-dom'
function App() {
  
  
  return (
    
            <React.Fragment>
           
             < Login/>
             <Register />
                  <NavBar />
                  <DeliveryDash />
        
        </React.Fragment>
  
    
  );
}

export default App;
