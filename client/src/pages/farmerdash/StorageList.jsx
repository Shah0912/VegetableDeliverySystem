import React, { useContext, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { StorageContext } from "./FarmerContext";
import StorageCrop from "./StorageCrop";
const StorageList = () => {
  const { crops, getCrops } = useContext(StorageContext);
  useEffect(() => {
    getCrops();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Card
        className="card border-success mb-3"
        style={{
          width: "18rem",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title className="text-center">Crops in Storage</Card.Title>
          <ul id="list" className="list">
            {crops.map((crop) => (
              <StorageCrop key={crop.id} crop={crop} />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StorageList;
