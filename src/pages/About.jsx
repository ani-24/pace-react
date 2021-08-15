import React from "react";
import Header from "../components/Header";

const AboutPace = () => {
  return (
    <>
      <section className="section about-section">
        <h1 className="section-title">About Pace</h1>
        <p className="section-text">
          <p>
            The literal meaning of ‘ PACE ‘ is ‘Someone’s step by step
            consistent growth in a direction and making required changes in
            their position’.
          </p>
          <p>
            PACE Institute has mentored thousands of successful students in
            multiple disciplines. As English language is necessary in multiple
            spheres of life and availability of good books in English. PACE has
            helped aspiring people and candidates to grab their dream positions
            since its inception over past 16 years. Students preparing for
            officer rank positions need command over their English language.
            Pace Institute has been making people proficient in English language
            and personality development to attain significant positions. PACE
            stands for Personality Attainment & Communicative English. PACE
            Institute Pvt. Ltd. is a registered Institute and can also issue
            certification to its students.
          </p>
        </p>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Header />
      <AboutPace />
    </>
  );
};

export default About;
