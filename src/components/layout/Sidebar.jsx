import React, { useState, useEffect } from "react";
// importing Link
import { Link, NavLink } from "react-router-dom";
import Icons from "../Icons";
import { get_menu } from "../../services/helpers";

const Sidebar = ({ UserCache }) => {
  const [Menu, setMenu] = useState([]);

  useEffect(() => {
    const type = UserCache && UserCache.type;
    const menu = get_menu(type);
    setMenu(menu);
  }, [UserCache]);

  return (
    <div className="my-sidebar h-100">
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
            <NavLink className="nav-link" aria-current="page" to="login">
              <Icons icon="" /> Login
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
