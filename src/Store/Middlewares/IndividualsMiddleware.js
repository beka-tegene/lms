import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { Login, StudentRegister } from "../APIs/AuthApi";
import { setLoginData, setRegisterData } from "../Hooks/AuthHook";
import {
  getAllCourse,
  setCourseEnroll,
  setPayment,
  setPaymentSantim,
  updateLessonProgress,
} from "../APIs/CourseApi";
import {
  getCourse,
  getPaymentData,
  getPaymentWithSantimData,
  setEnrollCourseData,
  setUpdateLessonProgressData,
} from "../Hooks/CourseHook";
import { getAllUser, getAllUserCourse, getAllUserCourseById } from "../APIs/UserApi";
import { getUser, getUserCourse, getUserCourseById } from "../Hooks/UserHook";

export function* watchLMS() {
  yield takeLatest("auth/setLogin", fetchSetLogin);
  yield takeLatest("auth/setRegister", fetchSetRegister);

  yield takeLatest("course/getCourseData", fetchGetCourse);
  yield takeLatest("course/setEnrollCourse", fetchSetEnrollCourse);
  yield takeLatest("course/getPayment", fetchGetPayment);
  yield takeLatest("course/getPaymentWithSantim", fetchGetPaymentSantim);
  yield takeLatest(
    "course/setUpdateLessonProgress",
    fetchSetUpdateLessonProgress
  );

  yield takeLatest("user/getUserData", fetchGetUser);
  yield takeLatest("user/getUserCourseData", fetchGetUserCourse);
  yield takeLatest("user/getUserCourseByIdData", fetchGetUserCourseById);
}

function* fetchSetLogin(action) {
  try {
    yield call(Login, action.payload.data);
    yield setLoginData();
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchSetRegister(action) {
  try {
    yield call(StudentRegister, action.payload.data);
    yield setRegisterData();
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchGetCourse() {
  try {
    const getData = yield call(getAllCourse);
    yield put(getCourse(getData));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchSetEnrollCourse(action) {
  try {
    yield call(setCourseEnroll, action.payload.data);
    yield setEnrollCourseData();
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchGetPayment(action) {
  try {
    yield call(setPayment, action.payload.data);
    yield getPaymentData();
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchGetPaymentSantim() {
  try {
    yield call(setPaymentSantim);
    yield getPaymentWithSantimData();
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchGetUser(action) {
  try {
    const getData = yield call(getAllUser, action.payload.data);
    yield put(getUser(getData));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchSetUpdateLessonProgress(action) {
  try {
    yield call(updateLessonProgress, action.payload.data);
    yield setUpdateLessonProgressData();
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchGetUserCourse(action) {
  try {
    const getData = yield call(getAllUserCourse, action.payload.data);
    yield put(getUserCourse(getData));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchGetUserCourseById(action) {
  try {
    const getData = yield call(getAllUserCourseById, action.payload.data);
    yield put(getUserCourseById(getData));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}