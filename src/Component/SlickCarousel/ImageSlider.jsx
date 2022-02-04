import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import { Col } from "antd";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImageSlider.css";

import TaskCard from "../TaskCard/TaskCard";

const product = [
  {
    productname: "Call Ana Care  installation",
    time: "9:00 Am",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#ECBB3D",
  },
  {
    productname: "Product Delievery  time",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#80C7D0",
  },
  {
    productname: "Follow up with Cambria",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#F98341",
  },
  {
    productname: "Brochure  Review",
    time: "Tomorrow",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#B1A8DE",
  },
  {
    productname: "Brian Noble Pick Up",
    time: "2:00 Pm",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#80C7D0",
  },
  {
    productname: "Call Ana Care  installation",
    time: "9:00 Am",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#ECBB3D",
  },
  {
    productname: "Product Delievery  time",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#80C7D0",
  },
  {
    productname: "Follow up with Cambria",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#F98341",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        position: "absolute",
        top: "105%",
        right: "2%",
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        position: "absolute",
        top: "105%",
        left: "2%",
      }}
    />
  );
}

const ImageSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    adaptiveHeight: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {product.map((items) => {
          return (
            <div>
              <Col>
                <TaskCard item={items} />
              </Col>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
