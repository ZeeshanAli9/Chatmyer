import React from "react";
import Sidebar from "../Global/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../Global/Topbar";

const OutletComponent = () => {
  return (
    <>
      <div className="flex overflow-y-hidden w-full ">
        <div>
          <Sidebar />
        </div>

        <div
          className=" lg:w-[100vw] main-outlet  h-[100vh]"
          style={{ width: `calc(100vw - 240px)` }}
        >
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
