import React from "react";
import Header from "../Header";
import RegularSidebar from "./RegularSidebar";
import { Outlet } from "react-router-dom";

const RegularDashboard = () => {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Header Section */}
      <Header />
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="sidebar bg-light shadow-sm">
          <RegularSidebar />
        </div>
        {/* Main Content */}
        <div className="main-content p-4 flex-grow-1 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RegularDashboard;


{/*import React from "react";
import Header from "../Header";
import RegularSidebar from "./RegularSidebar";
import { Outlet } from "react-router-dom";

const RegularDashboard = () => {
  return (
    <div className="d-flex">
      <RegularSidebar />
      <div className="main-content p-4 w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default RegularDashboard;*/}
