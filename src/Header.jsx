import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <NavLink className="logo-text" to="/">
            Pace
          </NavLink>
        </div>
        <ul className="desktop-nav nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" data-text="Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className="nav-link" data-text="Courses">
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/video-gallery"
              className="nav-link"
              data-text="Video Gallery"
            >
              Video Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/image-gallery"
              className="nav-link"
              data-text="Image Gallery"
            >
              Image Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" data-text="About Pace">
              About Pace
            </NavLink>
          </li>
        </ul>
        <div className="hamburger_menu">
          <div className="bar" id="bar-1"></div>
          <div className="bar" id="bar-2"></div>
        </div>
      </nav>
      <div className="sidenav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className="nav-link">
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/video-gallery" className="nav-link">
              Video Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/image-gallery" className="nav-link">
              Image Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About Pace
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
