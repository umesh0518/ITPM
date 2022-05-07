import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import validationReport from "./validationReport";

const UpdateStudentPayment = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    contactNo: "",
    studentID: "",
    depositedAmount: 0,
    depositedDate: "",
    bank: "",
    branch: "",
    paymentSlip: "",
    type: "",
    classes: "",
    teacher: "",
    loading: false,
    error: "",
    createdPayment: "",
    redirectTo: false,
    formData: "",
  });

  const {
    name,
    contactNo,
    studentID,
    depositedAmount,
    depositedDate,
    bank,
    branch,
    type,
    classes,
    teacher,
    error,
    loading,
    redirectTo,
    formData,
  } = values;

  //for errors
  const [errors, setErrors] = useState({});
  //if data is submitted
  const [dataIsSubmitted, setDataIsSubmitted] = useState(false);

  useEffect(() => {
    init(match.params.id);
  }, []);

  const updatePayment = (id, payment) => {
    return fetch(`http://localhost:8081/student-payment/update/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
      },
      body: payment,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const getOnePayment = (id) => {
    return fetch(`http://localhost:8081/student-payment/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const init = (id) => {
    getOnePayment(id).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        //populate the state
        setValues({
          ...values,
          name: data.name,
          contactNo: data.contactNo,
          studentID: data.studentID,
          depositedAmount: data.depositedAmount,
          depositedDate: data.depositedDate,
          bank: data.bank,
          branch: data.branch,
          type: data.type,
          classes: data.classes,
          teacher: data.teacher,
          formData: new FormData(),
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value =
      name === "paymentSlip" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  // After finishing update redirect to list
  const redirectEditor = () => {
    if (redirectTo) {
      if (!error) {
        return <Redirect to="/student/payment" />;
      }
    }
  };
  // after validation -- send data to backend

  const sendDataforEdit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    setDataIsSubmitted(true);
    setErrors(validationReport(values));
    console.log(errors.name);
    if (
      values.name &&
      values.studentID &&
      values.contactNo &&
      values.classes &&
      values.teacher &&
      values.branch &&
      values.bank &&
      values.depositedDate &&
      values.depositedAmount
    ) {
      clickSubmit();
    }
  };

  // update the details
  const clickSubmit = (event) => {
    // event.preventDefault();
    // setValues({ ...values, error: "", loading: true });

    updatePayment(match.params.id, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          contactNo: 0,
          studentID: "",
          depositedAmount: 0,
          depositedDate: "",
          bank: "",
          branch: "",
          paymentSlip: "",
          type: "",
          classes: "",
          teacher: "",
          loading: true,
          error: false,
          redirectTo: true,
          createdPayment: data.name,
        });
      }
    });
  };

  return (
    <div className="background">
      <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
        <div className="p-3">
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Your Payment</h1>
          <div className="p-3">
            <form className="row g-3" onSubmit={sendDataforEdit}>
              <h5>Student Details</h5>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange("name")}
                  />
                </div>
                {dataIsSubmitted && !values.name ? (
                  <div className="alert alert-danger">{errors.name}</div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label htmlFor="contactNo" className="form-label">
                  Contact Number
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-phone"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNo"
                    name="contactNo"
                    value={contactNo}
                    onChange={handleChange("contactNo")}
                  />
                </div>
                {dataIsSubmitted && !values.contactNo ? (
                  <div className="alert alert-danger">{errors.contactNo}</div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label htmlFor="studentID" className="form-label">
                  Student ID
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-id-card-alt"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="studentID"
                    name="studentID"
                    value={studentID}
                    onChange={handleChange("studentID")}
                  />
                </div>
                {dataIsSubmitted && !values.studentID ? (
                  <div className="alert alert-danger">{errors.studentID}</div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label htmlFor="classes" className="form-label">
                  Class
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-book-reader"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="classes"
                    name="classes"
                    value={classes}
                    onChange={handleChange("classes")}
                  />
                </div>
                {dataIsSubmitted && !values.classes ? (
                  <div className="alert alert-danger">{errors.classes}</div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label htmlFor="teacher" className="form-label">
                  Name of teacher
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="teacher"
                    name="teacher"
                    value={teacher}
                    onChange={handleChange("teacher")}
                  />
                </div>
                {dataIsSubmitted && !values.teacher ? (
                  <div className="alert alert-danger">{errors.teacher}</div>
                ) : null}
              </div>

              <h5>Payment Details</h5>
              <div className="col-md-6">
                <label htmlFor="type" className="form-label">
                  Payment type
                </label>
                <select
                  className="form-select"
                  onChange={handleChange("type")}
                  id="type"
                  required="true"
                  value={type}
                  name="type"
                >
                  <option value="select">---Select a Payment Type---</option>
                  <option value="Registration payment">
                    Registration payment
                  </option>
                  <option value="Monthly Fee">Monthly Fee</option>
                </select>

                {dataIsSubmitted && !values.type ? (
                  <div className="alert alert-danger">{errors.type}</div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label htmlFor="depositedAmount" className="form-label">
                  Deposited Amount (Rs.)
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-dollar-sign"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="depositedAmount"
                    name="depositedAmount"
                    value={depositedAmount}
                    onChange={handleChange("depositedAmount")}
                  />
                </div>
                {dataIsSubmitted && !values.depositedAmount ? (
                  <div className="alert alert-danger">
                    {errors.depositedAmount}
                  </div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label htmlFor="depositedDate" className="form-label">
                  Deposited Date
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="far fa-calendar-alt"></i>
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="depositedDate"
                    name="depositedDate"
                    value={depositedDate}
                    onChange={handleChange("depositedDate")}
                  />
                </div>
                {dataIsSubmitted && !values.depositedDate ? (
                  <div className="alert alert-danger">
                    {errors.depositedDate}
                  </div>
                ) : null}
              </div>

              <div className="col-md-6">
                <label htmlFor="bank" className="form-label">
                  Bank
                </label>
                <select
                  className="form-select"
                  onChange={handleChange("bank")}
                  id="bank"
                  required="true"
                  value={bank}
                  name="bank"
                >
                  <option value="select">---Select the bank---</option>
                  <option value="BOC">BOC</option>
                  <option value="People's bank">People's bank</option>
                  <option value="Commercial bank">Commercial bank</option>
                  <option value="NDB">NDB</option>
                </select>
                {dataIsSubmitted && !values.bank ? (
                  <div className="alert alert-danger">{errors.bank}</div>
                ) : null}
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="branch" className="form-label">
                  Branch
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-code-branch"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="branch"
                    name="branch"
                    value={branch}
                    onChange={handleChange("branch")}
                  />
                </div>
                {dataIsSubmitted && !values.branch ? (
                  <div className="alert alert-danger">{errors.branch}</div>
                ) : null}
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="paymentSlip" className="form-label">
                  Payment Slip (Maximum file size 10MB)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="paymentSlip"
                  name="paymentSlip"
                  onChange={handleChange("paymentSlip")}
                  accept="image/*"
                />
              </div>
              <button className="button-purple button2-purple">
                Update Payment
              </button>
            </form>
            {redirectEditor()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudentPayment;
