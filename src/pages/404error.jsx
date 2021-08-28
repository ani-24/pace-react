import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JumpToTop from "./../components/Jump-to-top";
import Wame from "./../components/Wame";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main>
        <div className="error-img">
          <img src="./img/error.png" alt="404 Error" />
        </div>
        <div className="error-text">
          <h1 className="title">Oops...</h1>
          <p className="text">
            Sorry! The page you are looking for does not exist.
          </p>
          <div className="link">
            <NavLink exact className="link" to="/">
              &larr; Back to HomePage
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

const Error = () => {
  return (
    <>
      <Header />
      <Main />
      <Wame />
      <JumpToTop />
      <Footer />
    </>
  );
};

export default Error;
