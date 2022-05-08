import React, { useState, useEffect } from "react";
import axios from "axios";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import spinner from "../../images/spinner.gif";

const TeacherTaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [setError] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["tasktitle", "implevel", "teacherid"]);
  const [filterParam] = useState(["All"]);
  const [values, setValues] = useState({
    loading: false,
  });
  const { loading } = values;

  const search = () => {
    return taskList.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  };

  const getTasks = () => {
    setValues({ ...values, loading: true });
    return fetch(`http://localhost:8081/notices/notice`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const loadTask = () => {
    getTasks().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setValues({ ...values, loading: false });
        console.log(data[0].date);
        setTaskList(data);
      }
    });
  };

  const deleteTask = (e, id) => {
    const r = window.confirm("Do you really want to delete this task ?");
    if (r == true) {
      axios
        .delete(`http://localhost:8081/notices/notice/${id}`)
        .then((response) => {
          loadTask();
        });
    }
  };

  useEffect(() => {
    loadTask();
  }, []);



  return (
    <div className="background-st-ac p-3">
      <div className="card shadow p-3 mb-4 bg-body rounded">
        <div className="row g-2">
          <div className="col-md">
            <h1>Notice list</h1>
            <br />
          </div>
          <div className="col-md">
            <div className="mb-3 mt-2 d-md-flex justify-content-md-end">
              <Link to={`/notices/noticeReport`}>
                <button className="btn btn-outline-success">
                  <b>Report</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="search-wrapper">
          <div className="row g-2">
            <div className="col-md">
              <Link to={`/notice/add-notice`}>
                <button className="button-blue button2-purple">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fas fa-plus-circle">
                    &nbsp;&nbsp;&nbsp;&nbsp;Add New Record
                  </i>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>
              </Link>
            </div>
            <div className="col-md">
              <div className="row">
                <div className="justify-content-md-end">
                  <div className="input-group justify-content-md-end">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search by notice id"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                    />

                    <span className="input-group-text">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          {search().map((c, i) => (
            <div className="card text-center mt-5">
              <div className="card-header">{c.validtill}</div>
              <div className="card-body">
                <h5 className="card-title">{c.tasktitle}</h5>
                <p className="card-text">{c.taskdescription}</p>
              </div>
              <div className="card-footer text-muted">
                <Link to={`/notices/notice/${c._id}`}>
                  <button className="btn btn-outline-warning me-md-2">
                    Edit&nbsp;
                    <i className="fas fa-edit"></i>
                  </button>
                </Link>

                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => deleteTask(e, c._id)}
                >
                  Delete&nbsp;
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherTaskList;
