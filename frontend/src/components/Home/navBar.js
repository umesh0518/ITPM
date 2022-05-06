import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

import img1 from "../../images/logo.gif";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showStudentBoard, setshowStudentBoard] = useState(false);
  const [showTeacherBoard, setshowTeacherBoard] = useState(false);
  const [showManagerBoard, setshowManagerBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setshowStudentBoard(user.roles.includes("ROLE_STUDENT"));
      setshowTeacherBoard(user.roles.includes("ROLE_TEACHER"));
      setshowManagerBoard(user.roles.includes("ROLE_MANAGER"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#FFFF00" };
    } else {
      return { color: "#fff" };
    }
  };

  return (
    <div data-testid="nav-1 row">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <div className="navbar-brand">
            <a className="navbar-brand" href="/">
              &nbsp;
              <img
                src={img1}
                height="40px"
                alt="company text img"
                className="m-0"
              />
            </a>
          </div>

          <button
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <div className="navbar-nav mr-auto">
                {/* Teacher nav */}
                {showTeacherBoard && (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/teacher/assignmentTask")}
                        to="/teacher/assignmentTask"
                      >
                        Assignments
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/teacher/assignment")}
                        to="/teacher/assignment"
                      >
                        Upload Assignments
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/teacher/assignmentReport")}
                        to="/teacher/assignmentReport"
                      >
                        Assignment Report
                      </Link>
                    </li>
                  </>
                )}
                {/* Student nav */}
                {showStudentBoard && (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/student/add-payment")}
                        to="/student/add-payment"
                      >
                        Payment Registration
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/student/payment")}
                        to="/student/payment"
                      >
                        My Payments
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/notices/notice")}
                        to="/notices/notice"
                      >
                        Student Notices
                      </Link>
                    </li>
                  </>
                )}

                {/* Manager nav / class nav*/}
                {showManagerBoard && (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/accountant/")}
                        to="/accountant/"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/accountant/student-payment")}
                        to="/accountant/student-payment"
                      >
                        Student Payment
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/accountant/report")}
                        to="/accountant/report"
                      >
                        Financial Report
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/teacherTaskList/")}
                        to="/teacherTaskList/"
                      >
                        Course
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/accountant/calender")}
                        to="/accountant/calender"
                      >
                        Calender
                      </Link>
                    </li>
                  </>
                )}

                {/* Admin nav */}
                {showAdminBoard && (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/supervisor/")}
                        to="/supervisor/"
                      >
                        My Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/teacher/view-registration")}
                        to="/teacher/view-registration"
                      >
                        Current Registration
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/supervisor/view-pending-teachers"
                        )}
                        to="/supervisor/view-pending-teachers"
                      >
                        Pending Teachers
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/teacher/view-approved-registration"
                        )}
                        to="/teacher/view-approved-registration"
                      >
                        Permanent Teachers
                      </Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/teacher/profile")}
                        to="/teacher/profile"
                      >
                        New Profile
                      </Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/teacher/view-profile")}
                        to="/teacher/view-profile"
                      >
                        Teacher Profiles
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/teacher/view-lesson-materials"
                        )}
                        to="/teacher/view-lesson-materials"
                      >
                        Lesson Materials
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(history, "/supervisor/report")}
                        to="/supervisor/report"
                      >
                        Registration Summary
                      </Link>
                    </li> */}
                    <li className="nav-item">{/* link */}</li>
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/studentManager/view-feedback"
                        )}
                        to="/studentManager/view-feedback"
                      >
                        Manage Feedbacks
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/studentManager/Enter-Notices"
                        )}
                        to="/studentManager/Enter-Notices"
                      >
                        Manage Notices
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/studentManager/View-Students-Details"
                        )}
                        to="/studentManager/View-Students-Details"
                      >
                        Current Students
                      </Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/studentManager/Take-Students-Details"
                        )}
                        to="/studentManager/Take-Students-Details"
                      >
                        Student Report
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={isActive(
                          history,
                          "/studentManager/Print-Notices"
                        )}
                        to="/studentManager/Print-Notices"
                      >
                        Print Notices
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <center>
                  <Link
                    to={"/profile"}
                    style={isActive(history, "/profile")}
                    className="nav-link mt-1 "
                  >
                    <b>{currentUser.username}</b>
                  </Link>
                </center>

                <a
                  href="/login"
                  style={isActive(history, "/login")}
                  className="nav-link mt-0"
                  onClick={logOut}
                >
                  <button className="button-signUp button2-signup">
                    LogOut
                  </button>
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              {/* General nav */}
              <li className="nav-item">
                <Link
                  to={"/"}
                  style={isActive(history, "/")}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/aboutUs"}
                  style={isActive(history, "/aboutUs")}
                  className="nav-link"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/teacher/complete-registration")}
                  to="/teacher/complete-registration"
                >
                  Registration Status
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/student/notices")}
                  to={"/student/notices"}
                >
                  Notices
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/contactUs"}
                  style={isActive(history, "/contactUs")}
                  className="nav-link"
                >
                  Contact Us &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/login"}
                  style={isActive(history, "/login")}
                  className="nav-link"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/register"}
                  style={isActive(history, "/register")}
                  className="nav-link"
                >
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
