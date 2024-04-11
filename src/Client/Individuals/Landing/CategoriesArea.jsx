import React from "react"
import image1 from "/assets/img/title_shape.svg"

class CategoriesArea extends React.Component {
  render() {
    return (
      <section className="categories-area section-py-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-8 col-md-10">
              <div className="categories__title-wrap text-center text-xl-start">
                <div className="section__title">
                  <span className="sub-title">Unique online courses</span>
                  <h2 className="title tg-svg">
                    Browse By{" "}
                    <span className="position-relative">
                      <span
                        className="svg-icon"
                        id="svg-5"
                        data-svg-icon={image1}
                      ></span>
                      <span className="skill-text" style={{ color: "#d7a022" }}>
                        Services
                      </span>
                    </span>
                  </h2>
                </div>
                <p>
                  Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut
                  elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor
                  awes atnse awctetur.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="categories__wrap">
                <div className="row justify-content-center row-cols-2 row-cols-md-3">
                  <div className="col">
                    <div className="categories__item">
                      <a href="/">
                        <i className="flaticon-graphic-design"></i>
                        <span className="name">For Individuals</span>
                        <span className="courses">19 Courses</span>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <a href="/comingsoon">
                        <i className="flaticon-email-marketing"></i>
                        <span className="name">For Businesses</span>
                        <span className="courses">10 Courses</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center row-cols-2 row-cols-sm-3">
                  <div className="col">
                    <div className="categories__item">
                      <a href="/comingsoon">
                        <i className="flaticon-bars"></i>
                        <span className="name">For Government</span>
                        <span className="courses">08 Courses</span>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <a href="/comingsoon">
                        <i className="flaticon-programming-language"></i>
                        <span className="name">For Universities</span>
                        <span className="courses">13 Courses</span>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <a href="/comingsoon">
                        <i className="flaticon-atom"></i>
                        <span className="name">For School</span>
                        <span className="courses">19 Courses</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CategoriesArea
