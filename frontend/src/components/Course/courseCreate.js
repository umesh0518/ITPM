import React, { useEffect, useState } from "react";
import my from "../../images/paymentForm.png";
import axios from "axios";

const TaskTeacher = () => {
  const [state, setState] = useState({
    tasktitle: "",
    taskdescription: "",
    teacherid: "",
    implevel: "",
    validtill: "",
    loading: false,
    error: "",
  });

  const {
    tasktitle,
    taskdescription,
    teacherid,
    implevel,
    validtill,
    loading,
  } = state;

  const [content, setContent] = useState("");

  const handleContent = (event) => {
    console.log(event);
    setContent(event);
  };

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const clickSubmit = (payment) => {
    payment.preventDefault();
    axios
      .post(
        `http://localhost:8081/teacher-task/createTeacherTask`,
        { tasktitle, taskdescription, teacherid, implevel, validtill },
        {
          headers: {},
        }
      )
      .then((response) => {
        //empty the state
        setState({
          ...state,
          tasktitle: "",
          taskdescription: "",
          teacherid: "",
          implevel: "",
          validtill: "",
          loading: true,
          error: "",
        });
        setContent("");
        window.location.href = "/teacherTaskList/";
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  const showLoading = () =>
    loading && (
      <div aria-live="polite" aria-atomic="true" className="position-relative">
        <div className="toast-container position-absolute top-0 end-0 p-3">
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <strong className="me-auto">&nbsp;&nbsp;Loading</strong>
              <small className="text-muted">just now</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="background">
      <img src={my} />
      {showLoading()}
      <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
        <div>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Teacher Task</h1>
          <div className="p-3">
            <form className="row g-3" onSubmit={clickSubmit}>
              <h5>Course Detail</h5>
              <div className="col-12">
                <label htmlFor="taskTitle" className="form-label">
                  Course Name
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-id-card-alt"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="taskTitle"
                    name="taskTitle"
                    value={tasktitle}
                    onChange={handleChange("tasktitle")}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="taskDescription" className="form-label">
                  Description
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="taskDescription"
                    name="taskDescription"
                    value={taskdescription}
                    onChange={handleChange("taskdescription")}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="teacherId" className="form-label">
                  Teacher ID
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="teacherId"
                    name="teacherId"
                    value={teacherid}
                    onChange={handleChange("teacherid")}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="teacherId" className="form-label">
                  Duration
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="type"
                    name="type"
                    value={implevel}
                    onChange={handleChange("implevel")}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="validTill" className="form-label">
                  Start Date
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="far fa-calendar-alt"></i>
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="validTill"
                    name="validTill"
                    value={validtill}
                    onChange={handleChange("validtill")}
                    required
                  />
                </div>
              </div>
              <button className="button-blue button2-purple">
                Submit Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTeacher;
