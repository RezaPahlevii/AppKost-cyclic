import React from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Figure,
  Row,
} from "react-bootstrap";
import Kolase from "./../image/rumah.jpg";

const DetailsKost = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Detail Kost</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={700}
                height={200}
                alt="171x180"
                src={Kolase}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={700}
                height={200}
                alt="171x180"
                src={Kolase}
              />
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col md={8} mt="2">
            <div>
              <h3>
                <strong>
                  Kost Singgahsini Kertajaya Utimami Tipe A Gubeng Surabaya
                  D3G969BQ Lorem ipsum dolor sit amet consectetur.
                </strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate repudiandae incidunt quae rerum voluptate?
              </p>
              <div className="mt-5 mt-5">
                <h3>
                  <strong>Spesifikasi tipe kamar</strong>
                </h3>
                <p>
                  2.7 x 2.2 meter <br />
                  Tidak termasuk listrik
                </p>
                <hr />
              </div>
              <div className="mt-5 mb-5">
                <Row>
                  <h3>
                    <strong>Fasilitas kamar</strong>
                  </h3>
                </Row>
                <Row>
                  <Col>
                    <p>
                      AC <br />
                      Meja <br />
                      Kasur <br /> Bantal <br /> Lemari Pakaian <br /> Kursi
                    </p>
                  </Col>
                  <Col>
                    <p>
                      AC <br />
                      Meja <br />
                      Kasur <br /> Bantal <br /> Lemari Pakaian <br /> Kursi
                    </p>
                  </Col>
                </Row>
                <hr />
              </div>
              <div className="mt-5 mt-5">
                <h3>
                  <strong>Peraturan khusus tipe kamar ini</strong>
                </h3>
                <p>
                  Tipe ini bisa diisi maks. 2 orang/ kamar <br />
                  Tidak untuk pasutri
                  <br />
                  Tidak boleh bawa anak
                </p>
                <hr />
              </div>
              <div className="mt-5 mt-5">
                <h3>
                  <strong>Cerita Pemilik Kost Ini</strong>
                </h3>
                <p>
                  Kost ini terdiri dari 3 lantai. Tipe kamar A berada di lantai
                  3. Semua kamar di tipe ini memiliki jendela yang menghadap
                  secara langsung ke arah koridor. <br />
                  <strong>Selengkapnya..</strong>
                </p>
                <hr />
              </div>
              <div className="mt-5 mt-5">
                <h3>
                  <strong>Fasilitas Umum</strong>
                </h3>
                <p>
                  Kost ini terdiri dari 3 lantai. Tipe kamar A berada di lantai
                  3. Semua kamar di tipe ini memiliki jendela yang menghadap
                  secara langsung ke arah koridor.
                </p>
                <hr />
              </div>
              <div className="mt-5 mt-5">
                <h3>
                  <strong>Fasilitas Parkir</strong>
                </h3>
                <p>
                  Kost ini terdiri dari 3 lantai. Tipe kamar A berada di lantai
                  3. Semua kamar di tipe ini memiliki jendela yang menghadap
                  secara langsung ke arah koridor.
                </p>
                <hr />
              </div>
              <div className="mt-5 mt-5">
                <h3>
                  <strong>Lokasi dan Lingkungan Sekitar</strong>
                </h3>
                <p>
                  <iframe
                    width="850"
                    height="500"
                    src="https://www.youtube.com/embed/uG3x8O2OmyE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </p>
                <hr />
              </div>

              {/* <div name="duplikat">
                <div className="mt-5 mb-5">
                  <h3>
                    <strong>Spesifikasi tipe kamar</strong>
                  </h3>
                  <p>
                    2.7 x 2.2 meter <br />
                    Tidak termasuk listrik
                  </p>
                  <hr />
                </div>
                <div className="mt-5 mb-5">
                  <h3>
                    <strong>Fasilitas kamar</strong>
                  </h3>
                  <p>
                    AC <br />
                    Meja <br />
                    Kasur <br /> Bantal <br /> Lemari Pakaian <br /> Kursi
                  </p>
                  <hr />
                </div>
                <div className="mt-5 mb-5">
                  <h3>
                    <strong>Spesifikasi tipe kamar</strong>
                  </h3>
                  <p>
                    2.7 x 2.2 meter <br />
                    Tidak termasuk listrik
                  </p>
                  <hr />
                </div>
                <div className="mt-5 mb-5">
                  <h3>
                    <strong>Fasilitas kamar</strong>
                  </h3>
                  <p>
                    AC <br />
                    Meja <br />
                    Kasur <br /> Bantal <br /> Lemari Pakaian <br /> Kursi
                  </p>
                  <hr />
                </div>
              </div> */}
            </div>
          </Col>
          <Col>
            <Card className="py-4 px-5">
              <h4 className="mb-3">
                <strong>Rp. 500.000</strong> / bulan
              </h4>
              <Button variant="success">Ajukan Sewa</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsKost;
//md={{ span: 0, offset: 9 }}
