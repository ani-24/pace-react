import React from "react";
import Header from "../components/Header";
import CoursesData from "../data/Course-data";
import Footer from "../components/Footer";
import JumpToTop from "../components/Jump-to-top";

const createCourses = (course, idx) => {
  const listStyle = {
    paddingLeft: "1em",
  };
  return (
    <>
      <div className="course" key={idx}>
        <div className="course-body">
          <div className="course-title">{course.title}</div>
          <div className="course-desc">
            Online or offline whatever students prefer
            <br />
            Only 20 students in a batch
            <br />
            <br />
            <ol style={listStyle}>
              {course.items.map((item) => {
                return (
                  <>
                    <li>{item}</li>
                  </>
                );
              })}
            </ol>
            <br />
            The full training is under the guidance of <b>
              Mr. Pratap Manish
            </b>{" "}
            (IIM alumni with more than 15 years of experience in multiple
            countries). <br /> Fee to be paid at the time of admission.
          </div>
        </div>
        <div className="course-footer">
          <div className="footer-details course-duration">
            {course.duration}
          </div>
          <div className="footer-details course-price">{course.price}</div>
        </div>
      </div>
    </>
  );
};

const CourseGallery = () => {
  return (
    <>
      <div className="course-gallery">{CoursesData.map(createCourses)}</div>
    </>
  );
};

const Courses = () => {
  return (
    <>
      <Header />
      <p className="intro-text">
        PACE Institute offers multiple offline or online classes for short or
        long duration for English language and personality development for all
        age groups and different levels as per the requirement of people
      </p>
      <CourseGallery />
      <Footer />
      <JumpToTop />
    </>
  );
};

export default Courses;
