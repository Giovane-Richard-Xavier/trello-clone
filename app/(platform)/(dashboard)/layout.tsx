import React from "react";
import { Navbar } from "./_components/navbar";

type TDashboardLayout = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: TDashboardLayout) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};
export default DashboardLayout;
