import React from "react";
// importing Link
import { Link } from "react-router-dom";
// icons
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { get_company_name, get_member_name } from "../../services/auth";

const Navbar = ({ onLogOut, isLogin }) => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        {/* <div className="col-md-3 ps-4"> */}
        {/* Navbar Brand */}
        <Link className="navbar-brand ps-3" to="/">
          Roaddy Admin |
          {isLogin && (
            <span className="text-light p-2">{get_company_name()}</span>
          )}
        </Link>
        {/* </div> */}
        {/* Navbar Search */}
        {/* <div className="col-md-6"> */}
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
        {/* </div> */}
        {/* <div className="col-md-1"> */}
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
        {/* </div>
        <div className="col-md-2 ms-auto"> */}
        {/* Navbar */}
        {isLogin ? (
          <>
            <ul className="navbar-nav ms-auto me-3 me-lg-4">
              <span className="text-light p-2">{get_member_name()}</span>
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
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
