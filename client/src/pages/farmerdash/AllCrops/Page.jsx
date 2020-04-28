import React from "react";
//import Map from "./Map";
import Map1 from "./Map1";
import FarmerNav from "../../navbars/FarmerNav";
import querystring from "query-string";
import { MapProvider } from "../FarmerContext";
const Page = (props) => {
  const id = querystring.parse(props.location.search).id;
  return (
    <div>
      <FarmerNav id={id} />
      <MapProvider>
        <Map1 id={id} />
      </MapProvider>
    </div>
  );
};

export default Page;
