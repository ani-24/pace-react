import React, { useState } from "react";
import Header from "../components/Header";
import ImageGalleryImgs from "../data/Image-gallery-data";
import Footer from "../components/Footer";
import JumpToTop from "../components/Jump-to-top";
import Wame from "../components/Wame";

const Gallery = () => {
  let currentIdx = 0;
  const imgPopup = (idx) => {
    currentIdx = idx;
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.setAttribute(
      "style",
      "height: 100vh; width: 100%; top: 0; left: 0; position: fixed; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); z-index: 100; display: flex; justify-content: center; align-items: center; animation: blur 500ms ease-in-out;"
    );
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute(
      "style",
      "display: flex; justify-content: space-around; align-items: center; max-height: 75%;"
    );
    modal.innerHTML = `
      <i class="fas fa-caret-left fa-2x slide-btn prev-btn"></i>
      <img class="current-img" src=${ImageGalleryImgs[idx].img} alt=${ImageGalleryImgs[idx].alt} style="max-height: 80%; max-width: 80%;" />
      <i class="fas fa-caret-right fa-2x slide-btn next-btn"></i>
    `;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const changeImg = () => {
      const currentImg = modal.querySelector("img");
      currentImg.src = ImageGalleryImgs[currentIdx].img;
    };
    prevBtn.addEventListener("click", () => {
      currentIdx -= 1;
      if (currentIdx < 0) {
        currentIdx = ImageGalleryImgs.length - 1;
      }
      changeImg();
    });
    nextBtn.addEventListener("click", () => {
      currentIdx += 1;
      if (currentIdx >= ImageGalleryImgs.length) {
        currentIdx = 0;
      }
      changeImg();
    });
    overlay.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("current-img") &&
        !e.target.classList.contains("slide-btn")
      ) {
        document.body.removeChild(overlay);
      } else {
        console.log(e.target);
      }
    });
  };
  return (
    <>
      <div className="image-gallery">
        {ImageGalleryImgs.map((img, idx) => {
          return (
            <>
              <div
                className="gallery-item"
                key={idx}
                onClick={() => {
                  imgPopup(idx);
                }}
              >
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
