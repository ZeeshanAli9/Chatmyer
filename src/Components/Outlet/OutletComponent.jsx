import React from "react";
import Sidebar from "../Global/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../Global/Topbar";

const OutletComponent = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-[100vw] main-outlet overflow-hidden h-[100vh]">
          <div>
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
