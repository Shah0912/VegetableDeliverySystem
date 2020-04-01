import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import AddCrop from "./AddCrop";
import { CultivationContext } from "./FarmerContext";
import Crop from "./Crop";
const CropsList = () => {
  const [crops, setCrops] = useContext(CultivationContext);
  return (
    <Container>
      <Card
        style={{
          width: "18rem",
          display: "flex"
        }}
      >
        <Card.Body>
          <Card.Title className="text-center">
            Crops under Cultivation
          </Card.Title>
          <ul id="list" className="list">
            {crops.map(crop => (
              <Crop key={crop.id} crop={crop} />
            ))}
          </ul>
          <AddCrop />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CropsList;
