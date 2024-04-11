import React from "react"
import image1 from "/assets/img/logoWhite.png"
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-bg" style={{ backgroundColor: "#061E43" }}>
        <div className="footer__top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="footer__about">
                    <div className="footer__logo logo">
                      <a href="/">
                        <img src={image1} alt="img" />
                      </a>
                    </div>
                    <p>
                      Welcome to Kegeberew University, your premier destination
                      for eLearning excellence!
                    </p>
                    <ul className="list-wrap m-0 p-0">
                      <li className="address">
                        Addis Ababa, Ethiopia, Sengatera traders bldg 5th floor
                      </li>
                      <li className="number">(+251) 946-545-454</li>
                      <li className="socials">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-whatsapp" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Resources</h4>
                  <ul className="list-wrap">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/AboutUs">About</a>
                    </li>
                    <li>
                      <a href="/ContactPage">Contact</a>
                    </li>
                    <li>
                      <a href="/courses">Courses</a>
                    </li>
                    <li>
                      <a href="/comingsoon">Instructors</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Services</h4>
                  <ul className="list-wrap">
                    <li>
                      <a href="/">For Individuals</a>
                    </li>
                    <li>
                      <a href="/comingsoon">For Businesses</a>
                    </li>
                    <li>
                      <a href="/comingsoon">For Universities</a>
                    </li>
                    <li>
                      <a href="/comingsoon">For Government</a>
                    </li>
                    <li>
                      <a href="/comingsoon">For School</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p>
                Copyright&copy; 2024 Kegeberew Technology Solutions S.C. | All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
