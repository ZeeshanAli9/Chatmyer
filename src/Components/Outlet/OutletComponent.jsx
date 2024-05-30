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

        <div className=" lg:w-[100vw] main-outlet  h-[100vh]">
          <div>
            <Topbar />
          </div>
          <main>
            <div className="min-w-[700px]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default OutletComponent;
