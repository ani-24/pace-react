import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <a href="#"><img src="./img/pace_logo.png" alt="Pace Institute" /></a>
        </div>
        <ul className="desktop-nav nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/courses" className="nav-link">Courses</a></li>
          <li className="nav-item"><a href="/video-gallery" className="nav-link">Video Gallery</a></li>
          <li className="nav-item"><a href="/image-gallery" className="nav-link">Image Gallery</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About Pace</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header;