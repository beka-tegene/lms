import image1 from "/assets/img/3d-avatar-profession-as-writer-3d-model-867496ad17.jpg";
import image2 from "/assets/img/lock.svg";
import image6 from "/assets/img/comment01.png";
import defaultImage from "/assets/img/default-course-thumbnail.png";
import jwt_decode from "jwt-decode";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseData,
  setEnrollCourse,
} from "../../../Store/Hooks/CourseHook";
function decrypt(text) {
  return atob(text);
}
function encrypt(text) {
  return btoa(text);
}

const CourseDetail = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const decryptedId = decrypt(slug);
  const token = Cookies.get("token");
  let userId;

  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      userId = decodedToken.userId;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Course " + decryptedId;
  }, [pathname]);
  const course = useSelector((state) => state.CourseHook.outputCourses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseData());
  }, []);

  const navigate = useNavigate();
  const filterCourse = course?.filter((item) => item._id === decryptedId);
  const EnrollHandler = () => {
    if (token) {
      if (filterCourse[0]?.paymentType === "free") {
        dispatch(setEnrollCourse({ data: { decryptedId } }));
      } else {
        navigate(`/checkout/${encrypt(decryptedId)}`);
      }
    } else {
      navigate("/accounts/login");
    }
  };
  console.log(filterCourse);
  return (
    <>
      {/* breadcrumb-area */}
      <section className="courses__breadcrumb-area">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="courses__breadcrumb-content">
                <a href="#" className="category">
                  {filterCourse.length ? (
                    filterCourse[0]?.categories
                  ) : (
                    <Skeleton width={100} height={15} />
                  )}
                </a>
                <h3 className="title">
                  {filterCourse.length ? (
                    filterCourse[0]?.courseName
                  ) : (
                    <>
                      <Skeleton
                        width={"100%"}
                        height={60}
                        sx={{ background: "#FFF3" }}
                      />
                      <Skeleton
                        width={"33%"}
                        height={60}
                        sx={{ background: "#FFF3" }}
                      />
                    </>
                  )}
                </h3>
                <p>{filterCourse[0]?.courseDescription}</p>
                <ul className="courses__item-meta list-wrap">
                  <li>
                    <div className="author">
                      <a href="#">
                        <img src={image1} alt="img" style={{ width: "35px" }} />
                      </a>
                      <a href="#">Arian Hok</a>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-file" /> 19
                  </li>
                  <li>
                    <i className="flaticon-timer" /> 10h 30m
                  </li>
                  <li>
                    <i className="flaticon-user-1" /> 18
                  </li>
                  <li>
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="rating-count">(4.8)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}
      <section className="courses-details-area section-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="courses__details-wrapper">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#info"
                      type="button"
                      role="tab"
                      aria-controls="info"
                      aria-selected="true"
                    >
                      Course Information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#review"
                      type="button"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="info"
                    role="tabpanel"
                    aria-labelledby="info-tab"
                  >
                    <div className="courses__details-content">
                      {filterCourse &&
                      typeof filterCourse[0]?.aboutCourse === "string" ? (
                        parse(filterCourse[0]?.aboutCourse)
                      ) : (
                        <>
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"100%"} height={15} />
                          <Skeleton width={"40%"} height={15} />
                        </>
                      )}
                    </div>
                    <div className="courses__details-curriculum">
                      <h4 className="title">Curriculum</h4>
                      <div className="accordion" id="accordionExample">
                        {filterCourse[0]?.chapter?.map((item, index) => (
                          <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                {item?.LessonName}
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ul className="list-wrap">
                                  {item
                                    ? item?.LessonFile?.map((item, index) => (
                                        <li
                                          className="course-item "
                                          key={index}
                                        >
                                          <a
                                            href="#"
                                            className="course-item-link"
                                          >
                                            <span className="item-name">
                                              {item?.LessonType}
                                            </span>
                                            <div className="course-item-meta">
                                              {/* <span className="item-meta duration">
                                07:48
                              </span> */}
                                              <span className="item-meta course-item-status">
                                                <img src={image2} alt="icon" />
                                              </span>
                                            </div>
                                          </a>
                                        </li>
                                      ))
                                    : Array.from({ length: 3 }).map(
                                        (_, index) => (
                                          <li
                                            className="course-item"
                                            key={index}
                                          >
                                            <a
                                              href="#"
                                              className="course-item-link"
                                            >
                                              <span className="item-name">
                                                <Skeleton
                                                  width={100}
                                                  height={20}
                                                />
                                              </span>
                                              <div className="course-item-meta">
                                                {/* <span className="item-meta duration">
                                07:48
                              </span> */}
                                                <span className="item-meta course-item-status">
                                                  <img
                                                    src={image2}
                                                    alt="icon"
                                                  />
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        )
                                      )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <div className="courses__details-reviews">
                      <h4 className="title">Student Ratings &amp; Reviews</h4>
                      <div className="course-rate">
                        <div className="course-rate__summary">
                          <div className="course-rate__summary-value">4.8</div>
                          <div className="course-rate__summary-stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="course-rate__summary-text">
                            Total 2 Rating
                          </div>
                        </div>
                        <div className="course-rate__details">
                          <div className="course-rate__details-row">
                            <div className="course-rate__details-row-star">
                              5
                              <i className="fas fa-star" />
                            </div>
                            <div className="course-rate__details-row-value">
                              <div className="rating-gray" />
                              <div
                                className="rating"
                                style={{ width: "80%" }}
                                title="80%"
                              />
                              <span className="rating-count">2</span>
                            </div>
                          </div>
                          <div className="course-rate__details-row">
                            <div className="course-rate__details-row-star">
                              4
                              <i className="fas fa-star" />
                            </div>
                            <div className="course-rate__details-row-value">
                              <div className="rating-gray" />
                              <div
                                className="rating"
                                style={{ width: "50%" }}
                                title="50%"
                              />
                              <span className="rating-count">1</span>
                            </div>
                          </div>
                          <div className="course-rate__details-row">
                            <div className="course-rate__details-row-star">
                              3
                              <i className="fas fa-star" />
                            </div>
                            <div className="course-rate__details-row-value">
                              <div className="rating-gray" />
                              <div
                                className="rating"
                                style={{ width: "0%" }}
                                title="0%"
                              />
                              <span className="rating-count">0</span>
                            </div>
                          </div>
                          <div className="course-rate__details-row">
                            <div className="course-rate__details-row-star">
                              2
                              <i className="fas fa-star" />
                            </div>
                            <div className="course-rate__details-row-value">
                              <div className="rating-gray" />
                              <div
                                className="rating"
                                style={{ width: "0%" }}
                                title="0%"
                              />
                              <span className="rating-count">0</span>
                            </div>
                          </div>
                          <div className="course-rate__details-row">
                            <div className="course-rate__details-row-star">
                              1
                              <i className="fas fa-star" />
                            </div>
                            <div className="course-rate__details-row-value">
                              <div className="rating-gray" />
                              <div
                                className="rating"
                                style={{ width: "0%" }}
                                title="0%"
                              />
                              <span className="rating-count">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="course-reviews">
                        <h4 className="course-review-head">Reviews (01)</h4>
                        <ul className="list-wrap">
                          <li>
                            <div className="review-author">
                              <img src={image6} alt="img" />
                            </div>
                            <div className="review-author-info">
                              <div className="review-stars-rated">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <h5 className="user-name">
                                Admin{" "}
                                <span className="date">August 5, 2023</span>
                              </h5>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantiu
                                meature areawtyt totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="course-review-form">
                        <h4 className="course-review-head">Write a review</h4>
                        <form action="#">
                          <div className="row">
                            <div className="col-sm-6">
                              <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="col-sm-6">
                              <input type="email" placeholder="Your Email" />
                            </div>
                          </div>
                          <input type="text" placeholder="Review Title" />
                          <div className="course-form-rating">
                            <span>Select Rating:</span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <textarea
                            placeholder="Type Comments"
                            defaultValue={""}
                          />
                          <button className="btn">Submit your Review</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <aside className="courses__details-sidebar">
                <div className="event-widget">
                  <div className="thumb">
                    {filterCourse[0]?.coverPage.length ? (
                      <img src={filterCourse[0]?.coverPage[0]} alt="img" />
                    ) : (
                      <img src={defaultImage} alt="img" />
                    )}
                    {/* <a
                    href="https://www.youtube.com/watch?v=YwrHGratByU"
                    className="popup-video"
                  >
                    <i className="fas fa-play" />
                  </a> */}
                  </div>
                  <div className="event-cost-wrap">
                    <h4 className="price">
                      <strong>Costs:</strong>
                      {/* $25.00 <span>$84.99</span> */}
                      {filterCourse.length ? (
                        filterCourse[0]?.paymentType
                      ) : (
                        <Skeleton width={70} height={35} />
                      )}
                    </h4>
                    
                    <NavLink
                      to={"#"}
                      className="tg-button-wrap btn"
                      style={{backgroundColor:"#D7A022",color:"#FFFFFF"}}
                      onClick={() => {
                        EnrollHandler();
                      }}
                    >
                      {token
                        ? filterCourse[0]?.paymentType === "free"
                          ? "Enroll This Now"
                          : "Pay Now"
                        : "Login to Enroll"}
                    </NavLink>

                    <div className="event-information-wrap">
                      <h6 className="title">Include This Course</h6>
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-timer" />
                          Duration <span>5.2 Hours</span>
                        </li>
                        <li>
                          <i className="flaticon-file" />
                          Estimated Seat <span>250</span>
                        </li>
                        <li>
                          <i className="flaticon-user-1" />
                          Joined <span>190</span>
                        </li>
                        <li>
                          <i className="flaticon-bars" />
                          Laguage <span>English</span>
                        </li>
                        <li>
                          <i className="flaticon-flash" />
                          Category <span>Desing</span>
                        </li>
                        <li>
                          <i className="flaticon-share" />
                          Share
                          <ul className="list-wrap event-social">
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-youtube" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
