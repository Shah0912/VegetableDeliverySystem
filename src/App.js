import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./pages/components/NavBar";
import { DeliveryDash } from "./pages/deliverydash/DeliveryDash";
import { FarmerDash } from "./pages/farmerdash/FarmerDash";
import Listing from "./pages/listings/Listing";
function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/listing" component={Listing} />
        <Route exact path="/delivery" component={DeliveryDash} />
        <Route exact path="/farmer" component={FarmerDash} />
      </React.Fragment>
    </Router>
  );
}

export default App;
