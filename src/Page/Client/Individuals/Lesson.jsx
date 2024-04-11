import React from "react";
import Navbar from "../../../Client/Individuals/Layout/Navbar";
import Footer from "../../../Client/Individuals/Layout/Footer";
import LessonView from "../../../Client/Individuals/Course/LessonView";

const Lesson = () => {
  return (
    <div>
      <Navbar />
      <LessonView />
      <Footer />
    </div>
  );
};

export default Lesson;
