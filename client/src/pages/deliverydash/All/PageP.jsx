import React from "react";
import MapP from "./MapP";
import { PickupProvider } from "../DeliveryContext";
//import Map1 from "./Map1";
import DeliveryNav from "../../navbars/DeliveryNav";
import querystring from "query-string";
const PageP = (props) => {
  const id = querystring.parse(props.location.search).id;
  console.log(id);
  return (
    <div>
      <DeliveryNav id={id} />
      <PickupProvider>
        <MapP id={id} />
      </PickupProvider>
    </div>
  );
};

export default PageP;
