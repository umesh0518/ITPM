import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid navbarcontainer">
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <div className="container">
          <button
            className="navbar-toggler toogle_button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Notices
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Registration
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
