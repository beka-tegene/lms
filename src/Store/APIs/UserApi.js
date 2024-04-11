import axios from "axios";
import { toast } from "react-toastify";

export const getAllUser = async (data) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(
      `http://localhost:4500/api/v1/users/getuserById/${data.userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
    throw error;
  }
};

export const getAllUserCourse = async (data) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(
      `http://localhost:4500/api/v1/users/enrolled-courses/${data.userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
    throw error;
  }
};


export const getAllUserCourseById = async (data) => {
  console.log(data);
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(
      `http://localhost:4500/api/v1/users/courses/${data.courseId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
    throw error;
  }
};