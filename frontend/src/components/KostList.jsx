import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";

const KostList = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className=" ">
            <Card className="mt-2">
              <Row className="pr-5">
                <Col>
                  <CardImg src={props.img}></CardImg>
                </Col>
                <Col>
                  <Card.Text className="pt-3">
                    <strong>{props.kost}</strong> <br />
                    {props.alamat} <br />
                    {props.desa} <br />
                  </Card.Text>
                  <Card.Text className="text-end">{props.harga}</Card.Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KostList;
