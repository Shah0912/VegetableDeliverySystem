import React from "react";
import Map from "./Map";
import Map1 from "./Map1";
import FarmerNav from "../../navbars/FarmerNav";
import querystring from "query-string";
import Direction from "../../deliverydash/Direction";
import { MapProvider } from "../FarmerContext";
const Page = (props) => {
  const id = querystring.parse(props.location.search).id;
  return (
    <div>
      <FarmerNav id={id} />
      <MapProvider>
        <Map id={id} />
      </MapProvider>
    </div>
  );
};

export default Page;
