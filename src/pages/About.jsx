import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wame from "../components/Wame";
import JumpToTop from "../components/Jump-to-top";

const AboutPace = () => {
  return (
    <>
      <section className="section about-section">
        <h1 className="section-title">About Pace</h1>
        <p className="section-text">
          <p>
            The literal meaning of "PACE" is "Someone’s step by step consistent
            growth in a direction and making required changes in their
            position".
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

const AboutMentor = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About mentor</h1>
      <p className="section-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          officiis delectus rerum neque vel soluta fugiat, ad rem non quaerat.
          Ut nihil corporis adipisci maxime id dicta doloribus odio veniam.
        </p>
        <p>
          Dolorum, accusamus? Perferendis assumenda quis reiciendis illum, neque
          consectetur necessitatibus officia, est voluptatibus autem rerum vero
          quo praesentium, eaque accusantium vel. Debitis veniam beatae ab saepe
          ex maxime facilis molestiae.
        </p>
        <video src="./img/hero-video.mp4" controls></video>
      </p>
    </section>
  );
};

const PersonalityDevelopment = () => {
  return (
    <>
      <section className="section about-section">
        <h1 className="section-title">Personality Development</h1>
        <p className="section-text">
          <p>
            Personality development encompasses the dynamic construction and
            deconstruction of integrative characteristics that distinguish an
            individual in terms of interpersonal behavioral traits. Indeed,
            personality development is ever-changing and subject to contextual
            factors and life-altering experiences. Personality development is
            also dimensional in description and subjective in nature. That is,
            personality development can be seen as a continuum varying in
            degrees of intensity and change. It is subjective in nature because
            its conceptualization is rooted in social norms of expected
            behavior, self-expression, and personal growth
          </p>
          <p>PACE Institute provides personality development topics like:</p>
          <ul className="personality-list">
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Confidence
            </li>
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Career / Interview
            </li>
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Motivation
            </li>
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Communication (Listening, Public Speaking, Presenting)
            </li>
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Strengths / Weaknesses
            </li>
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Self Understanding
            </li>
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Leadership
            </li>
            <li>
              <i class="fas fa-caret-right" style={{ marginRight: ".5em" }}></i>
              Optimism / Positivity / Happiness
            </li>
          </ul>
        </p>
      </section>
    </>
  );
};

const CommunicativeEnglish = () => {
  return (
    <>
      <section className="section about-section">
        <h1 className="section-title">Communicative English</h1>
        <p className="section-text">
          <p>
            English has become the leading international language. It has
            developed over the period of more than 1,400 years. English language
            has been updating itself with time from old English to modern
            English with institutions like PACE working sincerely. Modern
            English has been spreading around the world due to its flexibility
            and adaptability. English has become the leading language of
            international discourse and communication in many regions and
            professional contexts such as science, navigation and law. Modern
            English grammar is the result of a gradual change from a typical
            Indo-European dependent marking pattern, with a rich inflectional
            morphology and relatively free word order, to a mostly analytic
            pattern with little inflection, a fairly fixed subject–verb–object
            word order (pattern) and a complex syntax. Modern English relies
            more on auxiliary verbs and word order for the expression of complex
            tenses, aspect and mood, as well as passive constructions,
            interrogatives and some negation.
          </p>
          <p>
            English is the largest language by number of speakers and the third
            most-spoken native language in the world, after Standard Chinese and
            Spanish. It is the most widely learned second language and is either
            the official language or one of the official languages in almost 60
            sovereign states. There are more people who have learned it as a
            second language than there are native speakers.
          </p>
          <p>
            It is estimated that there are over 2.5 billion speakers of English.
            English is the majority native language in the United States, the
            United Kingdom, Canada, Australia, New Zealand and Ireland, an
            official and the main language of Singapore, and it is widely spoken
            in some areas of the Caribbean, Africa, South Asia, Southeast Asia,
            and Oceania. It is a co-official language of the United Nations, the
            European Union and many other world and regional international
            organisations.
          </p>
          <p>
            Indian English is a class of varieties of the English language
            spoken in India, and among the Indian diaspora elsewhere in the
            world. English is used by the Indian government for some
            communication as a supplement to Hindi, the country’s “official
            language of the Union”, enshrined in the Constitution. English is an
            official language of 7 states and 5 Union Territories and also
            additional official language of 7 states and 1 Union Territory.
            English is also the sole official language of the Judiciary of
            India, unless a state Governor or legislature mandates the use of
            regional language, or the President has given approval for the use
            of regional languages in courts.
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
      <PersonalityDevelopment />
      <CommunicativeEnglish />
      <AboutMentor />
      <Footer />
      <Wame />
      <JumpToTop />
    </>
  );
};

export default About;
