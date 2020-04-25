import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as cropData from "./data/crops1.json";

function Location() {
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
        {cropData.features.map((crop) => (
          <Marker
            latitude={crop.geometry.coordinates[1]}
            longitude={crop.geometry.coordinates[0]}
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
            latitude={selectedCrop.geometry.coordinates[1]}
            longitude={selectedCrop.geometry.coordinates[0]}
            onClose={() => {
              setSelectedCrop(null);
            }}
          >
            <div>
              <h4>{selectedCrop.properties.types_of_c}</h4>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Location;
