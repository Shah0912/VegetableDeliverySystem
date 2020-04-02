import React from "react";
import ProductCard from "./ProductCard";

import { CardColumns, Card, Container } from "react-bootstrap";
const Listing = () => {
  return (
    <Container className="mt-5">
      <CardColumns>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardColumns>
    </Container>
  );
};

export default Listing;
