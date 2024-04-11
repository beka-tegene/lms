import { useState } from "react";
import axios from "axios";
import logo from "/assets/img/logo1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Instructor_Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [idCard, setIdCard] = useState([]);
  const [instructorLicense, setInstructorLicense] = useState([]);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    let errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!userName.trim()) {
      errors.userName = "user Name is required";
    }
    if (!companyName.trim()) {
      errors.companyName = "company Name is required";
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "phone Number is required";
    }
    if (!idCard) {
      errors.idCard = "id Card is required";
    }
    if (!instructorLicense) {
      errors.instructorLicense = "instructor License is required";
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

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (validateForm()) {
      try {
        axios.defaults.withCredentials = true;
        await axios
          .post(
            "https://lms-api.purposeblacketh.com/api/v1/auth/register",
            {
              firstName,
              lastName,
              userName,
              phoneNumber,
              companyName,
              email,
              idCard,
              instructorLicense,
              password,
              role: "instructor",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((data) => {
            console.log(data);
            setLoading(false);
            window.location.href = "/login";
          });
      } catch (error) {
        toast.error(error?.response.data.message);
        setLoading(false);
      }
    } else {
      console.log("Form has errors, please correct them");
      setLoading(false);
    }
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ background: "#F1F1F1" }}
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
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  style={{
                    border: `${errors.firstName && "1px solid red"}`,
                    borderRadius: `${errors.firstName && "4px"}`,
                    background: `${errors.firstName && "#FA807250"}`,
                  }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div
                className="d-flex flex-column gap-1"
                style={{ width: "100%" }}
              >
                <label htmlFor="email">Last Name </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  style={{
                    border: `${errors.email && "1px solid red"}`,
                    borderRadius: `${errors.email && "4px"}`,
                    background: `${errors.email && "#FA807250"}`,
                  }}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex gap-2" style={{ width: "100%" }}>
              <div
                className="d-flex flex-column gap-1"
                style={{ width: "100%" }}
              >
                <label htmlFor="fullName">Username</label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  style={{
                    border: `${errors.fullname && "1px solid red"}`,
                    borderRadius: `${errors.fullname && "4px"}`,
                    background: `${errors.fullname && "#FA807250"}`,
                  }}
                  onChange={(e) => setUserName(e.target.value)}
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
              <label htmlFor="phone">Gender</label>
              <select name="" id="" className="form-control">
                <option selected disabled></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="phone">Experience</label>
              <input
                type="number"
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
              <label htmlFor="phone">Location</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                style={{
                  border: `${errors.phonenumber && "1px solid red"}`,
                  borderRadius: `${errors.phonenumber && "4px"}`,
                  background: `${errors.phonenumber && "#FA807250"}`,
                }}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2" style={{ width: "100%" }}>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="profile">ID Card</label>
                <input
                  type="file"
                  id="profile"
                  className="form-control"
                  style={{
                    border: `${errors.phonenumber && "1px solid red"}`,
                    borderRadius: `${errors.phonenumber && "4px"}`,
                    background: `${errors.phonenumber && "#FA807250"}`,
                  }}
                  onChange={(e) => setIdCard(e.target.files)}
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="profile">Instructor License</label>
                <input
                  type="file"
                  id="profile"
                  className="form-control"
                  style={{
                    border: `${errors.phonenumber && "1px solid red"}`,
                    borderRadius: `${errors.phonenumber && "4px"}`,
                    background: `${errors.phonenumber && "#FA807250"}`,
                  }}
                  onChange={(e) => setInstructorLicense(e.target.files)}
                />
              </div>
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

export default Instructor_Register;
