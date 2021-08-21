import React from "react";
import Header from "../components/Header";
import ImageGalleryImgs from "../data/Image-gallery-data";

const Gallery = () => {
  return (
    <>
      <div className="image-gallery">
        {ImageGalleryImgs.map((img) => {
          return (
            <>
              <div className="gallery-item">
                <img src={img.img} alt={img.alt} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const ImageGallery = () => {
  return (
    <>
      <Header />
      <Gallery />
    </>
  );
};

export default ImageGallery;
