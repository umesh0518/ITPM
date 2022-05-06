import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// common
import HomePage from "../components/Home/homePage";
import Navbar from "../components/Home/navBar";
import Footer from "../components/Home/footer";

import Login from "../components/common/Login";
import Register from "../components/common/Register";
import Profile from "../components/common/Profile";
import AboutUs from "../components/Home/aboutUs";
import ContactUs from "../components/Home/contactUs";

//admin
import AccountantDashboard from "../components/Admin/dashboard";
import ViewStudentPayment from "../components/Admin/viewStudentPayment";
import AccountantCalender from "../components/Admin/calender";
import ReactPDF from "../components/Admin/reportPDF";

//Student
import AddStudentPayment from "../components/Student/addStudentPayment";
import ViewStudentPayments from "../components/Student/viewStudentPayments";
import UpdateStudentPayment from "../components/Student/updateStudentPayment";
// import TakeClassMaterials from "../components/Student/TakeClassMaterials";

//Notices
import NoticeUpdate from "../components/Notice/noticeUpdate";
import CreateNotice from "../components/Notice/CreateNotice";
import NoticeList from "../components/Notice/allNotice";
import NoticeReport from "../components/Notice/noticeReport";

//Course
import teacherTaskUpdate from "../components/Course/courseUpdate";
import teacherTask from "../components/Course/courseCreate";
import teacherTaskList from "../components/Course/allCourse";
import TaskReport from "../components/Course/courseReport";

//Teacher
import AssignmentUpdate from "../components/Teacher/assignmentUpdate";
import Assignment from "../components/Teacher/createAssignment";
import AssignmentList from "../components/Teacher/allAssignment";
import AssignmentReport from "../components/Teacher/assignmentReport";

function PageRoutes() {
  return (
    <div>
      <Router>
        <Navbar />
        <section className="content">
          <Switch>
            {/* ########### common parts ############ */}
            <Route path="/" component={HomePage} exact />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />

            {/* ########### Student ############ */}

            <Route
              path="/student/payment/update/:id"
              component={UpdateStudentPayment}
            />
            <Route path="/student/add-payment" component={AddStudentPayment} />
            <Route path="/student/payment" component={ViewStudentPayments} />

            {/* ########### student Admin ############ */}
            <Route
              path="/accountant/student-payment"
              component={ViewStudentPayment}
            />
            <Route path="/accountant/calender" component={AccountantCalender} />
            <Route path="/accountant/report" component={ReactPDF} />
            <Route path="/accountant/" component={AccountantDashboard} />

            {/* ########### Course  ############ */}
            <Route path="/teacherTask/report" component={TaskReport} />
            <Route
              path="/teacherTaskUpdate/:id"
              component={teacherTaskUpdate}
            />
            <Route path="/teacherTask/" component={teacherTask} />
            <Route path="/teacherTaskList/" component={teacherTaskList} />

            {/* ######## teacher assignment ############ */}
            <Route path="/teacher/assignment" component={Assignment} />
            <Route
              path="/teacher/assignmentUpdate/:id"
              component={AssignmentUpdate}
            />
            <Route path="/teacher/assignmentTask" component={AssignmentList} />

            <Route
              path="/teacher/assignmentReport"
              component={AssignmentReport}
            />

            {/* ############# notice new ############# */}
            <Route path="/notice/add-notice" component={CreateNotice} />
            <Route path="/notices/notice/:id" component={NoticeUpdate} />
            <Route path="/notices/notice" component={NoticeList} />

            <Route path="/notices/noticeReport" component={NoticeReport} />
          </Switch>
        </section>
      </Router>
      <Footer />
    </div>
  );
}

export default PageRoutes;
