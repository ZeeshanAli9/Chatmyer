import React from "react";
import Sidebar from "../Global/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../Global/Topbar";

const OutletComponent = () => {
  return (
    <>
      <div className="flex overflow-y-hidden">
        <div>
          <Sidebar />
        </div>

        <div className="xl:w-[100vw] main-outlet  h-[100vh]">
          <div className="w-[100%]">
            <Topbar />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default OutletComponent;
