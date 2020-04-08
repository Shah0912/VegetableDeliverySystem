import React from "react";
import ProductCard from "./ProductCard";
import NavBar from "../components/NavBar";
import { ProductProvider } from "./ProductContext";

import { CardColumns, Card, Container } from "react-bootstrap";
const Listing = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container className="mt-5">
        <ProductProvider>
          <CardColumns>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </CardColumns>
        </ProductProvider>
      </Container>
    </React.Fragment>
  );
};

export default Listing;
