import React from "react";
import { Container } from "react-bootstrap";
import RekomendasiKost from "../components/RekomendasiKost";
import rumah from "./../image/rumah.jpg";
import rumah2 from "./../image/rumah2.jpg";
import rumah3 from "./../image/rumah3.jpg";
import rumah4 from "./../image/rumah4.jpg";
import Nav from "./../components/Nav";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Footer2 from "../components/Footer2";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Container className="my-5 py-5">
        <div className="pb-5">
          <SearchBar />
        </div>
        <div>
          <Banner banner={rumah2} />
        </div>

        <div className="row mt-5 pt-5">
          <div>
            <h3 className="pb-4">
              <>
                <strong>Rekomendasi Kost</strong>
              </>
            </h3>
          </div>
          <div className="col-4">
            <RekomendasiKost
              image={rumah}
              kost="Kost Hijau"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 200.000 / bulan"
            />
          </div>
          <div className="col-4">
            <RekomendasiKost
              image={rumah2}
              kost="Kost Pink"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 500.000 / bulan"
            />
          </div>
          <div className="col-4">
            <RekomendasiKost
              image={rumah3}
              kost="Kost Kuning"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 300.000 / bulan"
            />
          </div>
          <div className="col-4">
            <RekomendasiKost
              image={rumah4}
              kost="Kost Biru"
              alamat="Jl. Bathin Alam GG. AMD"
              desa="Desa Sungai Alam"
              harga="Rp. 700.000 / bulan"
            />
          </div>
        </div>
      </Container>
      <Footer2/>
    </div>
  );
};

export default HomePage;
