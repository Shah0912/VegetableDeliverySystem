import React, { useState, useContext, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
//import * as cropData from "./data/crops1.json";
import { DeliveryContext } from "../DeliveryContext";

function Location({ id }) {
  //console.log(id);
  const { deliveries, getDeliveries } = useContext(DeliveryContext);
  useEffect(() => {
    getDeliveries(id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //console.log(pickups[0].address);
  //console.log(pickups);
  const [viewport, setViewport] = useState({
    latitude: 22.3511148,
    longitude: 78.6677428,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });
  const [selectedCrop, setSelectedCrop] = useState(null);
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic2hla29rYXIiLCJhIjoiY2s5OGlueHdxMDBtazNubzFzeGI4czVvNSJ9.PRkX6Oc96AJyVR6NDqg_zw"
        mapStyle="mapbox://styles/shekokar/ck98jbpmb4zhu1invhvmd41df"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {deliveries &&
          deliveries.map((crop) => (
            <Marker
              latitude={Number(crop.location.split(",")[1])}
              longitude={Number(crop.location.split(",")[0])}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCrop(crop);
                }}
              >
                <img
                  style={{
                    width: "20px",
                    height: "30px",
                  }}
                  src="/icon.png"
                />
              </button>
            </Marker>
          ))}
        {selectedCrop ? (
          <Popup
            latitude={Number(selectedCrop.location.split(",")[1])}
            longitude={Number(selectedCrop.location.split(",")[0])}
            onClose={() => {
              setSelectedCrop(null);
            }}
          >
            <div>
              <h4>Orderid: {selectedCrop.orderid}</h4>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Location;
