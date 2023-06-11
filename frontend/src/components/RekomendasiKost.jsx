import React from "react";
import { Card, Col, Container } from "react-bootstrap";

const RekomendasiKost = (props) => {
  return (
    <div>
      <Container>
        <Col className="pb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "10rem", width: "18rem" }}
              src={props.image}
            />
            <Card.Body>
              <Card.Title>{props.kost}</Card.Title>
              <Card.Text>
                {props.alamat}
                <br />
                {props.desa}
              </Card.Text>
              <Card.Text>{props.harga}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default RekomendasiKost;
