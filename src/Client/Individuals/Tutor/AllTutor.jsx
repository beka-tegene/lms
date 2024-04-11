import React from "react";
import image1 from "/assets/img/breadcrumb_bg1.jpg";
import image2 from "/assets/img/breadcrumb_bg1.jpg";
import image3 from "/assets/img/breadcrumb_bg1.jpg";
import image4 from "/assets/img/breadcrumb_bg1.jpg";
import image5 from "/assets/img/breadcrumb_bg1.jpg";
import image6 from "/assets/img/breadcrumb_bg1.jpg";
import image7 from "/assets/img/breadcrumb_bg1.jpg";
const AllTutor = () => {
  const divStyle = {
    backgroundImage: `url(${image1})`,
  };
  return (
    <div>
      <section className="breadcrumb-area breadcrumb-bg" style={divStyle}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h3 className="title">Our Instructors</h3>
                <nav className="breadcrumb">
                  <span property="itemListElement" typeof="ListItem">
                    <a href="/">Home</a>
                  </span>
                  <span className="breadcrumb-separator">
                    <i className="fas fa-angle-right" />
                  </span>
                  <span property="itemListElement" typeof="ListItem">
                    All Instructors
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events-area section-pt-120 section-pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
              <aside className="courses__sidebar">
                <div className="course__sidebar-widget shop-widget">
                  <div className="course__sidebar-search">
                    <form action="#">
                      <input type="text" placeholder="Search for courses..." />
                      <button type="submit">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 584.4 584.4"
                          // style={{"new 0 0 584.4 584.4"}}
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path
                                className="st0"
                                d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z"
                              />
                              <path
                                className="st1"
                                d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z"
                              />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="shop-widget">
                  <h4 className="widget-title">Filter by Category</h4>
                  <div className="shop-cat-list">
                    <ul className="list-wrap">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_1"
                          />
                          <label className="form-check-label" htmlFor="cat_1">
                            Art &amp; Design (8)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_2"
                          />
                          <label className="form-check-label" htmlFor="cat_2">
                            Business (12)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_3"
                          />
                          <label className="form-check-label" htmlFor="cat_3">
                            Data Science (7)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_4"
                          />
                          <label className="form-check-label" htmlFor="cat_4">
                            Development (10)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_5"
                          />
                          <label className="form-check-label" htmlFor="cat_5">
                            Finance (8)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_6"
                          />
                          <label className="form-check-label" htmlFor="cat_6">
                            Health &amp; Fitness (8)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_7"
                          />
                          <label className="form-check-label" htmlFor="cat_7">
                            Lifestyle (9)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_8"
                          />
                          <label className="form-check-label" htmlFor="cat_8">
                            Marketing (8)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_9"
                          />
                          <label className="form-check-label" htmlFor="cat_9">
                            Music (8)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="cat_10"
                          />
                          <label className="form-check-label" htmlFor="cat_10">
                            Development (9)
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-widget">
                  <h4 className="widget-title">Price Type</h4>
                  <div className="shop-cat-list">
                    <ul className="list-wrap">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="price_1"
                          />
                          <label className="form-check-label" htmlFor="price_1">
                            All (1,550)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="price_2"
                          />
                          <label className="form-check-label" htmlFor="price_2">
                            Free (32)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="price_3"
                          />
                          <label className="form-check-label" htmlFor="price_3">
                            Premium (17)
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-widget">
                  <h4 className="widget-title">Instructors</h4>
                  <div className="shop-cat-list">
                    <ul className="list-wrap">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="ins_5"
                          />
                          <label className="form-check-label" htmlFor="ins_5">
                            Female (9)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="ins_6"
                          />
                          <label className="form-check-label" htmlFor="ins_6">
                            Male (11)
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-widget">
                  <h4 className="widget-title">Experience</h4>
                  <div className="shop-cat-list">
                    <ul className="list-wrap">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="lang_3"
                          />
                          <label className="form-check-label" htmlFor="lang_3">
                            2+ (5)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="lang_4"
                          />
                          <label className="form-check-label" htmlFor="lang_4">
                            4+ (7)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="lang_5"
                          />
                          <label className="form-check-label" htmlFor="lang_5">
                            5+ (3)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="lang_6"
                          />
                          <label className="form-check-label" htmlFor="lang_6">
                            8+ (4)
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-widget">
                  <h4 className="widget-title">Location</h4>
                  <div className="shop-cat-list">
                    <ul className="list-wrap">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="difficulty_1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="difficulty_1"
                          >
                            Addis Ababa (50)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="difficulty_2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="difficulty_2"
                          >
                            Gimma (32)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="difficulty_3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="difficulty_3"
                          >
                            Mekelle (17)
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="difficulty_4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="difficulty_4"
                          >
                            Bahir Dar (2)
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-widget">
                  <h4 className="widget-title">Ratings</h4>
                  <div className="shop-rating-list">
                    <ul className="list-wrap">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                          <div className="rating">
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span>(5.0)</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                          <div className="rating">
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span>(4.1)</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                          <div className="rating">
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span>(3.2)</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                          <div className="rating">
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span>(2.1)</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                          <div className="rating">
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                              <li className="delete">
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <span>(1.2)</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="row events__wrapper">
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image2} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Aewe Creating Futures Through Technology</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> United Kingdom
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image3} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Exactly How Technology Can Make Reading</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Tokyo Japan
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image4} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Aewe Creating Futures Through Technology</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image5} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Learning JavaScript With Imagination</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Walsenburg
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image6} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Make Your Magnificent May 2023 Edition</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image7} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Accessible Target Sizes Cheatsheet</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Estes Park
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image3} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Exactly How Technology Can Make Reading</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Tokyo Japan
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image4} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Aewe Creating Futures Through Technology</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image5} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Learning JavaScript With Imagination</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Walsenburg
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image6} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Make Your Magnificent May 2023 Edition</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image7} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Accessible Target Sizes Cheatsheet</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Estes Park
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item mentors__item">
                    <div className="events__item-thumb">
                      <a href="#" className="shine__animate-link">
                        <img src={image7} alt="img" />
                      </a>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <a href="#">Accessible Target Sizes Cheatsheet</a>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Estes Park
                      </span>
                      <div
                        className="mentors__content-bottom"
                        style={{ marginTop: "1rem" }}
                      >
                        <ul className="list-wrap">
                          <li className="students">2+ Experience</li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTutor;
