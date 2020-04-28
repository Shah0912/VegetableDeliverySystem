import React from "react";
import Map from "./Map";
//import Map1 from "./Map1";
import FarmerNav from "../../navbars/FarmerNav";
import querystring from "query-string";
const Page = (props) => {
  const id = querystring.parse(props.location.search).id;
  return (
    <div>
      <FarmerNav id={id} />
      <Map id={id} />
    </div>
  );
};

export default Page;
