import React from "react";

const mapStyle = {
  border: 0,
};

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top grid">
          <div className="column address">
            <div className="column-heading">Address</div>
            <div className="column-body">
              <ul>
                <li>
                  PACE tower, opposite Jyoti Raj complex, 90 feet Road,
                  Kankarbagh, Patna. 800020
                </li>
                <li>
                  1st floor , Jagdamba Towers, Sahdeo Mahto marg, Boring Road,
                  Patna-800001
                </li>
                <li>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.130711601798!2d85.157266!3d25.58721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf97f67e31741abb0!2sPACE%20Institute%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1628132403903!5m2!1sen!2sin"
                    className="map"
                    allowFullScreen=""
                    loading="lazy"
                    style={mapStyle}
                  ></iframe>
                </li>
                <li>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460512.0513559904!2d85.099725!3d25.613209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x231364db43a67516!2sPace%20Institute%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1628132450872!5m2!1sen!2sin"
                    className="map"
                    allowFullScreen=""
                    loading="lazy"
                    style={mapStyle}
                  ></iframe>
                </li>
              </ul>
            </div>
          </div>
          <div className="column links">
            <div className="column-heading">Quick Links</div>
            <div className="column-body">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/courses">Courses</a>
                </li>
                <li>
                  <a href="/video-gallery">Video Gallery</a>
                </li>
                <li>
                  <a href="/image-gallery">Image Gallery</a>
                </li>
                <li>
                  <a href="/about">About Pace</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column contact">
            <div className="column-heading">Contact us</div>
            <div className="column-body">
              <ul>
                <li>
                  <a href="https://wa.me/+919334314161?text=Hello,%20I%20want%20to%20enquire%20for%20admission">
                    <i className="fab fa-whatsapp fa-lg"></i>
                    9334314161
                  </a>
                </li>
                <li>
                  <a href="mailto:personalityenglish@gmail.com">
                    <i className="fas fa-envelope fa-lg"></i>
                    personalityenglish@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fas fa-phone-alt fa-lg"></i>9334314161,
                  7979911318, 7979971401, 9334847381
                </li>
              </ul>
            </div>
          </div>
          <div className="column social">
            <div className="column-heading">Social</div>
            <div className="column-body">
              <ul>
                <li>
                  <a href="https://www.facebook.com/paceinstituteno.1/">
                    <i className="fab fa-facebook fa-lg"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/pratap.manish_pace.institute/">
                    <i className="fab fa-instagram fa-lg"></i>Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/PratapManishPACEInstitute">
                    <i className="fab fa-youtube fa-lg"></i>YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="copyright-text">Copyright © 2021 Pace Institute.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
