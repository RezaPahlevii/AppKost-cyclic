import React from "react";
import { Container } from "react-bootstrap";
import DetailsKost from "../components/DetailsKost";
import Nav from "../components/Nav";

const DetailKost = () => {
  return (
    <div>
      <Nav />
      <Container className="mt-5 pt-5">
        <DetailsKost />
      </Container>
    </div>
  );
};

export default DetailKost;
