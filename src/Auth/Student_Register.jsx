import { useState } from "react";
import axios from "axios";
import logo from "/assets/img/logo1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setRegister } from "../Store/Hooks/AuthHook";
const Student_Register = () => {
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    let errors = {};
    if (!fullname.trim()) {
      errors.fullname = "First Name is required";
    }
    if (!phonenumber.trim()) {
      errors.phonenumber = "phonenumber is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
    if (!confirm_password.trim()) {
      errors.confirm_password = "Confirm Password is required";
    } else if (password !== confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (validateForm()) {
      dispatch(
        setRegister({ data: { fullname, phoneNumber:phonenumber, email, password } })
      );
    } else {
      console.log("Form has errors, please correct them");
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ background: "#F1F1F1", height: "100vh" }}
    >
      <ToastContainer />
      <div
        className="d-flex flex-column align-items-center justify-content-start gap-2"
        style={{ width: "400px" }}
      >
        <div
          className="col"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src={logo} alt="logo" style={{ width: "200px" }} />
        </div>
        <div
          className="col bg-white p-3 rounded d-flex flex-column align-items-center gap-2"
          style={{ width: "100%" }}
        >
          <h3 className="text-3xl font-bold">SIGN UP</h3>
          <p>Great to have you back! this is student registration form</p>
          <form
            className="d-flex flex-column gap-2 w-100"
            onSubmit={submitHandler}
          >
            <div className="d-flex gap-2" style={{ width: "100%" }}>
              <div
                className="d-flex flex-column gap-1"
                style={{ width: "100%" }}
              >
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  style={{
                    border: `${errors.fullname && "1px solid red"}`,
                    borderRadius: `${errors.fullname && "4px"}`,
                    background: `${errors.fullname && "#FA807250"}`,
                  }}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div
                className="d-flex flex-column gap-1"
                style={{ width: "100%" }}
              >
                <label htmlFor="email">Email </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  style={{
                    border: `${errors.email && "1px solid red"}`,
                    borderRadius: `${errors.email && "4px"}`,
                    background: `${errors.email && "#FA807250"}`,
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                style={{
                  border: `${errors.phonenumber && "1px solid red"}`,
                  borderRadius: `${errors.phonenumber && "4px"}`,
                  background: `${errors.phonenumber && "#FA807250"}`,
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="profile">Profile Photo</label>
              <input type="file" id="profile" className="form-control" />
            </div>
            <div className="d-flex gap-2" style={{ width: "100%" }}>
              <div
                className="d-flex flex-column gap-2"
                style={{ width: "100%" }}
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  style={{
                    border: `${errors.password && "1px solid red"}`,
                    borderRadius: `${errors.password && "4px"}`,
                    background: `${errors.password && "#FA807250"}`,
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className="d-flex flex-column gap-2"
                style={{ width: "100%" }}
              >
                <label htmlFor="Confirm">Confirm Password</label>
                <input
                  type="password"
                  id="Confirm"
                  className="form-control"
                  style={{
                    border: `${errors.confirm_password && "1px solid red"}`,
                    borderRadius: `${errors.confirm_password && "4px"}`,
                    background: `${errors.confirm_password && "#FA807250"}`,
                  }}
                  onChange={(e) => setConfirm_password(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-warning btn-lg">
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
          <p>
            Already have An Account ? <a href="/accounts/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student_Register;
