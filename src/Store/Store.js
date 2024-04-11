import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import AuthHook from "./Hooks/AuthHook";
import { watchLMS } from "./Middlewares/IndividualsMiddleware";
import CourseHook from "./Hooks/CourseHook";
import UserHook from "./Hooks/UserHook";


const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    AuthHook: AuthHook,
    CourseHook:CourseHook,
    UserHook:UserHook
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchLMS);

export default Store;