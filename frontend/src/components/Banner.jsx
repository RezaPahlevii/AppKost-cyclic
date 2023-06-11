import React from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";

const Banner = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 3,
    speed: 1000,
    borderRadius: 55,
  };
  //   const styles = {
  //     card: {
  //       backgroundColor: "#B7E0F2",
  //       borderRadius: 150,
  //       padding: "3rem",
  //     },
  //     cardImage: {
  //       objectFit: "cover",
  //       borderRadius: 55,
  //     },
  //   };

  return (
    <div>
      <Slider {...settings}>
        <div className=" mr-5 px-5">
          <Card>
            <Card.Img
              //   className="border-10"
              variant="top"
              style={{ height: "15rem", width: "20" }}
              src={props.banner}
            />
          </Card>
        </div>
        <div className="mr-5 px-5">
          <Card>
            <Card.Img
              //   className="border-10"
              variant="top"
              style={{ height: "15rem", width: "20" }}
              src={props.banner}
            />
          </Card>
        </div>
        <div className="mx-5">
          <Card>
            <Card.Img
              //   className="border-10"
              variant="top"
              style={{ height: "15rem", width: "20" }}
              src={props.banner}
            />
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
