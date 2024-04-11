import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "/assets/img/slider-2-bg.jpg";
import image2 from "/assets/img/slider-cap-1.png";
import image3 from "/assets/img/slider-cap-2.png";
import image4 from "/assets/img/slider-cap-3.png";
import image5 from "/assets/img/slider-shape-1.jpg";
import image6 from "/assets/img/slider-shape-2.jpg";
import image7 from "/assets/img/segen-1 1.png";
import Slider from "react-slick";
class Hero extends React.Component {
  render() {
    document.title = "keberew university";

    return (
      <section
        className="slider__area slider__height-2 include-bg d-flex align-items-center p-4"
        data-background={image1}
        style={{ marginTop: "-9rem" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <style>
              {`
                  @keyframes fadeIn {
                    0%, 20%, 50%, 80%, 100% {
                      transform: translateY(0);
                    }
                    40% {
                      transform: translateY(-30px);
                    }
                    60% {
                      transform: translateY(-15px);
                    }
                  }

                  .fadeIn {
                    animation-duration: 2s;
                    animation-fill-mode: both;
                    animation-iteration-count: infinite;
                    animation-name: fadeIn;
                  }
                `}
            </style>
            <div className="col-xxl-6 col-lg-6 fadeIn">
              <Slider
                className="row"
                slidesToShow={1}
                infinite={true}
                speed={1000}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                arrows={false}
              >
                <div className="slider__content-2 mt-30">
                  <span>The Leader in Online Learning</span>
                  <h3 className="slider__title-2">
                    Build an Incredible Learning Experience
                  </h3>
                  <p>
                    The right mentoring relationship can be a powerful tool for
                    Professional growth. Bark up the right tree.
                  </p>
                  <NavLink to="/courses" className="tp-btn-green">
                    Explore Coureses
                  </NavLink>
                </div>
                <div className="slider__content-2 mt-30">
                  <span>The Leader in Online Learning</span>
                  <h3 className="slider__title-2">
                    Discover Unlimited Learning Possibilities
                  </h3>
                  <p>
                    Unlock your potential with our diverse range of courses.
                  </p>
                  <NavLink to="/courses" className="tp-btn-green">
                    Browse Courses
                  </NavLink>
                </div>
                <div className="slider__content-2 mt-30">
                  <span>Welcome to the Future of Learning</span>
                  <h3 className="slider__title-2">
                    Elevate Your Skills with Cutting-Edge Courses
                  </h3>
                  <p>
                    Take your career to new heights with our innovative learning
                    platform.
                  </p>
                  <NavLink to="/courses" className="tp-btn-green">
                    Start Exploring Now
                  </NavLink>
                </div>
              </Slider>
            </div>

            <div className="col-xxl-6 col-lg-6">
              <div className="slider__thumb-2 p-relative">
                <div className="slider__shape">
                  <img className="slider__shape-1" src={image2} alt="" />
                  <img className="slider__shape-2" src={image3} alt="" />
                  <img className="slider__shape-3" src={image4} alt="" />
                  <img className="slider__shape-4" src={image5} alt="" />
                  <img className="slider__shape-5" src={image6} alt="" />
                </div>
                <span className="slider__thumb-mask">
                  <img src={image7} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
