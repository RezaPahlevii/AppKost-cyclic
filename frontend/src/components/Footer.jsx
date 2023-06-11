import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container class="p-3 mb-2 bg-light text-dark">
        <Row>
          <Col>LOGO</Col>
          <Col>
            <Row className="mb-2"><strong>App Kost</strong></Row>
            <Row className="mb-2">Pusat bantuan</Row>
            <Row className="mb-2">Tentang Kami</Row>
          </Col>
          <Col>
            <Row className="mb-2"><strong>Hubungi Kami</strong></Row>
            <Row className="mb-2">Email</Row>
            <Row className="mb-2">WA</Row>
          </Col>
        </Row><hr/><br/>
      <p className="text-start">
        <strong>AppKost</strong> by RezaPahlevii. The source code and the
        website content is licensed.
      </p><br/>
      </Container> 
    </div>
  );
};
export default Footer;
