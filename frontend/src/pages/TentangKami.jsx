import React from "react";
import Nav from "../components/Nav";
import { Col, Container, Image, Row } from "react-bootstrap";
// import Footer from "../components/Footer";
import Pendiri1 from "./../image/Levi.jpg";
import Pendiri2 from "./../image/Bima.jpeg";
import Hero from "./../image/hero.jpg";
import { Link } from "react-scroll";
import Footer2 from "../components/Footer2";
import './../css/footer.css'

const TentangKami = () => {
  return (
    <div>
      <Nav />
      <Image src={Hero} width={1350} />
      <Container className="mt-2">
        <div >
          <ul class="nav justify-content-center">
            <li>
            <Link className="mx-2 text-dark" style={{textDecoration: 'none', }} to="tentangkos" spy={true} smooth={true} offset={-90} duration={500}>Tentang Kos</Link>
            </li>
            <li>
            <Link className="mx-2 " style={{textDecoration: 'none', }} to="kisahpendiri" spy={true} smooth={true} offset={-90} duration={500}>Kisah Pendiri</Link>
            </li>
            <li>
            <Link className="mx-2 " style={{textDecoration: 'none', }} to="pendiri" spy={true} smooth={true} offset={-90} duration={500}>Pendiri</Link>
            </li>
          </ul>
        </div>

        <section id="tentangkos" className="mt-5 padding-scroll">
          <div className="text-center ">
            <h4>
              <strong>TENTANG KOS</strong>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section id="kisahpendiri" className="my-5">
          <div className="text-center">
            <h4>
              <strong>KISAH PENDIRI</strong>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section id="pendiri">
          <h4 className="text-center">
            <strong>PENDIRI</strong>
          </h4>
          <Row className="mb-5">
            <Col>
              <div>
                <h6>
                  <strong>Muhammad Syah Reza Pahlevi</strong>
                </h6>
              </div>
              <div className="text-secondary">
                <h6>Fullstack Web Development</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col className="text-center ">
              <Image
                width="250px"
                src={Pendiri1}
                alt="Levi"
                className="rounded-circle shadow p-0"
              />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <div>
                <h6>
                  <strong>Bima Fadi Lana</strong>
                </h6>
              </div>
              <div className="text-secondary">
                <h6>Fullstack Mobile Development</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col className="text-center ">
              <div className="">
                <Image
                  width="250px"
                  src={Pendiri2}
                  alt="Bima"
                  className="rounded-circle shadow p-0"
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer2 />
    </div>
  );
};


export default TentangKami;
