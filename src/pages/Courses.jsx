import React from "react";
import Header from "../components/Header";
import CoursesData from "../data/Course-data";
import Footer from "../components/Footer";

const createCards = (course) => {
  return (
    <>
      <div className="course">
        <div className="course-body">
          <div className="course-title">{course.title}</div>
          <div className="course-desc">{course.desc}</div>
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
      <div className="course-gallery">{CoursesData.map(createCards)}</div>
    </>
  );
};

const Courses = () => {
  return (
    <>
      <Header />
      <CourseGallery />
      <Footer />
    </>
  );
};

export default Courses;
