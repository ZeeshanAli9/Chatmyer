import React from "react";
import downarrow from "../../assets/Topbar/Topbardroparrow.svg";
import userimg from "../../assets/Topbar/userimg.svg";
import save from "../../assets/Topbar/save_2.svg";
import archive from "../../assets/Topbar/archive_tick.svg";
import notification from "../../assets/Topbar/notification_bing.svg";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="flex justify-between px-4 py-3 border-b border-[#ebeaed]">
        <div>
          <div className=" border-[0.5px] border-[#EBEAED] rounded-md flex items-center justify-between px-2 py-1 min-w-36">
            <div className="flex items-center">
              <figure className="bg-[#E2C83B] h-6 w-6 rounded-full mr-2 cursor-pointer">
                <img src="" alt="" />
              </figure>
              <h2 className="text-sm font-medium text-secondary-dark">
                Maxmyer
              </h2>
            </div>
            <div className="cursor-pointer">
              <img src={downarrow} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          {pathname === "/tickets" && (
            <div className="border border-[#E8E8E8] px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-primary-lighter transition-all duration-300">
              <span></span>
              <span className="text-[13px] font-medium text-secondary-darker">
                Create Ticket
              </span>
            </div>
          )}
          {/* pathname selet */}
          {pathname === "/" && (
            <div className="flex items-center gap-4">
              <div className="border border-[#E8E8E8] px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-primary-lighter transition-all duration-300">
                <figure className="mr-2 h-3 w-3">
                  <img
                    src={save}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </figure>
                <span className="text-[13px] font-medium text-secondary-darker">
                  Saved
                </span>
              </div>
              <div className="border border-[#E8E8E8] px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-primary-lighter transition-all duration-300">
                <figure className="mr-2 h-3 w-3">
                  <img
                    src={archive}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </figure>
                <span className="text-[13px] font-medium text-secondary-darker">
                  Bookmarks
                </span>
              </div>
              <div className="border border-[#E8E8E8] px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-primary-lighter transition-all duration-300">
                <figure className="mr-2 h-3 w-3">
                  <img
                    src={notification}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </figure>
                <span className="text-[13px] font-medium text-secondary-darker">
                  Notifications{" "}
                </span>
              </div>
            </div>
          )}
          <div className="flex items-center cursor-pointe">
            <figure className="h-8 w-8 rounded-full mr-2">
              <img
                src={userimg}
                alt="userimg"
                className="h-8 w-8 rounded-full"
              />
            </figure>
            <h2 className="text-sm font-medium text-secondary-dark">Maxbert</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
