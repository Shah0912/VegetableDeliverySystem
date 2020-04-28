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

import Storage from "./pages/Storage";
//import VehicleDetails from "./pages/deliverydash/Vdetails";
import Review from "./pages/Feedback";
import VehicleDetails from "./pages/deliverydash/VehicleDetails";
import Page from "./pages/farmerdash/AllCrops/Page";
import PageP from "./pages/deliverydash/All/PageP";
import PageD from "./pages/deliverydash/All/PageD";
import Maps from "./pages/deliverydash/Maps";
function App() {
  return (
    <Router>
      <React.Fragment>
        <UserProvider>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/vdetails" component={VehicleDetails} />
          <Route exact path="/storage" component={Storage} />
          <Route exact path="/feedback" component={Review} />
          <Route exact path="/pages" component={Page} />

          <Route exact path="/pageAllP" component={PageP} />
          <Route exact path="/pageAllD" component={PageD} />
          <CartProvider>
            <ProductProvider>
              <Route exact path="/listing" component={Listing} />
            </ProductProvider>
            <Route exact path="/checkout" component={Checkout} />
          </CartProvider>
          <Route exact path="/delivery" component={DeliveryDash} />
          <Route exact path="/delivery/maps" component={Maps} />
          <Route exact path="/farmer" component={FarmerDash} />
        </UserProvider>
      </React.Fragment>
    </Router>
  );
}

export default App;
