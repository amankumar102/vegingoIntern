import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SlickSlider.css';

export default function SlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slick-slider img-fluid">
      <div className="slide ">
        <img src="https://farmfresh-store-demo.myshopify.com/cdn/shop/files/slide1.1.jpg?v=1617591477" alt="vegetable" />
      </div>
      <div className="slide">
        <img src="https://asiafreshfruits.com/wp-content/uploads/2021/03/Main-Banner-3-1.jpg" alt="vegetable" />
      </div>
    </Slider>
  );
}