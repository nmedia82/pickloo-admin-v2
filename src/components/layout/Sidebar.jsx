import React from "react";
// icons
import { AiOutlineBarChart } from "react-icons/ai";
import { FaTachometerAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div id="sidebar" className="bg-dark">
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                <FaTachometerAlt />
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#submenuProducts"
                data-toggle="collapse"
                data-target="#submenuProducts"
              >
                <FaShoppingCart /> Products
                <BsArrowDownShort />
              </a>
              <ul
                class="list-unstyled flex-column pl-3 collapse"
                id="submenuProducts"
                aria-expanded="false"
              >
                <li class="nav-item mb-2 ">
                  <a class="nav-link text-secondary" href="">
                    <FaShoppingCart /> Add Products
                  </a>
                </li>
                <li class="nav-item mb-2 ">
                  <a class="nav-link text-secondary" href="">
                    <FaShoppingCart /> All Products
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaRegFileAlt /> Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaUserFriends /> Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineBarChart /> Reports
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
