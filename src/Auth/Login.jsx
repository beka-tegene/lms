import { useState } from "react";
import logo from "/assets/img/logo1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../Store/Hooks/AuthHook";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState({});
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  console.log(email, "email");
  console.log(password, "password");

  const validateLoginForm = () => {
    let errors = {};

    if (!email.trim()) {
      errors.email = "email is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
    setErrorLogin(errors);
    return Object.keys(errors).length === 0;
  };
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoadingLogin(true);
    if (validateLoginForm()) {
      dispatch(setLogin({ data: { emailOrPhoneNumber: email, password } }));
    } else {
      console.log("Form has errors, please correct them");
      setLoadingLogin(false);
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
          className="col bg-white p-5 rounded d-flex flex-column align-items-center gap-2"
          style={{ width: "100%" }}
        >
          <h3 className="text-3xl font-bold">SIGN IN</h3>
          <p>Great to have you back!</p>
          <form
            action=""
            className="d-flex flex-column gap-2 w-100"
            onSubmit={submitHandler}
          >
            <div className="d-flex flex-column gap-1">
              <label htmlFor="email">Email or Phone Number</label>
              <input
                type="text"
                id="text"
                className="form-control"
                style={{
                  border: `${errorLogin.email && "1px solid red"}`,
                  borderRadius: `${errorLogin.email && "4px"}`,
                  background: `${errorLogin.email && "#FA807250"}`,
                }}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                style={{
                  border: `${errorLogin.password && "1px solid red"}`,
                  borderRadius: `${errorLogin.password && "4px"}`,
                  background: `${errorLogin.password && "#FA807250"}`,
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className="text-right">
              Forgot Password
            </a>
            <button type="submit" className="btn btn-warning btn-lg ">
              {loadingLogin ? "Loading..." : "Login"}
            </button>
          </form>
          <p>
            Don't have an Account? <a onClick={handleOpen3}>Sign Up</a>
          </p>
        </div>
      </div>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Register as
          </h3>
          <div className="row row-cols-1 row-cols-md-4 g-1">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
              <NavLink
                to={"/accounts/student"}
                style={{
                  border: "1px solid",
                  padding: "1rem",
                  backgroundColor: "#D7A022",
                  color: "white",
                  fontSize: "20px",
                  height: "20vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Student
              </NavLink>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 ">
              <NavLink
                to={"/accounts/instructor"}
                style={{
                  border: "1px solid",
                  padding: "1rem",
                  backgroundColor: "#D7A022",
                  color: "white",
                  fontSize: "20px",
                  height: "20vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Instructor
              </NavLink>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
              <NavLink
                to={"/accounts/tutor"}
                style={{
                  border: "1px solid",
                  padding: "1rem",
                  backgroundColor: "#D7A022",
                  color: "white",
                  fontSize: "20px",
                  height: "20vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Tutors
              </NavLink>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
