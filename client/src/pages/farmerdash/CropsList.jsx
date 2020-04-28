import React, { useContext, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import AddCrop from "./AddCrop";
import { CultivationContext } from "./FarmerContext";
import Crop from "./Crop";
const CropsList = ({ id }) => {
  const { crops, getCrops } = useContext(CultivationContext);
  useEffect(() => {
    getCrops(id);
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
          <Card.Title className="text-center">
            Crops under Cultivation
          </Card.Title>
          <ul id="list" className="list">
            {crops.map((crop) => (
              <Crop key={crop.id} crop={crop} />
            ))}
          </ul>
          <AddCrop id={id} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CropsList;
