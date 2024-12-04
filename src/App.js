import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import SecuredComponent from "./components/SecuredComponent";
import Footer from "./components/Footer"
import "./App.css";
// Regular Dashboard Components
import RegularDashboard from "./components/RegularDashboard/RegularSidebar";
import RegularHome from "./components/RegularDashboard/RegularHome";
import AssetCatalog from "./components/RegularDashboard/AssetCatalog";
import BorrowedAssets from "./components/RegularDashboard/BorrowedAssets";

// Admin Dashboard Components
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminHome from "./components/AdminDashboard/AdminHome";
import EmployeeManagement from "./components/AdminDashboard/EmployeeManagement";
import AssetManagement from "./components/AdminDashboard/AssetManagement";
import AssetRequests from "./components/AdminDashboard/AssetRequest";
import EmployeeCRUD from "./services/employeeCrud";
const App = () => {
  return (
    <div className="app-background" >
      <Router>
      <Routes>
        {/* Redirect '/' to '/login' */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login and Register Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       

        {/* Secured Component Route */}
        <Route path="/secured" element={<SecuredComponent />} />

        {/* Regular Dashboard Routes */}
        <Route path="/regular/*" element={<RegularDashboard />}>
          <Route path="home" element={<RegularHome />} />
          <Route path="assets" element={<AssetCatalog />} />
          <Route path="borrowed" element={<BorrowedAssets />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin/*" element={<AdminDashboard />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="employees" element={<EmployeeManagement />} />
          <Route path="assets" element={<AssetManagement />} />
          <Route path="requests" element={<AssetRequests />} />
        </Route>
      </Routes>
    </Router>

    </div>
  );
};

export default App;
