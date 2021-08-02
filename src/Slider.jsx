import React from "react";
import ImgData from "./Main-slider-data";

const slidercells = (img) => {
  return (
    <>
      <div className="carousel-img">
        <img key={img.id} src={img.src} alt={img.alt} />
      </div>
    </>
  );
};

const Slider = () => {
  return (
    <>
      <div className="carousel" data-flickity='{"imagesLoaded": "true"}'>
        {ImgData.map(slidercells)}
      </div>
    </>
  );
};

export default Slider;
