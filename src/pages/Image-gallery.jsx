import React from "react";
import Header from "../components/Header";
import ImageGalleryImgs from "../data/Image-gallery-data";
import Footer from "../components/Footer";
import JumpToTop from "../components/Jump-to-top";
import Wame from "../components/Wame";

const Gallery = () => {
  return (
    <>
      <div className="image-gallery">
        {ImageGalleryImgs.map((img, idx) => {
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
      <Footer />
      <JumpToTop />
      <Wame />
    </>
  );
};

export default ImageGallery;
