import React, { useState } from "react";

const JumpToTop = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", () => {
    toggleVisible();
  });
  return (
    <>
      <div
        id="jump-to-top-btn"
        className={visible ? "show" : "hide"}
        onClick={scrollTop}
      >
        <i className="fas fa-chevron-up jump-to-top-btn-icon"></i>
      </div>
    </>
  );
};

export default JumpToTop;
