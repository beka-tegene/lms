// https://lms-api.purposeblacketh.com
import axios from "axios";
import { toast } from "react-toastify";
import { setLogin, setLoginData } from "../Hooks/AuthHook";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
export const Login = async (data) => {
  console.log(data);
  try {
    // axios.defaults.withCredentials = true;
    setLogin();
    const response = await axios.post(
      "http://localhost:4500/api/v1/auth/login",
      data
    );
    if (response.status === 400) {
      toast.error(response.data.message);
    }
    if (response.status === 200) {
      console.log(response);
      Cookies.set("token", response.data.token);
      const token = response.data.token;
      const decodedToken = jwt_decode(token);
      const role = decodedToken.role;
      console.log(decodedToken);
      if (role === "user") {
        window.location.href = "/";
      } else {
        window.location.href = "/";
      }
    }
    setLoginData();
  } catch (error) {
    toast.error(error.response.data.error);
    setLoginData();
  }
};

export const StudentRegister = async (data) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.post(
      "http://localhost:4500/api/v1/auth/register",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 400) {
      toast.error(response.data.message);
    }
    if (response.status === 201) {
      window.location.href = "/accounts/login";
    }
  } catch (error) {
    toast.error(error.response.data.error);
  }
};
