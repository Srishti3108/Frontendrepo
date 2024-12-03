import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="text-center p-3">
        © {new Date().getFullYear()} Asset Management System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
