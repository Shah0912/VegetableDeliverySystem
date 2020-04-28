import React from "react";
import MapD from "./MapD";
import { DeliveryProvider } from "../DeliveryContext";
//import Map1 from "./Map1";
import DeliveryNav from "../../navbars/DeliveryNav";
import querystring from "query-string";
const PageD = (props) => {
  const id = querystring.parse(props.location.search).id;
  console.log(id);
  return (
    <div>
      <DeliveryNav id={id} />
      <DeliveryProvider>
        <MapD id={id} />
      </DeliveryProvider>
    </div>
  );
};

export default PageD;
