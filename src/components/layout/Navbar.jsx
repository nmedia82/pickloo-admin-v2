import React from "react";
// importing Link
import { Link } from "react-router-dom";
// icons
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({ onLogOut, onLogin }) => {
  return (
    <>
      <div className="row">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="col-md-3 ps-4">
            {/* Navbar Brand */}
            <Link className="navbar-brand" to="/">
              Roaddy Admin
            </Link>
          </div>
          {/* Navbar Search */}
          <div className="col-md-7">
            {/* <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search for..."
                  aria-label="Search for..."
                  aria-describedby="btnNavbarSearch"
                />
                <button
                  className="btn btn-primary"
                  id="btnNavbarSearch"
                  type="button"
                >
                  <FaSearch />
                </button>
              </div>
            </form> */}
          </div>
          <div className="col-md-1">
            {/* Sidebar Toggle */}
            <button
              className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 d-md-none"
              id="sidebarToggle"
              to=""
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars />
            </button>
          </div>
          <div className="col-md-1 ms-auto">
            {/* Navbar */}
            {onLogin ? (
              <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 push-right">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUserAlt />
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="">
                        Profile
                      </Link>
                    </li>
                    {/* <li>
                <Link className="dropdown-item" to="">
                  Activity Log
                </Link>
              </li> */}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => onLogOut()}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
