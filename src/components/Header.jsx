import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const toggleNav = () => {
    const hamburger = document.querySelector(".hamburger_menu");
    const sidenav = document.querySelector(".sidenav");
    hamburger.classList.toggle("cross");
    sidenav.classList.toggle("show");
    const scrollY = document.body.style.top;
    if (sidenav.classList.contains("show")) {
      window.scrollTo(0, scrollY);
      document.body.classList.add("unscroll");
    } else {
      document.body.classList.remove("unscroll");
    }
  };
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <NavLink className="logo-text" to="/">
            <img src="./img/pace_logo.png" alt="" />
          </NavLink>
        </div>
        <ul className="desktop-nav nav-list">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/"
              className="nav-link"
              data-text="Home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/courses"
              className="nav-link"
              data-text="Courses"
            >
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/video-gallery"
              className="nav-link"
              data-text="Video Gallery"
            >
              Video Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/image-gallery"
              className="nav-link"
              data-text="Image Gallery"
            >
              Image Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/about"
              className="nav-link"
              data-text="About Pace"
            >
              About Pace
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/admission-process"
              className="nav-link"
              data-text="Admission Process"
            >
              Admission Process
            </NavLink>
          </li>
        </ul>
        <div className="hamburger_menu" onClick={toggleNav}>
          <div className="bar" id="bar-1"></div>
          <div className="bar" id="bar-2"></div>
          <div className="bar" id="bar-3"></div>
        </div>
      </nav>
      <div className="sidenav">
        <i
          className="fas fa-times-circle fa-lg sidenav-close"
          onClick={toggleNav}
        ></i>
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
          <li className="nav-item">
            <NavLink to="/admission-process" className="nav-link">
              Admission Process
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
