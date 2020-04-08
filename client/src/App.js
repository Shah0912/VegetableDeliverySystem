import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import { DeliveryDash } from "./pages/deliverydash/DeliveryDash";
import { FarmerDash } from "./pages/farmerdash/FarmerDash";
import Listing from "./pages/listings/Listing";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/components/Login";
import Register from "./pages/components/Register";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/listing" component={Listing} />
        <Route exact path="/delivery" component={DeliveryDash} />
        <Route exact path="/farmer" component={FarmerDash} />
        <Route exact path="/checkout" component={Checkout} />
      </React.Fragment>
    </Router>
  );
}

export default App;
