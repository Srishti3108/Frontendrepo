import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const RegularSidebar = () => {
  return (
    <div className="app-background1">
      <h3 className="mb-4 text-center">User Dashboard</h3>
      <nav className="nav flex-column">
        <Link to="/regular/home" className="nav-link text-dark mb-3">
          <i className="fas fa-home me-2"></i> Home
        </Link>
        <Link to="/regular/assets" className="nav-link text-dark mb-3">
          <i className="fas fa-cogs me-2"></i> Asset Catalog
        </Link>
        <Link to="/regular/borrowed" className="nav-link text-dark mb-3">
          <i className="fas fa-box me-2"></i> Borrowed Assets
        </Link>
        <Link to="/login" className="nav-link text-dark mb-3">
          <i className="fas fa-sign-out-alt me-2"></i> Logout
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default RegularSidebar;



{/*import React from "react";
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";

const RegularSidebar = () => {
  return (
    <div className="sidebar bg-dark text-white vh-100">
      <nav className="nav flex-column p-3">
        <h4 className="mb-4">User Dashboard</h4>
        <Link to ="/regular/home" className="nav-link text-white">
          Home
        </Link>
        <Link to ="/regular/assets" className="nav-link text-white">
        Asset Catalog
        </Link>
        <Link to ="/regular/borrowed" className="nav-link text-white">
        Borrowed Assets
        </Link>
        <Link to ="/login" className="nav-link text-white">Logout</Link>
        <Outlet></Outlet>
      </nav>
    </div>
  )
};
export default RegularSidebar;*/}

{/*import React from "react";
import { Link, Outlet } from "react-router-dom";

const RegularSidebar = () => {
  return (
    <div className="sidebar bg-dark text-white vh-100">
       <nav className="nav flex-column p-3">
      <h4>User Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/regular/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/regular/assets">
            Asset Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/regular/borrowed">
            Borrowed Assets
          </Link>
        </li>

      </ul>
      <Outlet></Outlet>
      </nav>
    </div>
  );
};

export default RegularSidebar;*/}
   