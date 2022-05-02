import React, { Component } from "react";
import img from "../../images/ab2.png";
import img1 from "../../images/ab1.png";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
          <div className="p-3 row">
            <div className="col-md-6">
              <img src={img} height="320px" alt="" className="mt-5" />
            </div>

            <div className="col-md-6">
              <div className="container">
                <div className="col-sm-12 col-md-9">
                  <p className="aboutus_titles">
                    <h1> About us </h1>
                  </p>
                  <p className="about_content">
                    We are a leading non-state degree awarding institute
                    approved by the University Grants Commission (UGC) under the
                    Universities Act. We are members of the Association of
                    Commonwealth Universities (ACU), as well as the
                    International Association of Universities (IAU).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
          <div className="p-3 row">
            <div className="col-md-6">
              <div className="container">
                <div className="col-sm-12 col-md-9">
                  <p className="aboutus_titles">
                    <h1> Our team </h1>
                  </p>
                  <p className="about_content">
                    Some of the key leads of our organization are also industry
                    leaders for their areas; therefore, they understand the
                    data-related business problems you’re trying to solve in
                    your domain and can support you through your analytics and
                    AI journey. The best way to learn about us is to talk to us.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <img src={img1} height="400px" alt="" className="mt-5" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
