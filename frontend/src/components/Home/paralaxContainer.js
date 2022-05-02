import React, { Component } from "react";
import image1 from "../../images/s3.png";

import { Link } from "react-router-dom";

class ParalaxContainer extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="parallax" style={{ backgroundImage: image1 }}>
          <div
            className="parallax-container"
            style={{ height: "500px" }}
            align="center"
          >
            <div className="parallax-container-inner">
              <h2 style={{ color: "white" }}>SMS Welcomes You</h2>
              <Link to={`/register`}>
                <button type="button" class="btn btn-success btn-lg">
                  <b>Sign Up</b>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="parallax"></div>
      </div>
    );
  }
}

export default ParalaxContainer;
