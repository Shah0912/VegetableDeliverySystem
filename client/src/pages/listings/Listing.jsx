import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import CustomerNav from "../navbars/CustomerNav";
import { ProductContext, CartProvider } from "./ProductContext";
import querystring from "query-string";

import { CardColumns, Card, Container } from "react-bootstrap";
const Listing = (props) => {
  const id = querystring.parse(props.location.search).id;
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <CustomerNav id={id} />
      <Container className="mt-5">
        <h1>Our Products For Sale:</h1>

        <CardColumns>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} id={id} />
          ))}
        </CardColumns>
      </Container>
    </React.Fragment>
  );
};

export default Listing;
