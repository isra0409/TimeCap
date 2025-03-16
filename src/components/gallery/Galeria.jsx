import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/gim1.jpeg"
import img2 from "../../assets/gim2.jpeg"
import img3 from "../../assets/gim3.jpeg"
import img4 from "../../assets/gim4.jpeg"
import img5 from "../../assets/gim5.jpeg"
import "./styles.css"

const Galeria = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    img1, 
    img2, 
    img3, 
    img4, 
    img5
  ];

  return (
    <div className="container90 container  text-center">
      <h2 className="mb-4 fw-bold text-danger">Somos TimeCap</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img src={img} alt={`Imagen ${index + 1}`} className="img-fluid rounded shadow" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Galeria;
