import React, { useEffect, useState } from "react";
import image1 from "/assets/img/counter__1.png";
import image2 from "/assets/img/counter__2.png";
import image3 from "/assets/img/counter__3.png";
import image4 from "/assets/img/grid_1.png";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCourseData, getUserData } from "../../../Store/Hooks/UserHook";
function encrypt(text) {
  return btoa(text);
}
const ProfileContent = ({ dataUsed }) => {
  return (
    <div style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
      <div className="col-xl-9 col-lg-9 col-md-12">
        <div className="dashboard__content__wraper">
          <div className="dashboard__section__title">
            <h4>My Profile</h4>
          </div>
          <div
            className="row"
            style={{
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "10px 0",
            }}
          >
            <div className="col-lg-4 col-md-4" style={{ marginTop: "2rem" }}>
              <div className="dashboard__form">Registration Date</div>
            </div>
            <div className="col-lg-8 col-md-8" style={{ marginTop: "2rem" }}>
              <div className="dashboard__form">20, January 2024 9:00 PM</div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dashboard__form dashboard__form__margin">
                Full Name
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="dashboard__form dashboard__form__margin">
                {dataUsed.fullname}
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dashboard__form dashboard__form__margin">
                Username
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="dashboard__form dashboard__form__margin">
                obema007
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dashboard__form dashboard__form__margin">
                Email
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="dashboard__form dashboard__form__margin">
                {dataUsed.email}
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dashboard__form dashboard__form__margin">
                Phone Number
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="dashboard__form dashboard__form__margin">
                {dataUsed.phoneNumber}
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dashboard__form dashboard__form__margin">
                Expert
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="dashboard__form dashboard__form__margin">
                Graphics Design
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="dashboard__form dashboard__form__margin">
                Biography
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="dashboard__form dashboard__form__margin">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores veniam, delectus accusamus nesciunt laborum repellat
                laboriosam, deserunt possimus itaque iusto perferendis
                voluptatum quaerat cupiditate vitae. Esse aut illum perferendis
                nulla, corporis impedit quasi alias est!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseContent = ({ dataHandler }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserHook.OutputUsers);
  const usersCourse = useSelector((state) => state.UserHook.OutputUserCourses);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken?.userId;
        dispatch(getUserData({ data: { userId } }));

        dispatch(getUserCourseData({ data: { userId } }));
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);
  dataHandler(user);
  console.log(usersCourse);
  return (
    <div style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
      <div className="dashboard__content__wraper">
        <div className="dashboard__section__title">
          <h4>Summery</h4>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div
              className="dashboard__single__counter"
              style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="counterarea__text__wraper">
                <div className="counter__img">
                  <img loading="lazy" src={image1} alt="counter" />
                </div>
                <div className="counter__content__wraper">
                  <div className="counter__number">
                    <span className="counter">
                      {usersCourse?.enrolledCourses?.length}
                    </span>
                    +
                  </div>
                  <p>Enrolled Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div
              className="dashboard__single__counter"
              style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="counterarea__text__wraper">
                <div className="counter__img">
                  <img loading="lazy" src={image2} alt="counter" />
                </div>
                <div className="counter__content__wraper">
                  <div className="counter__number">
                    <span className="counter">08</span>+
                  </div>
                  <p>Active Courses</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div
              className="dashboard__single__counter"
              style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="counterarea__text__wraper">
                <div className="counter__img">
                  <img loading="lazy" src={image3} alt="counter" />
                </div>
                <div className="counter__content__wraper">
                  <div className="counter__number">
                    <span className="counter">12</span>
                  </div>
                  <p>Complete Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "none",
          borderTop: "1px solid #ccc",
          margin: "5px 0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      ></div>
      <div className="col-xl-9 col-lg-9 col-md-12" style={{ width: "100%" }}>
        <div className="dashboard__content__wraper">
          <div className="dashboard__section__title">
            <h4>My Courses</h4>
          </div>
          <div className="row">
            <div
              className="col-xl-12 aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <ul
                className=" about__button__wrap dashboard__button__wrap"
                id="myTab"
                role="tablist"
                style={{ display: "flex", width: "100%", listStyle: "none" }}
              >
                <li
                  className="col-lg-4 col-md-6 col-sm-12 nav-item"
                  role="presentation"
                >
                  <button
                    className="single__tab__link active"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__one"
                    type="button"
                    aria-selected="true"
                    role="tab"
                    style={{
                      width: "100%",
                      height: "6rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Enrolled Courses
                  </button>
                </li>
                <li
                  className="col-lg-4 col-md-6 col-sm-12 nav-item"
                  role="presentation"
                >
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__two"
                    type="button"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                    style={{
                      width: "100%",
                      height: "6rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Active Courses
                  </button>
                </li>
                <li
                  className="col-lg-4 col-md-6 col-sm-12 nav-item"
                  role="presentation"
                >
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__three"
                    type="button"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                    style={{
                      width: "100%",
                      height: "6rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Completed Courses
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="tab-content tab__content__wrapper aos-init aos-animate"
              id="myTabContent"
              data-aos="fade-up"
            >
              <div
                className="tab-pane fade active show"
                id="projects__one"
                role="tabpanel"
                aria-labelledby="projects__one"
              >
                <div className="row">
                  {usersCourse?.enrolledCourses?.map((item, index) => (
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 col-12"
                      key={index}
                    >
                      <div className="gridarea__wraper">
                        <div className="gridarea__img">
                          <NavLink to={`/lesson/${encrypt(item?.course?._id)}`}>
                            <img
                              loading="lazy"
                              src={item?.course?.coverPage[0]}
                              alt="grid"
                            />
                          </NavLink>
                          <div className="gridarea__small__button">
                            <div className="grid__badge">Data &amp; Tech</div>
                          </div>
                          <div className="gridarea__small__icon">
                            <NavLink
                              to={`/lesson/${encrypt(item?.course?._id)}`}
                            >
                              <i className="icofont-heart-alt" />
                            </NavLink>
                          </div>
                        </div>
                        <div className="gridarea__content">
                          <div className="gridarea__list">
                            <ul>
                              <li>
                                <i className="icofont-book-alt" />{" "}
                                {item?.course?.chapter.length} Lesson
                              </li>
                              <li>
                                <i className="icofont-clock-time" /> 1 hr 30 min
                              </li>
                            </ul>
                          </div>
                          <div className="gridarea__heading">
                            <h3>
                              <a>{item?.course?.courseName}</a>
                            </h3>
                          </div>
                          <div className="gridarea__price">
                            {item?.course?.price} ETB
                            <span>
                              {" "}
                              <del className="del__2">
                                {item?.course?.paymentType}
                              </del>
                            </span>
                          </div>
                        </div>
                        <div className="grid__course__status populerarea__button">
                          <div
                            className="progress"
                            style={{
                              backgroundColor:
                                Math.floor(item.progress) >= 100
                                  ? "#234534"
                                  : "#d7a022",
                            }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            >
                              {Math.floor(item.progress)} %{" "}
                              {Math.floor(item.progress) >= 100
                                ? "Complete"
                                : "Progress"}
                            </div>
                          </div>
                          {Math.floor(item.progress) >=
                            100 &&(
                              <a className="default__button" href="#">
                                Download Certificate
                              </a>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="projects__two"
                role="tabpanel"
                aria-labelledby="projects__two"
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="gridarea__wraper">
                      <div className="gridarea__img">
                        <a href="../course-details.html">
                          <img loading="lazy" src={image4} alt="grid" />
                        </a>
                        <div className="gridarea__small__button">
                          <div className="grid__badge">Data &amp; Tech</div>
                        </div>
                        <div className="gridarea__small__icon">
                          <a href="#">
                            <i className="icofont-heart-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="gridarea__content">
                        <div className="gridarea__list">
                          <ul>
                            <li>
                              <i className="icofont-book-alt" /> 23 Lesson
                            </li>
                            <li>
                              <i className="icofont-clock-time" /> 1 hr 30 min
                            </li>
                          </ul>
                        </div>
                        <div className="gridarea__heading">
                          <h3>
                            <a href="../course-details.html">
                              Foundation course to under stand about softwere
                            </a>
                          </h3>
                        </div>
                        <div className="gridarea__price">
                          $32.00 <del>/ $67.00</del>
                          <span>
                            {" "}
                            <del className="del__2">Free</del>
                          </span>
                        </div>
                        <div className="gridarea__bottom">
                          <a href="instructor-details.html">
                            <div className="gridarea__small__img">
                              <img loading="lazy" src={image4} alt="grid" />
                              <div className="gridarea__small__content">
                                <h6>Micle Jhon</h6>
                              </div>
                            </div>
                          </a>
                          <div className="gridarea__star">
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <span>(44)</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid__course__status populerarea__button">
                        <div
                          className="progress"
                          style={{ backgroundColor: "#60a018" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          >
                            80% Complete
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="gridarea__wraper">
                      <div className="gridarea__img">
                        <img loading="lazy" src={image4} alt="grid" />
                        <div className="gridarea__small__button">
                          <div className="grid__badge blue__color">
                            Mechanical
                          </div>
                        </div>
                        <div className="gridarea__small__icon">
                          <a href="#">
                            <i className="icofont-heart-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="gridarea__content">
                        <div className="gridarea__list">
                          <ul>
                            <li>
                              <i className="icofont-book-alt" /> 29 Lesson
                            </li>
                            <li>
                              <i className="icofont-clock-time" /> 2 hr 10 min
                            </li>
                          </ul>
                        </div>
                        <div className="gridarea__heading">
                          <h3>
                            <a href="#">
                              Nidnies course to under stand about softwere
                            </a>
                          </h3>
                        </div>
                        <div className="gridarea__price green__color">
                          $32.00<del>/$67.00</del>
                          <span>.Free</span>
                        </div>
                        <div className="gridarea__bottom">
                          <a href="instructor-details.html">
                            <div className="gridarea__small__img">
                              <img loading="lazy" src={image4} alt="grid" />
                              <div className="gridarea__small__content">
                                <h6>Rinis Jhon</h6>
                              </div>
                            </div>
                          </a>
                          <div className="gridarea__star">
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <span>(44)</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid__course__status populerarea__button">
                        <div
                          className="progress"
                          style={{ backgroundColor: "#60a018" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "70%" }}
                          >
                            70% Complete
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="projects__three"
                role="tabpanel"
                aria-labelledby="projects__three"
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="gridarea__wraper">
                      <div className="gridarea__img">
                        <a href="../course-details.html">
                          <img loading="lazy" src={image4} alt="grid" />
                        </a>
                        <div className="gridarea__small__button">
                          <div className="grid__badge">Data &amp; Tech</div>
                        </div>
                        <div className="gridarea__small__icon">
                          <a href="#">
                            <i className="icofont-heart-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="gridarea__content">
                        <div className="gridarea__list">
                          <ul>
                            <li>
                              <i className="icofont-book-alt" /> 23 Lesson
                            </li>
                            <li>
                              <i className="icofont-clock-time" /> 1 hr 30 min
                            </li>
                          </ul>
                        </div>
                        <div className="gridarea__heading">
                          <h3>
                            <a href="../course-details.html">
                              Foundation course to under stand about softwere
                            </a>
                          </h3>
                        </div>
                        <div className="gridarea__price">
                          $32.00 <del>/ $67.00</del>
                          <span>
                            {" "}
                            <del className="del__2">Free</del>
                          </span>
                        </div>
                        <div className="gridarea__bottom">
                          <a href="instructor-details.html">
                            <div className="gridarea__small__img">
                              <img loading="lazy" src={image4} alt="grid" />
                              <div className="gridarea__small__content">
                                <h6>Micle Jhon</h6>
                              </div>
                            </div>
                          </a>
                          <div className="gridarea__star">
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <span>(44)</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid__course__status populerarea__button">
                        <div
                          className="progress"
                          style={{ backgroundColor: "#d7a022" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "100%" }}
                          >
                            100% Complete
                          </div>
                        </div>
                        <a className="default__button" href="#">
                          Download Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="gridarea__wraper">
                      <div className="gridarea__img">
                        <img loading="lazy" src={image4} alt="grid" />
                        <div className="gridarea__small__button">
                          <div className="grid__badge blue__color">
                            Mechanical
                          </div>
                        </div>
                        <div className="gridarea__small__icon">
                          <a href="#">
                            <i className="icofont-heart-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="gridarea__content">
                        <div className="gridarea__list">
                          <ul>
                            <li>
                              <i className="icofont-book-alt" /> 29 Lesson
                            </li>
                            <li>
                              <i className="icofont-clock-time" /> 2 hr 10 min
                            </li>
                          </ul>
                        </div>
                        <div className="gridarea__heading">
                          <h3>
                            <a href="#">
                              Nidnies course to under stand about softwere
                            </a>
                          </h3>
                        </div>
                        <div className="gridarea__price green__color">
                          $32.00<del>/$67.00</del>
                          <span>.Free</span>
                        </div>
                        <div className="gridarea__bottom">
                          <a href="instructor-details.html">
                            <div className="gridarea__small__img">
                              <img loading="lazy" src={image4} alt="grid" />
                              <div className="gridarea__small__content">
                                <h6>Rinis Jhon</h6>
                              </div>
                            </div>
                          </a>
                          <div className="gridarea__star">
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <span>(44)</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid__course__status populerarea__button">
                        <div
                          className="progress"
                          style={{ backgroundColor: "#d7a022" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "100%" }}
                          >
                            100% Complete
                          </div>
                        </div>
                        <a className="default__button" href="#">
                          Download Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="gridarea__wraper">
                      <div className="gridarea__img">
                        <img loading="lazy" src={image4} alt="grid" />
                        <div className="gridarea__small__button">
                          <div className="grid__badge blue__color">
                            Mechanical
                          </div>
                        </div>
                        <div className="gridarea__small__icon">
                          <a href="#">
                            <i className="icofont-heart-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="gridarea__content">
                        <div className="gridarea__list">
                          <ul>
                            <li>
                              <i className="icofont-book-alt" /> 29 Lesson
                            </li>
                            <li>
                              <i className="icofont-clock-time" /> 2 hr 10 min
                            </li>
                          </ul>
                        </div>
                        <div className="gridarea__heading">
                          <h3>
                            <a href="#">
                              Nidnies course to under stand about softwere
                            </a>
                          </h3>
                        </div>
                        <div className="gridarea__price green__color">
                          $32.00<del>/$67.00</del>
                          <span>.Free</span>
                        </div>
                        <div className="gridarea__bottom">
                          <a href="instructor-details.html">
                            <div className="gridarea__small__img">
                              <img loading="lazy" src={image4} alt="grid" />
                              <div className="gridarea__small__content">
                                <h6>Rinis Jhon</h6>
                              </div>
                            </div>
                          </a>
                          <div className="gridarea__star">
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <i className="icofont-star golden-star" />
                            <span>(44)</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid__course__status populerarea__button">
                        <div
                          className="progress"
                          style={{ backgroundColor: "#d7a022" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "100%" }}
                          >
                            100% Complete
                          </div>
                        </div>
                        <a className="default__button" href="#">
                          Download Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingContent = ({ dataUsed }) => {
  return (
    <div style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
      <div className="col-xl-9 col-lg-9 col-md-12" style={{ width: "100%" }}>
        <div className="dashboard__content__wraper">
          <div className="dashboard__section__title">
            <h4>My Profile</h4>
          </div>
          <div
            className="row"
            style={{
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "10px 0",
            }}
          >
            <div
              className="col-xl-12 aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <ul
                className=" about__button__wrap dashboard__button__wrap"
                id="myTab"
                role="tablist"
                style={{ display: "flex", width: "100%", listStyle: "none" }}
              >
                <li
                  className="col-lg-4 col-md-6 col-sm-12 nav-item"
                  role="presentation"
                >
                  <button
                    className="single__tab__link active"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__one"
                    type="button"
                    aria-selected="true"
                    role="tab"
                    style={{
                      width: "100%",
                      height: "6rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Profile
                  </button>
                </li>
                <li
                  className="col-lg-4 col-md-6 col-sm-12 nav-item"
                  role="presentation"
                >
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__two"
                    type="button"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                    style={{
                      width: "100%",
                      height: "6rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Password
                  </button>
                </li>
                <li
                  className="col-lg-4 col-md-6 col-sm-12 nav-item"
                  role="presentation"
                >
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__three"
                    type="button"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                    style={{
                      width: "100%",
                      height: "6rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Social Icon
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="tab-content tab__content__wrapper aos-init aos-animate"
              id="myTabContent"
              data-aos="fade-up"
            >
              <div
                className="tab-pane fade active show"
                id="projects__one"
                role="tabpanel"
                aria-labelledby="projects__one"
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="dashboard__form__wraper">
                          <div className="dashboard__form__input">
                            <label htmlFor="#">Full Name</label>
                            <input
                              type="text"
                              placeholder={dataUsed.fullname}
                              style={{
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="dashboard__form__wraper">
                          <div className="dashboard__form__input">
                            <label htmlFor="#">User Name</label>
                            <input
                              type="text"
                              placeholder="johndue"
                              style={{
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="dashboard__form__wraper">
                          <div className="dashboard__form__input">
                            <label htmlFor="#">Phone Number</label>
                            <input
                              type="text"
                              placeholder={dataUsed.phoneNumber}
                              style={{
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="dashboard__form__wraper">
                          <div className="dashboard__form__input">
                            <label htmlFor="#">Skill/Occupation</label>
                            <input
                              type="text"
                              placeholder="Full Stack Developer"
                              style={{
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="dashboard__form__wraper">
                          <div className="dashboard__form__input">
                            <label htmlFor="#">Display Name Publicly As</label>
                            <input
                              type="text"
                              placeholder="John"
                              style={{
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="dashboard__form__wraper">
                          <div className="dashboard__form__input">
                            <label htmlFor="#">Bio</label>
                            <textarea
                              name=""
                              id=""
                              cols={30}
                              rows={10}
                              defaultValue={
                                "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                              }
                              style={{
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="dashboard__form__button">
                          <a className="btn " href="/instructor">
                            <span className="text">Update Info</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="projects__two"
                role="tabpanel"
                aria-labelledby="projects__two"
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">Current Password</label>
                        <input type="text" placeholder="Current password" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">New Password</label>
                        <input type="text" placeholder="New Password" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">Re-Type New Password</label>
                        <input type="text" placeholder="Re-Type New Password" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__button">
                      <a className="default__button" href="#">
                        Update Password
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="projects__three"
                role="tabpanel"
                aria-labelledby="projects__three"
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-facebook"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                          Facebook
                        </label>
                        <input
                          type="text"
                          placeholder="https://facebook.com/"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                          Twitter
                        </label>
                        <input type="text" placeholder="https://twitter.com/" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x={2} y={9} width={4} height={12} />
                            <circle cx={4} cy={4} r={2} />
                          </svg>
                          Linkedin
                        </label>
                        <input
                          type="text"
                          placeholder="https://linkedin.com/"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-layout"
                          >
                            <rect
                              x={3}
                              y={3}
                              width={18}
                              height={18}
                              rx={2}
                              ry={2}
                            />
                            <line x1={3} y1={9} x2={21} y2={9} />
                            <line x1={9} y1={21} x2={9} y2={9} />
                          </svg>
                          Website
                        </label>
                        <input type="text" placeholder="https://website.com/" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__wraper">
                      <div className="dashboard__form__input">
                        <label htmlFor="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          Github
                        </label>
                        <input type="text" placeholder="https://github.com/" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="dashboard__form__button">
                      <a className="default__button" href="#">
                        Update Password
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileDetail = () => {
  const [activeTab, setActiveTab] = useState("course");
  const [dataUsed, setDataUsed] = useState();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const LogoutHandler = () => {
    Cookies.remove("token");
    window.location.href = "/accounts/login";
  };

  let contentComponent;

  if (activeTab === "course") {
    contentComponent = <CourseContent dataHandler={setDataUsed} />;
  } else if (activeTab === "profile") {
    contentComponent = <ProfileContent dataUsed={dataUsed} />;
  } else if (activeTab === "setting") {
    contentComponent = <SettingContent dataUsed={dataUsed} />;
  }

  return (
    <div className="dashboard">
      <div className="container-fluid full__width__padding">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12" style={{}}>
            <div className="dashboard__inner ">
              <div className="dashboard__nav__title">
                <h6>Welcome, Student Name </h6>
              </div>
              <div className="dashboard__nav">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <a
                      className={activeTab === "course" ? "active" : ""}
                      href="#"
                      onClick={() => handleTabClick("course")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                      Enrolled Courses
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === "profile" ? "active" : ""}
                      href="#"
                      onClick={() => handleTabClick("profile")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      My Profile
                    </a>
                  </li>

                  <li>
                    <a
                      className={activeTab === "setting" ? "active" : ""}
                      href="#"
                      onClick={() => handleTabClick("setting")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-settings"
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        LogoutHandler();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-volume-1"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12">{contentComponent}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
