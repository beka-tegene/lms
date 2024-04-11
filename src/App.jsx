import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Page/Auth/SignIn";
import Student_SignUp from "./Page/Auth/Student_SignUp";
import Instructor_SignUp from "./Page/Auth/Instructor_SignUp";
import Tutor_SignUp from "./Page/Auth/Tutor_SignUp";
import Landing from "./Page/Client/Individuals/Landing";
import Course from "./Page/Client/Individuals/Course";
import About from "./Page/Client/Individuals/About";
import Contact from "./Page/Client/Individuals/Contact";
import SingleCourse from "./Page/Client/Individuals/SingleCourse";
import Lesson from "./Page/Client/Individuals/Lesson";
import Profile from "./Page/Client/Individuals/Profile";
import ComingSoon from "./Components/ComingSoon";
import Check from "./Page/Client/Individuals/Check";
import Instructor from "./Page/Client/Individuals/Instructor";
import Tutor from "./Page/Client/Individuals/Tutor";

const router = createBrowserRouter([
  {
    path: "/accounts/login",
    element: <SignIn />,
  },
  {
    path: "/accounts/student",
    element: <Student_SignUp />,
  },
  {
    path: "/accounts/instructor",
    element: <Instructor_SignUp />,
  },
  {
    path: "/accounts/tutor",
    element: <Tutor_SignUp />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/contactpage",
    element: <Contact />,
  },
  {
    path: "/courses",
    element: <Course />,
  },
  {
    path: "/CourseDetail/:slug",
    element: <SingleCourse />,
  },
  {
    path: "lesson/:slug",
    element: <Lesson />,
  },
  {
    path: "account/profile",
    element: <Profile />,
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
  {
    path: "/checkout/:slug",
    element: <Check />,
  },
  {
    path: "/find/instructor",
    element: <Instructor />,
  },
  {
    path: "/find/tutor",
    element: <Tutor />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
