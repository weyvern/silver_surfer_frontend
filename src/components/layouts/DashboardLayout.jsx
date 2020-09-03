import React from "react";
import SideNavbar from "../SideNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <div id="DashboardLayout" className="row">
      <div className="col-lg-1 p-0">
        <SideNavbar />
      </div>

      <div className="col-lg-11 bg-light d-flex justify-content-center align-items-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
