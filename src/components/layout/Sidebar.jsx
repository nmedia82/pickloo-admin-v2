import React from "react";
// importing Link
import { Link } from "react-router-dom";
// icons
import { AiOutlineBarChart } from "react-icons/ai";
import { FaTachometerAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="my-sidebar h-100">
      <nav id="sidebarMenu" className="d-md-block collapse">
        <ul className="nav-ul nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link active" aria-current="page" to="/">
              <FaTachometerAlt />
              <span className="ms-2">Dashboard</span>
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              className="nav-link"
              to="#submenuProducts"
              data-bs-toggle="collapse"
              data-bs-target="#submenuProducts"
            >
              <FaShoppingCart />
              <span className="mx-2">Products</span>
              <FaAngleDown />
            </Link>
            <ul
              className="list-unstyled flex-column pl-3 collapse"
              id="submenuProducts"
            >
              <li className="nav-item ms-2 mb-2 ">
                <Link className="nav-link" to="/products/add">
                  {/* <FaShoppingCart /> */}
                  Add Products
                </Link>
              </li>
              <li className="nav-item ms-2 mb-2 ">
                <Link className="nav-link" to="/products/all">
                  {/* <FaShoppingCart /> */}
                  All Products
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item mb-2">
            <Link
              className="nav-link"
              to="#submenuOrders"
              data-bs-toggle="collapse"
              data-bs-target="#submenuOrders"
            >
              <FaRegFileAlt />
              <span className="mx-2">Orders</span>
              <FaAngleDown />
            </Link>
            <ul
              className="list-unstyled flex-column pl-3 collapse"
              id="submenuOrders"
              aria-expanded="false"
            >
              <li className="nav-item ms-2 mb-2 ">
                <Link className="nav-link text-secondary" to="/orders/all">
                  {/* <FaRegFileAlt /> */}
                  All Orders
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item mb-2">
            <Link
              className="nav-link"
              to="#submenuTransporters"
              data-bs-toggle="collapse"
              data-bs-target="#submenuTransporters"
            >
              <FaBusAlt />
              <span className="mx-2">Transporters</span>
              <FaAngleDown />
            </Link>
            <ul
              className="list-unstyled flex-column pl-3 collapse"
              id="submenuTransporters"
              aria-expanded="false"
            >
              <li className="nav-item ms-2 mb-2 ">
                <Link
                  className="nav-link text-secondary"
                  to="/transporters/all"
                >
                  {/* <FaRegFileAlt /> */}
                  All Transporters
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item mb-2">
            <Link
              className="nav-link"
              to="#submenuRoutes"
              data-bs-toggle="collapse"
              data-bs-target="#submenuRoutes"
            >
              <FaRoute />
              <span className="mx-2">Routes</span>
              <FaAngleDown />
            </Link>
            <ul
              className="list-unstyled flex-column pl-3 collapse"
              id="submenuRoutes"
              aria-expanded="false"
            >
              <li className="nav-item ms-2 mb-2 ">
                <Link className="nav-link text-secondary" to="/routes/add">
                  {/* <FaRegFileAlt /> */}
                  Add Route
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item mb-2">
            <Link
              className="nav-link"
              to="#submenuBookings"
              data-bs-toggle="collapse"
              data-bs-target="#submenuBookings"
            >
              <TbBrandBooking />
              <span className="mx-2">Bookings</span>
              <FaAngleDown />
            </Link>
            <ul
              className="list-unstyled flex-column pl-3 collapse"
              id="submenuBookings"
              aria-expanded="false"
            >
              <li className="nav-item ms-2 mb-2 ">
                <Link className="nav-link text-secondary" to="/bookings/add">
                  {/* <FaRegFileAlt /> */}
                  Add Bookings
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className="nav-item mb-2">
              <Link className="nav-link" to="/">
                <FaUserFriends /> Customers
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/">
                <LinkiOutlineBarChart /> Reports
              </Link>
            </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
