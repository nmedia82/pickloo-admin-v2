import React, { useState, useEffect } from "react";
// importing Link
import { NavLink } from "react-router-dom";
import Icons from "../Icons";
import { get_menu } from "../../services/helpers";
import { get_user_type } from "../../services/auth";

const Sidebar = ({ isLoggedIn }) => {
  const [Menu, setMenu] = useState([]);

  useEffect(() => {
    const type = isLoggedIn ? get_user_type() : "";
    const menu = get_menu(type);
    console.log(menu);
    setMenu(menu);
  }, [isLoggedIn]);

  return (
    <div className="my-sidebar bg-dark h-100">
      <nav id="sidebarMenu" className="d-md-block collapse">
        <ul className="nav-ul nav flex-column">
          {Menu.map((m, i) => (
            <li className="nav-item" key={i}>
              <NavLink className="nav-link" aria-current="page" to={m.to}>
                <Icons icon={m.icon} /> {m.title}
              </NavLink>
            </li>
          ))}
          {/* <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/cities">
              <Icons icon="city" /> Cities
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/vehicles">
              <Icons icon="vehicles" /> Vehicles
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
