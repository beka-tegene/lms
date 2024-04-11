import { Component } from "react"
import image1 from "/assets/img/breadcrumb_bg1.jpg"
class Header extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url(${image1})`
    }
    return (
      <section className="breadcrumb-area breadcrumb-bg" style={divStyle}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h3 className="title">Our Courses</h3>
                <nav className="breadcrumb">
                  <span property="itemListElement" typeof="ListItem">
                    <a href="/">Home</a>
                  </span>
                  <span className="breadcrumb-separator">
                    <i className="fas fa-angle-right" />
                  </span>
                  <span property="itemListElement" typeof="ListItem">
                    All Courses
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Header
