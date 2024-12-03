import React from "react";
import { NavLink } from "react-router-dom";

const RegularSidebar = () => {
  return (
    <div className="sidebar bg-light p-3">
      <h4>regular</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/regular/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/regular/assets">
            Asset Catalog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/regular/borrowed">
            Borrowed Assets
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RegularSidebar;
   