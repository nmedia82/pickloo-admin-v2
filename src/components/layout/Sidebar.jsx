import React from "react";
// import Link
import { Link } from "react-router-dom";
// icons
import { AiOutlineBarChart } from "react-icons/ai";
import { FaTachometerAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div id="sidebar" className="my-sidebar bg-light">
      <nav>
        <ul className="nav flex-column p-3">
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
              class="list-unstyled flex-column pl-3 collapse"
              id="submenuProducts"
            >
              <li class="nav-item ms-2 mb-2 ">
                <Link class="nav-link text-secondary" to="">
                  <FaShoppingCart /> Add Products
                </Link>
              </li>
              <li class="nav-item ms-2 mb-2 ">
                <Link class="nav-link text-secondary" to="">
                  <FaShoppingCart /> All Products
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
              class="list-unstyled flex-column pl-3 collapse"
              id="submenuOrders"
              aria-expanded="false"
            >
              <li class="nav-item ms-2 mb-2 ">
                <Link class="nav-link text-secondary" to="">
                  <FaRegFileAlt /> All Orders
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
