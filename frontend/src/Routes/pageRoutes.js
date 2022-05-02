import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../components/Home/homePage";
import Navbar from "../components/Home/navBar";
import Footer from "../components/Home/footer";

import Login from "../components/common/Login";
import Register from "../components/common/Register";
import Profile from "../components/common/Profile";
import AboutUs from "../components/Home/aboutUs";
import ContactUs from "../components/Home/contactUs";

//Student
import AddStudentPayment from "../components/Student/addStudentPayment";
import ViewStudentPayments from "../components/Student/viewStudentPayments";
import UpdateStudentPayment from "../components/Student/updateStudentPayment";
import ViewStudentNotices from "../components/Notice/StudentNotices";
import TakeClassMaterials from "../components/Student/TakeClassMaterials";

//Notices

import EnterNotices from "../components/Notice/EnterNotices";
import PrintNotices from "../components/Notice/RNoticePrint";
import TaskReport from "../components/Class/taskReport";

// //Course
import AddCourse from "../components/Course/addCourse";
// import UpdateCourse from "../Course/updateCourse";
// import ViewCourse from "../Course/viewCourse";

//Manager
import AccountantDashboard from "../components/Admin/dashboard";
import ViewStudentPayment from "../components/Admin/viewStudentPayment";
import AccountantCalender from "../components/Admin/calender";
import ReactPDF from "../components/Admin/reportPDF";

//Teacher

import CreateMaterial from "../components/Teacher/createMaterial";
import ViewUploadedMaterials from "../components/Teacher/viewUploadedMaterials";
import supervisorDashboard from "../components/Admin/supervisorDashboard";

import teacherTaskUpdate from "../components/Class/teacherUpdate";
import teacherTask from "../components/Class/teacher";
import teacherTaskList from "../components/Class/teacherTask";
import teachertaskteacher from "../components/Teacher/teacherTask";

import ViewApprovedMaterials from "../components/Teacher/viewApprovedMaterials";

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

            {/* ########### Student management ############ */}
            <Route path="/student/notices" component={ViewStudentNotices} />
            <Route
              path="/student/TakeClassMaterials"
              component={TakeClassMaterials}
            />
            <Route
              path="/student/payment/update/:id"
              component={UpdateStudentPayment}
            />
            <Route path="/student/add-payment" component={AddStudentPayment} />
            <Route path="/student/payment" component={ViewStudentPayments} />

            {/* ########### Notice ############ */}
            <Route path="/course/add-course" component={AddCourse} />
            {/* <Route path="/course/update/:id" component={UpdateCourse} /> */}
            <Route
              path="/studentManager/Print-Notices"
              component={PrintNotices}
            />
            <Route
              path="/studentManager/Enter-Notices"
              component={EnterNotices}
            />
            {/* ########### Admin ############ */}
            <Route
              path="/accountant/student-payment"
              component={ViewStudentPayment}
            />
            <Route path="/accountant/calender" component={AccountantCalender} />
            <Route path="/accountant/report" component={ReactPDF} />
            <Route path="/accountant/" component={AccountantDashboard} />

            {/* ########### Teacher  ############ */}
            <Route
              path="/teacher/view-approved-materials"
              component={ViewApprovedMaterials}
            />

            <Route
              path="/teacher/add-course-materials"
              component={CreateMaterial}
            />
            <Route
              path="/teacher/view-lesson-materials"
              component={ViewUploadedMaterials}
            />

            <Route path="/supervisor/" component={supervisorDashboard} />

            <Route path="/teacherTask/report" component={TaskReport} />
            <Route
              path="/teacherTaskUpdate/:id"
              component={teacherTaskUpdate}
            />
            <Route path="/teacherTask/" component={teacherTask} />
            <Route path="/teacherTaskList/" component={teacherTaskList} />
            <Route
              path="/teacherTaskListteacher/"
              component={teachertaskteacher}
            />
          </Switch>
        </section>
      </Router>
      <Footer />
    </div>
  );
}

export default PageRoutes;
