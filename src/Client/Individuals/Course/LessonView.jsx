import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { FaEyeSlash } from "react-icons/fa6";
import {
  getCourseData,
  setUpdateLessonProgress,
} from "../../../Store/Hooks/CourseHook";
import {
  getUserCourseByIdData,
  getUserData,
} from "../../../Store/Hooks/UserHook";
import { Box, CircularProgress, Typography } from "@mui/material";
import { MdPanoramaFishEye, MdRemoveRedEye } from "react-icons/md";

function decrypt(text) {
  return atob(text);
}
const LessonView = () => {
  const [lessonId, setLesson] = useState();
  const videoRef = useRef();
  const [started, setStarted] = useState(false);
  const [durations, setDuration] = useState(0);

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

  const { pathname } = useLocation();
  const { slug } = useParams();
  const decryptedId = decrypt(slug);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Course " + decryptedId;
  }, [pathname]);
  const dispatch = useDispatch();
  const usersById = useSelector(
    (state) => state.UserHook.OutputUserCoursesById
  );
  useEffect(() => {
    dispatch(getUserCourseByIdData({ data: { courseId: decryptedId } }));
  }, []);

  console.log(usersById);

  const [viewCourse, setViewCourse] = useState({
    file: "",
    name: "",
  });
  const handleVideoDurationChange = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      setStarted(true);
      setDuration(duration);
    }
  };
  const [current, setCurrentTime] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      const updateProgress = () => {
        setCurrentTime(videoRef.current.currentTime);
      };

      const interval = setInterval(updateProgress, 60000);

      videoRef.current.addEventListener("timeupdate", updateProgress);

      return () => {
        clearInterval(interval);
        if (videoRef.current) {
          videoRef.current.removeEventListener("timeupdate", updateProgress);
        }
      };
    }
  }, [started]);
  let per = Math.floor((current / durations) * 100) || 0;

  useEffect(() => {
    if (per > 0) {
      dispatch(
        setUpdateLessonProgress({
          data: {
            lessonId,
            courseId: decryptedId,
            progress: per,
            lessonTime: current,
          },
        })
      );
    }
  }, [per]);

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  console.log(viewCourse, "lesson file");
  return (
    <div>
      {usersById ? (
        <div
          className="tution"
          style={{ marginTop: "4rem", marginBottom: "4rem" }}
        >
          <div className="container-fluid full__width__padding">
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={usersById?.progress}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >
                    {`${Math.round(usersById?.progress)}%`}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h4">
                {usersById?.course?.courseName}
              </Typography>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12"
                data-aos="fade-up"
              >
                <div
                  className="accordion content__cirriculum__wrap"
                  id="accordionExample"
                >
                  {usersById?.course?.chapter?.map((item, i) => (
                    <div className="accordion-item" key={i}>
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {item?.LessonName}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {item?.LessonFile?.map((lessons, index) => (
                            <div className="scc__wrap" key={index}>
                              <div className="scc__info">
                                <i className="icofont-video-alt" />
                                <h5>
                                  {" "}
                                  <a
                                    onClick={() => {
                                      setViewCourse({
                                        file: lessons.LessonUrl[0],
                                        name: lessons.LessonType[0],
                                      });
                                      setLesson(lessons._id);
                                    }}
                                  >
                                    <span
                                      style={{
                                        color:
                                          usersById?.lesson[index]?.progress <=
                                            100 && "gray",
                                      }}
                                    >
                                      {lessons?.LessonType[0].slice(0, 20)}...
                                    </span>
                                  </a>
                                </h5>
                              </div>
                              <div className="scc__meta">
                                <strong>3.27 </strong>
                                <a
                                  onClick={() => {
                                    setViewCourse({
                                      file: lessons.LessonUrl,
                                      name: lessons.LessonType,
                                    });
                                  }}
                                >
                                  <span className="question point">
                                    {viewCourse ? (
                                      <MdRemoveRedEye className="eye_icon" />
                                    ) : (
                                      <FaEyeSlash className="eye_icon" />
                                    )}
                                    Preview
                                  </span>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12"
                data-aos="fade-up"
              >
                <div className="lesson__content__main ">
                  {viewCourse && (
                    <>
                      <div className="plyr__video-embed rbtplayer">
                        {viewCourse.name.endsWith(".mp4") ||
                        viewCourse.name.endsWith(".avi") ||
                        viewCourse.name.endsWith(".mov") ? (
                          <div>
                            <video
                              ref={videoRef}
                              src={viewCourse.file}
                              onLoadedMetadata={handleVideoDurationChange}
                              autoPlay
                              controls
                              muted={false}
                              width="100%"
                              height="500"
                              poster={usersById?.course?.coverPage[0]}
                            ></video>
                          </div>
                        ) : (
                          <div>
                            {viewCourse.name.endsWith(".pdf") && (
                              <>
                                <iframe
                                  src={viewCourse.file}
                                  width="100%"
                                  height="500"
                                  allow="autoplay"
                                  type="application/pdf"
                                />
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>If You want this course enroll this course first</p>
      )}
    </div>
  );
};

export default LessonView;
