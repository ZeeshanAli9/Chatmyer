import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/Images/search.svg";
import downarrow from "../../assets/Images/downarrow.svg";
import { TeamUserData } from "../../Utils/Constant";
import dots from "../../assets/Images/announcmentdots.svg";

const TeamUser = () => {
  const [popup, setPopup] = useState(false);

  const popupRef = useRef(null);
  const handleannouncement = (id) => {
    setPopup(id == popup ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white    border-b border-[#EBEAED]">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2 border rounded border-[#E8E8E8] px-2 py-1 cursor-pointer hover:bg-primary-light ">
              <span className="text-[13px] font-medium text-secondary-darker flex items-center">
                All
                <span className="text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full ml-2 bg-primary-dark">
                  7
                </span>
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 border rounded border-[#E8E8E8] px-2 py-1 cursor-pointer hover:bg-primary-light ">
              <span className="text-sm font-medium text-secondary-darker flex items-center ">
                Active
                <span className="text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full ml-2 bg-primary-dark">
                  7
                </span>
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 border rounded border-[#E8E8E8] px-2 py-1 cursor-pointer hover:bg-primary-light ">
              <span className="text-sm font-medium text-secondary-darker flex items-center">
                Blocked
                <span className="text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full ml-2 bg-primary-dark">
                  7
                </span>
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 border rounded border-[#E8E8E8] px-2 py-1 cursor-pointer hover:border-primary-dark group ">
              <span className="text-sm font-medium text-secondary-darker flex items-center group-hover:text-primary-dark">
                Pending
                <span className="ml-2 edit">
                  <img src={downarrow} alt="" />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="outline-none bg-[#FBFAFC] px-4 py-2 border border-[#EBEAED] rounded text-sm text-secondary-light placeholder:text-sm placeholder:text-secondary-light"
            placeholder="Search types..."
          />
          <span className="absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer">
            <img src={search} alt="" />
          </span>
        </div>
      </div>

      <div>
        <table className="w-full ">
          <tr className="py-3 px-6 border-b border-[#EBEAED] mb-4">
            <th className="py-3 px-6 text-xs text-secondary-lighter font-normal  text-left">
              Name
            </th>
            <th className="py-3 px-6 text-xs text-secondary-lighter font-normal text-left">
              Email
            </th>
            <th className="py-3 px-6 text-xs text-secondary-lighter font-normal text-left">
              Status
            </th>
            <th className="py-3 px-6 text-xs text-secondary-lighter font-normal text-left">
              Role
            </th>

            <th className="py-3 px-6 text-xs text-secondary-lighter font-normal ">
              Action
            </th>
          </tr>
          {TeamUserData.map((user) => (
            <tr
              className="text-center border-t border-b border-[#EBEAED] hover:bg-primary-lighter "
              key={user.id}
            >
              <td className="text-sm text-secondary-dark font-medium py-5 px-4 ">
                <div className="flex items-center gap-3 justify-start">
                  <span>
                    <img src={user.image} alt="" />
                  </span>
                  <span className="text-sm text-secondary-dark font-medium">
                    {user.name}
                  </span>
                </div>
              </td>
              <td className="px-6 text-sm text-secondary-dark font-medium text-left">
                {user.emial}
              </td>
              <td>
                <div className="px-6 flex items-center gap-3 ">
                  <div
                    className={`text-xs font-medium  rounded w-20  px-2 py-2   cursor-pointer ${
                      user.status === "Active"
                        ? "text-primary-dark bg-primary-light"
                        : "text-secondary-light bg-[#b6b4ba2f]"
                    }`}
                  >
                    {user.status}
                  </div>
                </div>
              </td>

              <td>
                <div className=" flex items-center px-6 text-sm text-secondary-dark">
                  {user.role}
                </div>
              </td>
              <td>
                <div className="relative flex items-center justify-center">
                  <div
                    className={`h-6 w-6 flex items-center justify-center rounded hover:drop-shadow-md hover:bg-white transition-all duration-200 cursor-pointer group ${
                      popup == user.id && " bg-white drop-shadow-md"
                    }`}
                    onClick={() => handleannouncement(user.id)}
                  >
                    <img src={dots} alt="" />
                  </div>
                  {popup == user.id && (
                    <div
                      className="absolute z-30 top-2 -left-[100px] xl:-left-[40px] bg-white rounded p-2 w-[130px] drop-shadow-md flex flex-col gap-1"
                      ref={popupRef}
                    >
                      <div className="flex  items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer border border-[#EBEAED] rounded">
                        <span className="text-xs font-medium text-[#040415]">
                          Remove
                        </span>
                      </div>
                      <div className="flex  items-center hover:bg-primary-lighter px-2 py-2 cursor-pointer border border-[#EBEAED] rounded">
                        <span className="text-xs font-medium text-[#040415]">
                          Active
                        </span>
                      </div>
                      <div className="flex  items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer border border-[#EBEAED] rounded">
                        <span className="text-xs font-medium text-[#040415]">
                          De-Active
                        </span>
                      </div>
                      <div className="flex  items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer border border-[#EBEAED] rounded">
                        <span className="text-xs font-medium text-[#040415]">
                          Manage Role
                        </span>
                        <span>
                          <img src="" alt="" className="" />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default TeamUser;
