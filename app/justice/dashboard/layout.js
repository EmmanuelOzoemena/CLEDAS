
import DashboardHeader from "@/app/components/dashboardHeader";
import DashboardSideBar from "@/app/components/dashboardSideBar";


import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <main className="dashboard">
      <DashboardHeader />
      <div className="dashboard__inner">
        <DashboardSideBar />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
