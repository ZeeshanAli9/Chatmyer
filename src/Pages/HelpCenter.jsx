import React, { useEffect, useRef, useState } from "react";
import dots from "../assets/Images/announcmentdots.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/routes";
import { Helpcenter } from "../Utils/Constant";
import edit from "../assets/Images/edit.svg";
import del from "../assets/Images/trash_announcement.svg";

const HelpCenter = () => {
  const [popup, setPopup] = useState(false);
  const [activepage, setActivepage] = useState("1");
  const navigate = useNavigate();

  const handleNewHelp = () => {
    navigate(`${routes.WriteHelp}`);
  };

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
      <div className="min-w-[830px]">
        <div>
          <div className="flex items-center gap-6  py-3 px-6 border-b border-[#EBEAED]">
            <div
              className=" flex items-center gap-2 bg-primary-dark rounded px-2  cursor-pointer hover:bg-[#7d64ddf3] transition-all duration-200"
              onClick={handleNewHelp}
            >
              <span className="text-white flex items-start justify-start mb-1">
                +
              </span>
              <span className="text-sm text-white">Add New</span>
            </div>
            <div className="py-1 px-2 rounded border border-[#EBEAED] text-sm cursor-pointer text-secondary-darker hover:text-primary-dark font-medium hover:border-primary-dark">
              Published
            </div>
            <div className="py-1 px-2 rounded border border-[#EBEAED] text-sm cursor-pointer text-secondary-darker  hover:text-primary-dark font-medium hover:border-primary-dark">
              Unpublished
            </div>
            <div className="py-1 px-2 rounded border border-[#EBEAED] text-sm cursor-pointer text-secondary-darker  hover:text-primary-dark font-medium hover:border-primary-dark">
              Draft
            </div>
          </div>

          <div>
            <table className="w-full ">
              <tr className="py-3 px-6 border-b border-[#EBEAED] ">
                <th className="py-3 px-6 text-xs text-secondary-lighter font-normal ">
                  #ID
                </th>
                <th className="py-3 px-6 text-xs text-secondary-lighter font-normal">
                  TITLE
                </th>
                <th className="py-3 px-6 text-xs text-secondary-lighter font-normal">
                  Created BY
                </th>
                <th className="py-3 px-6 text-xs text-secondary-lighter font-normal">
                  Created At
                </th>
                <th className="py-3 px-6 text-xs text-secondary-lighter font-normal">
                  STATUS
                </th>
                <th className="py-3 px-6 text-xs text-secondary-lighter font-normal">
                  Action
                </th>
              </tr>
              {Helpcenter.map((user) => (
                <tr
                  className="text-center first:border-t border-b border-[#EBEAED] hover:bg-primary-lighter"
                  key={user.id}
                >
                  <td className="text-sm text-secondary-dark font-medium py-6 px-6 ">
                    {user.customerId}
                  </td>
                  <td className="text-sm text-secondary-dark font-medium">
                    {user.title}
                  </td>
                  <td>
                    <div className="flex items-center gap-3 justify-center">
                      <span>
                        <img src={user.image} alt="" />
                      </span>
                      <span className="text-sm text-secondary-dark font-medium">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="text-sm text-secondary-dark font-medium">
                    {user.Createdat}
                  </td>
                  <td>
                    <div className=" flex items-center justify-center">
                      <div className="text-xs font-medium text-secondary-light bg-[#b6b4ba2f] rounded w-28 flex items-center justify-center px-1 py-1 hover:bg-primary-light hover:text-primary-dark cursor-pointer">
                        {user.status}
                      </div>
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
                          className="absolute z-30 top-2 -left-[100px] xl:-left-[65px] bg-white rounded p-2 w-[110px] drop-shadow-md"
                          ref={popupRef}
                        >
                          <div className="flex gap-2 items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer">
                            <span>
                              <img src={edit} alt="" className="" />
                            </span>
                            <span className="text-xs font-medium text-[#040415]">
                              Edit
                            </span>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-primary-lighter px-2 py-2 cursor-pointer">
                            <span>
                              <img src={del} alt="" />
                            </span>
                            <span className="text-xs font-medium text-[#040415]">
                              Delete
                            </span>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer">
                            <span>
                              <img src={edit} alt="" className="" />
                            </span>
                            <span className="text-xs font-medium text-[#040415]">
                              Edit
                            </span>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer">
                            <span>
                              <img src={edit} alt="" className="" />
                            </span>
                            <span className="text-xs font-medium text-[#040415]">
                              Edit
                            </span>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer">
                            <span>
                              <img src={edit} alt="" className="" />
                            </span>
                            <span className="text-xs font-medium text-[#040415]">
                              Edit
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
          <div className="flex items-center justify-end gap-4 py-3 px-6">
            <span
              className={`h-10 w-10 rounded  bg-[#FBFAFC] border  flex items-center justify-center hover:border-primary-dark hover:text-primary-dark text-sm font-semibold cursor-pointer border-primary-dark text-primary-dark  `}
            >
              1
            </span>
            <span className="h-10 w-10 rounded text-secondary-dark text-sm font-semibold bg-[#FBFAFC] border border-transparent flex items-center justify-center hover:border-primary-dark hover:text-primary-dark cursor-pointer">
              2
            </span>
            <span className="h-10 w-10 rounded text-secondary-dark bg-[#FBFAFC] border border-transparent flex items-center justify-center hover:border-primary-dark hover:text-primary-dark text-sm font-semibold">
              ...
            </span>
            <span className="bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded">
              Next
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
