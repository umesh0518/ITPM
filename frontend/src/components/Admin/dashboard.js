import React, { Component } from "react";
import studentPayment from "../../images/studentPayment.png";
import income from "../../images/income.png";
import outcome from "../../images/outcomes.png";
import report from "../../images/report.png";
import calendar from "../../images/calendar.png";
import dashboard from "../../images/dashboard.png";

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
            <a href="/accountant/company-payment-incomes">
              <div className="card-d shadow p-3 mb-5 rounded">
                <h5>Company Incomes</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img src={income} height="100px" />
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="/accountant/company-payment-expenses">
              <div className="card-d shadow p-3 mb-5 rounded">
                <h5>Company Outcomes</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img src={outcome} height="100px" />
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
        </div>
      </div>
    );
  }
}

export default Dashboard;
