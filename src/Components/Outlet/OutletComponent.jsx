import React from "react";
import Sidebar from "../Global/Sidebar";
import { Outlet } from "react-router-dom";

const OutletComponent = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-[100vw] main-outlet overflow-hidden h-[100vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default OutletComponent;
