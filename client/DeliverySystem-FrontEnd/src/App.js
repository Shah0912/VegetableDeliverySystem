import React from "react";
import Login from './pages/components/Login'
import Register from './pages/components/Register'
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import { NavBars } from "./pages/components/NavBars";
import { DeliveryDash } from "./pages/deliverydash/DeliveryDash";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Navbar } from "react-bootstrap";
import {GlobalProvider} from './pages/context/GlobalContext'



function App() {
  
  
  return (
      <GlobalProvider>
      

       
        <React.Fragment>
         
          <Router>
          <div>
            <Switch>
          <Route exact path ='/' component={Login}/>
          <Route exact path ='/Register' component={Register}/>
          <Route exact path='/NavBars'component={NavBars}/>
          

          </Switch>
           </div>
          </Router>
          
        
        </React.Fragment>
       
        </GlobalProvider>
  
    
  );
}

export default App;
