import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterFasilitas from "../components/FilterFasilitas";
import Footer from "../components/Footer";
import KostList from "../components/KostList";
import Nav from "../components/Nav";
import Maps from "./../components/Maps";
import Rumah from "./../image/rumah.jpg";
import Rumah2 from "./../image/rumah2.jpg";
import Rumah3 from "./../image/rumah3.jpg";
import Rumah4 from "./../image/rumah4.jpg";

const ListKost = () => {
  return (
    <div>
      <Container>
        <Row>
          <Nav />
        </Row>
        <Row className="mt-4 pt-3">
          <Col md={6}>
            <FilterFasilitas />
            <KostList
              img={Rumah}
              kost="Kost Hijau"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 200.000 / bulan"
            />
            <KostList
              img={Rumah2}
              kost="Kost Kuning"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 500.000 / bulan"
            />
            <KostList
              img={Rumah3}
              kost="Kost Pink"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 300.000 / bulan"
            />
            <KostList
              img={Rumah4}
              kost="Kost Biru"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 500.000 / bulan"
            />
            <KostList
              img={Rumah2}
              kost="Kost Ungu"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 700.000 / bulan"
            />
          </Col>
          <Col>
            <Maps />
          </Col>
        </Row>
        <Row className="mt-3">
          <Footer />
        </Row>
      </Container>
    </div>
  );
};

export default ListKost;
