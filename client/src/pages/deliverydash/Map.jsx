import React, { useState, useEffect, useContext } from "react";
import MapGL, { GeolocateControl, Layer, Source } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import Direction from "./Direction";
import { Container, CardGroup, Card } from "react-bootstrap";
import { PickupContext } from "./DeliveryContext";

const Map1 = ({ address }) => {
  //const { location, getmap } = useContext(PickupContext);
  //console.log(address);

  const access_token =
    "pk.eyJ1Ijoic2hla29rYXIiLCJhIjoiY2s5OGlueHdxMDBtazNubzFzeGI4czVvNSJ9.PRkX6Oc96AJyVR6NDqg_zw";
  const [viewport, setViewport] = useState({
    latitude: 19.02291054547061,
    longitude: 72.85614372884555,
    zoom: 11,
  });
  const [route, setRoute] = useState();
  const [step, setStep] = useState([]);
  const url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/72.90387109718142,19.05877840943195;" +
    address +
    "?geometries=geojson&steps=true&access_token=" +
    "pk.eyJ1Ijoic2hla29rYXIiLCJhIjoiY2s5OGh4dGZyMDJsYjN0bW5mbXI1dDZzaCJ9.AZdJdf6-5pmlbVzpfbIAVw"; //access_token;72.85614372884555,19.02291054547061
  useEffect(async () => {
    const jsonResponse = await axios.get(url);

    var distance = jsonResponse.data.routes[0].distance * 0.001;
    var duration = jsonResponse.data.routes[0].duration / 60;
    var steps = jsonResponse.data.routes[0].legs[0].steps;
    var coords = jsonResponse.data.routes[0].geometry;
    setStep(steps);
    setRoute(coords);
  }, []);
  /* async function getMatch() {
    const jsonResponse = await axios.get(url);
    var distance = jsonResponse.data.routes[0].distance * 0.001;
    var duration = jsonResponse.data.routes[0].duration / 60;
    var steps = jsonResponse.data.routes[0].legs[0].steps;
    var coords = jsonResponse.data.routes[0].geometry;
    setStep(steps);
    setRoute(coords); */
  // get route directions on load map
  // add the route to the map
  //addRoute(coords);
  //  console.log(coordinates);

  //req.send();
  //}
  const data = {
    type: "Feature",
    geometry: route,
  };
  return (
    <div>
      <CardGroup>
        <Direction steps={step} />
        <Card>
          {/*  <button onClick={() => getMatch()}></button> */}
          <MapGL
            style={{ height: "1000px" }}
            mapStyle="mapbox://styles/mapbox/light-v9"
            accessToken={access_token}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
            onViewportChange={setViewport}
          >
            <GeolocateControl position="top-right" />
            <Source id="route1" type="geojson" data={data} />
            <Layer
              id="route"
              type="line"
              source="route1"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "#1db7dd",
                "line-width": 8,
                "line-opacity": 0.8,
              }}
            />
          </MapGL>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Map1;
