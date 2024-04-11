import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  outputCourses: [],
  InputEnrollCourse: [],
  outputPayment: [],
  InputUpdateLessonProgress: [],
  outputPaymentWithSantim: [],
};

const CourseHook = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {
    getCourseData(state) {
      state.isLoading = false;
    },
    getCourse(state, action) {
      state.outputCourses = action.payload;
    },
    setEnrollCourseData(state) {},
    setEnrollCourse(state, action) {
      const newData = action.payload;
      state.InputEnrollCourse.push({
        data: newData.data,
      });
    },
    getPaymentData(state) {},
    getPayment(state, action) {
      state.outputPayment = action.payload;
    },
    setUpdateLessonProgressData(state) {},
    setUpdateLessonProgress(state, action) {
      const newData = action.payload;
      state.InputUpdateLessonProgress.push({
        courseId: newData.courseId,
        lessonId: newData.lessonId,
        progress: newData.progress,
        time: newData.time,
      });
    },
    getPaymentWithSantimData(state) {},
    getPaymentWithSantim(state, action) {
      state.outputPaymentWithSantim = action.payload;
    },
  },
});

export const {
  getCourseData,
  getCourse,
  setEnrollCourse,
  setEnrollCourseData,
  getPayment,
  getPaymentData,
  setUpdateLessonProgressData,
  setUpdateLessonProgress,
  getPaymentWithSantimData,
  getPaymentWithSantim,
} = CourseHook.actions;

export default CourseHook.reducer;
