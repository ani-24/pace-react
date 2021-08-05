import React from "react";
import Feedbacks from "./feedbacks";

const slidercells = (data) => {
  return (
    <>
      <div className="carousel-cell">
        <h1 className="carousel-heading">{data.title}</h1>
        <p className="carousel-body">{data.body}</p>
      </div>
    </>
  );
};

const Slider = () => {
  return (
    <>
      <div className="carousel" data-flickity='{"imagesLoaded": "true"}'>
        {Feedbacks.map(slidercells)}
      </div>
    </>
  );
};

export default Slider;
