import React, { useEffect, useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [values, setValues] = useState({
    name: "",
    duration: "",
    teacher: "",
    description: "",
  });

  const { name, duration, teacher, description } = values;

  useEffect(() => {
    setValues({ ...values });
  }, []);

  const handleChange = (name) => (event) => {
    const value =
      name === "paymentSlip" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  const createCourse = (data) => {
    const payload = {
      name: data.name,
      duration: data.duration,
      teacher: data.teacher,
      description: data.description,
    };
    axios
      .post("http://localhost:8081/course/create", payload)
      .then((response) => {
        alert("created successfully");
        //this.props.history.push('/workshop-attendee');
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    createCourse({ ...values });
  };

  return (
    <div className="background">
      <div
        className="container mt-4 shadow p-3 mb-5 bg-body rounded needs-validation"
        novalidate
      >
        <div>
          <center>
            <h1 data-testid="title-field-add-student-payment">Add Course</h1>
          </center>
          <div className="p-3">
            <form
              className="row g-3"
              data-testid="form-tag-add-student-payment"
              onSubmit={clickSubmit}
            >
              <h5>Course Details</h5>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Course Name
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-file"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    data-testid="student-name-field"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange("name")}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="contactNo" className="form-label">
                  Duration
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-clock"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    data-testid="student-duration-field"
                    id="duration"
                    name="duration"
                    value={duration}
                    onChange={handleChange("duration")}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="studentID" className="form-label">
                  Teacher's Name
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-id-card-alt"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    data-testid="student-id-field"
                    id="teacher"
                    name="teacher"
                    value={teacher}
                    onChange={handleChange("teacher")}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 ">
                <label htmlFor="classes" className="form-label">
                  Description
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-book-reader"></i>
                  </span>
                  <textarea
                    type="text"
                    rows="5"
                    className="form-control w-25"
                    data-testid="class-name-field"
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleChange("description")}
                    required
                  />
                </div>
              </div>

              <button
                data-testid="submit-button"
                className="button-purple button2-purple"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
