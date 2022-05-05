import React, { Component } from "react";
import teacher from "../../images/img5.jpg";
import student from "../../images/img3.png";
import course from "../../images/img4.png";

class MenuCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container p-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col col-sm-12">
            <div className="card h-100">
              <img
                src={student}
                className="card-img-top"
                alt="..."
                height={400}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Students</b>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-sm-12">
            <div className="card h-100">
              <img
                src={course}
                className="card-img-top"
                alt="..."
                height={400}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Courses</b>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-sm-12">
            <div className="card h-100">
              <img
                src={teacher}
                className="card-img-top"
                alt="..."
                height={400}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Teachers</b>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCard;
