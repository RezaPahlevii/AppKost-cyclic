import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <Container>
        <div>
          <h2>
            <strong>Temukan Kost Kebutuhan Anda</strong>
          </h2>
          <p>Dapatkan infonya dan langsung sewa di AppKost</p>
        </div>
        <Col sm={4}>
          <Form sticky="top" className="d-flex pt-2 pb-5">
            <Form.Control
              type="search"
              placeholder="Masukkan nama kost/alamat/area"
              className="me-2"
              aria-label="Search"
              style={{ height: "2.5rem", width: "2" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default SearchBar;
