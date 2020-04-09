import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./pages/navbars/NavBar";
import { DeliveryDash } from "./pages/deliverydash/DeliveryDash";
import { FarmerDash } from "./pages/farmerdash/FarmerDash";
import Listing from "./pages/listings/Listing";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/components/Login";
import Register from "./pages/components/Register";
import { ProductProvider, CartProvider } from "./pages/listings/ProductContext";
import { UserProvider } from "./pages/context/UserContext";
import Feedback from "./pages/Feedback";
import Storage from "./pages/Storage";

function App() {
  return (
    <Router>
      <React.Fragment>
        <UserProvider>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </UserProvider>
        <CartProvider>
          <ProductProvider>
            <Route exact path="/listing" component={Listing} />
          </ProductProvider>
          <Route exact path="/checkout" component={Checkout} />
        </CartProvider>
        <Route exact path="/delivery" component={DeliveryDash} />
        <Route exact path="/farmer" component={FarmerDash} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/storage" component={Storage} />
      </React.Fragment>
    </Router>
  );
}

export default App;
