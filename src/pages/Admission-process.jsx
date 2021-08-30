import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Wame from "./../components/Wame";
import JumpToTop from "./../components/Jump-to-top";

const Content = () => {
  return (
    <>
      <div className="container">
        <div className="text">
          <h1 className="title">Admission details:</h1>
          <p>
            Limited Seats are available for the admission to courses at PACE
            Institute.
          </p>
          <p>
            Full fee of the course is to be deposited at the time of admission.
          </p>
          <p>
            2 passport size photos and copy of Aadhar card is to be submitted.
          </p>
          <p>
            Payment options:
            <ul className="payment-options">
              <li className="option">&rarr; UPI</li>
              <li className="option">&rarr; IMPS</li>
              <li className="option">&rarr; NEFT</li>
              <li className="option">&rarr; Cash (offline)</li>
            </ul>
          </p>
          <p>UPI payment is linked to the mobile number 9334314161</p>
          <p>
            Send the screenshot or payment details to the same WhatsApp number
            for booking of your seat
          </p>
        </div>
        <div className="img">
          <img src="./img/payment.png" alt="Payment" />
        </div>
      </div>
    </>
  );
};

const AdmissionProcess = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <Wame />
      <JumpToTop />
    </>
  );
};

export default AdmissionProcess;
