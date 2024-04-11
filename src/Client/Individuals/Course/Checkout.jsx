import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseData,
  getPayment,
  getPaymentWithSantim,
} from "../../../Store/Hooks/CourseHook";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
function decrypt(text) {
  return atob(text);
}
const Checkout = () => {
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
  const { slug } = useParams();
  const decryptedId = decrypt(slug);
  const dispatch = useDispatch();
  const course = useSelector((state) => state.CourseHook.outputCourses);
  useEffect(() => {
    dispatch(getCourseData());
  }, []);
  const filterCourseById = course.filter((item) => item._id === decryptedId);
  const chapaHandle = () => {
    dispatch(getPayment({data:{slug , userId}}));
  };
  const santimHandle = () => {
    dispatch(getPaymentWithSantim());
  };
  return (
    <div className="checkoutarea sp_bottom_100 sp_top_100">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="checkoutarea__billing">
              <div className="checkoutarea__billing__heading">
                <h2>Course Details</h2>
              </div>
              <div className="checkoutarea__billing__form">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="checkoutarea__inputbox">
                      <label htmlFor="first__name">Course Name</label>
                      <h5>{filterCourseById[0]?.courseName}</h5>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="checkoutarea__inputbox">
                      <label htmlFor="first__name">Course Description</label>
                      <h5>{filterCourseById[0]?.courseDescription}</h5>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="checkoutarea__inputbox">
                      <label htmlFor="first__name">Number of Review</label>
                      <h5>{filterCourseById[0]?.numOfReviews}</h5>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="checkoutarea__inputbox">
                      <label htmlFor="first__name">Price</label>
                      <h5>{filterCourseById[0]?.price}</h5>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="checkoutarea__inputbox">
                      <label htmlFor="first__name">Course Duration</label>
                      <h5>{filterCourseById[0]?.courseDuration}</h5>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="checkoutarea__inputbox">
                      <label htmlFor="first__name">about Course</label>
                      <h5>{filterCourseById[0]?.aboutCourse}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="checkoutarea__payment__wraper">
              <div className="checkoutarea__total">
                <h3>Your order</h3>
                <form method="post">
                  <div className="checkoutarea__table__wraper">
                    <table className="checkoutarea__table">
                      <thead>
                        <tr className="checkoutarea__item">
                          <td className="checkoutarea__ctg__type"> Product</td>
                          <td className="checkoutarea__cgt__des"> 1</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="checkoutarea__item prd-name">
                          <td className="checkoutarea__ctg__type">
                            {" "}
                            Product Title × <span>1</span>
                          </td>
                          <td className="checkoutarea__cgt__des">
                            {" "}
                            {filterCourseById[0]?.price} ETB
                          </td>
                        </tr>
                        <tr className="checkoutarea__item">
                          <td className="checkoutarea__ctg__type"> Subtotal</td>
                          <td className="checkoutarea__cgt__des">0.00</td>
                        </tr>
                        <tr className="checkoutarea__item">
                          <td className="checkoutarea__itemcrt-total">
                            {" "}
                            Total
                          </td>
                          <td className="checkoutarea__cgt__des prc-total">
                            {" "}
                            {filterCourseById[0]?.price} ETB
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
                <div className="header__bottom-right pl-30 ">
                  <div className="header__search w-100  d-xl-block pb-2">
                    <NavLink
                      className="tg-button-wrap btn "
                      style={{
                        backgroundColor: "#7DC400",
                        color: "#FFFFFF",
                        width: "100%",
                      }}
                      onClick={() => chapaHandle()}
                    >
                      <span className="text">Pay with CHAPA</span>
                    </NavLink>
                  </div>
                  <div className="header__search w-100  d-xl-block">
                    <NavLink
                      style={{
                        backgroundColor: "#D3AF35",
                        color: "#FFFFFF",
                        width: "100%",
                      }}
                      className="tg-button-wrap btn "
                      onClick={() => santimHandle()}
                    >
                      <span className="text">Pay with SANTIMPAY</span>
                    </NavLink>
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

export default Checkout;
