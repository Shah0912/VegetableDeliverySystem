import React from "react";
import Map from "./Map";
import { PickupProvider } from "./DeliveryContext";
import querystring from "query-string";
//import Map1 from "./Map1";

import DeliveryNav from "../navbars/DeliveryNav";
const Page = (props) => {
  const values = querystring.parse(props.location.search);
  console.log(values);
  return (
    <div>
      <DeliveryNav />
      <PickupProvider>
        <Map address={values.address} />
      </PickupProvider>
    </div>
  );
};

export default Page;
