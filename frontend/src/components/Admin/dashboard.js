import React, { Component } from "react";
import studentPayment from "../../images/studentPayment.png";
import course from "../../images/img4.png";
import report from "../../images/report.png";
import calendar from "../../images/calendar.png";
import dashboard from "../../images/dashboard.png";
import notice from "../../images/dashboard.png";

class Dashboard extends Component {
  render() {
    return (
      <div className="admin-container">
        <br />
        <div className="dashboard-image">
          <img src={dashboard} />
        </div>
        <h1>Dashboard</h1>
        <div className="row row-cols-1 p-3 row-cols-md-3 g-4">
          <br />
          <div className="col">
            <a href="/accountant/student-payment">
              <div className="card-d shadow p-3 mb-5 rounded">
                <h5>Student Payments</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img src={studentPayment} height="100px" />
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="/teacherTaskList/">
              <div className="card-d shadow p-3 mb-5 rounded">
                <h5>Courses</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img src={course} height="100px" />
                </div>
              </div>
            </a>
          </div>

          <div className="col">
            <a href="/accountant/report">
              <div className="card-d shadow p-3 rounded">
                <h5>Financial Report</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img src={report} height="100px" />
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="/accountant/calender">
              <div className="card-d shadow p-3 rounded">
                <h5>Calender</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img src={calendar} height="100px" />
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="/notices/notice">
              <div className="card-d shadow p-3 rounded">
                <h5>Notices</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img src={notice} height="100px" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
