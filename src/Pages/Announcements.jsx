import React, { useEffect, useRef, useState } from "react";

import edit from "../assets/Images/edit.svg";
import del from "../assets/Images/trash_announcement.svg";
import close from "../assets/Images/closeButton.png";
import { announcementData } from "../Utils/Constant";

const Announcements = () => {
  const [popup, setPopup] = useState(false);
  const [addnewannoucement, setAddnewAnnouncement] = useState(false);
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
      <div className="bg-white h-full min-w-[700px] relative">
        <div className="flex items-center justify-between py-3 px-6 border-b border-[#EBEAED]">
          <div className="text-lg font-medium text-secondary-dark">
            Announcements
          </div>
          <div>
            <div
              className=" flex items-center gap-2 bg-primary-dark rounded px-2 py-1 cursor-pointer hover:bg-[#7d64ddf3] transition-all duration-200"
              onClick={() => setAddnewAnnouncement(true)}
            >
              <span className="text-white flex items-start justify-start mb-1">
                +
              </span>
              <span className="text-xs text-white">Add New</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#EBEAED] text-xs text-secondary-lighter font-medium">
          <div>Details</div>
          <div className="flex items-center gap-8">
            <div>STATUS</div>
            <div>ACTION</div>
          </div>
        </div>
        <div className="py-4">
          {announcementData.map((data) => (
            <div
              className="flex items-center justify-between px-6 py-3 first:border-t border-b border-[#EBEAED]"
              key={data.id}
            >
              <div>
                <h4 className="font-medium text-secondary-dark text-sm">
                  {data.title}
                </h4>
                <p className="text-xs text-secondary-lighter pr-6">
                  {data.discription}
                </p>
              </div>
              <div className="flex items-center gap-16">
                <div className="flex announcement">
                  <label class="toggle">
                    <input type="checkbox" id="toggle-checkbox" />
                    <span class="slider"></span>
                  </label>
                </div>
                <div className="relative">
                  <div
                    className={`h-6 w-6 flex items-center justify-center rounded hover:drop-shadow-md hover:bg-white transition-all duration-200 cursor-pointer group ${
                      popup == data.id && " bg-white drop-shadow-md"
                    }`}
                    onClick={() => handleannouncement(data.id)}
                  >
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 4C3.10456 4 4 3.1046 4 2C4 0.8954 3.10456 0 2 0C0.89544 0 0 0.8954 0 2C0 3.1046 0.89544 4 2 4ZM10 2C10 3.1046 9.1046 4 8 4C6.8954 4 6 3.1046 6 2C6 0.8954 6.8954 0 8 0C9.1046 0 10 0.8954 10 2ZM14 4C15.1046 4 16 3.1046 16 2C16 0.8954 15.1046 0 14 0C12.8954 0 12 0.8954 12 2C12 3.1046 12.8954 4 14 4Z"
                        className={` group-hover:fill-primary-dark
                        ${
                          popup == data.id
                            ? "fill-primary-dark"
                            : "fill-secondary-light"
                        }`}
                      />
                    </svg>
                  </div>
                  {popup == data.id && (
                    <div
                      className="absolute z-30 top-2 -left-[115px] bg-white rounded p-2 w-[110px] drop-shadow-md"
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* add new annuncemetn popup */}
        {addnewannoucement && (
          <div className="fixed inset-0 bg-[#00000013]"></div>
        )}
        {addnewannoucement && (
          <div className="absolute bg-white px-8 py-8 min-w-[800px] left-[50%] top-20 -translate-x-[50%]">
            <div className="flex items-center justify-between my-8">
              <p className="text-2xl text-secondary-darker font-medium">
                Add new announcement
              </p>
              <span
                className="cursor-pointer"
                onClick={() => setAddnewAnnouncement(false)}
              >
                <img src={close} alt="" />
              </span>
            </div>
            <div className="mb-10 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-dark block mb-4"
              >
                Enter title
              </label>
              <input
                type="text"
                id="title"
                className="border border-[#EBEAED] px-5 py-4 w-full block outline-none rounded-sm text-sm text-secondary-light font-medium placeholder:text-sm placeholder:text-secondary-light placeholder:font-medium"
                placeholder="Type Title here..."
              />
            </div>
            <div className=" mb-10">
              <label
                htmlFor="title"
                className="font-medium text-secondary-dark block mb-4"
              >
                Enter title
              </label>
              <textarea
                name=""
                className="border border-[#EBEAED] px-5 py-4 w-full block resize-none h-36 outline-none rounded-sm text-sm text-secondary-light font-medium placeholder:text-sm placeholder:text-secondary-light placeholder:font-medium"
                placeholder="Type Title here..."
              ></textarea>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                className="px-3 font-medium text-secondary-darker  py-1 border border-[#E8E8E8] rounded hover:bg-primary-dark hover:text-white transition-all duration-300"
                onClick={() => setAddnewAnnouncement(false)}
              >
                Cancel
              </button>
              <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white ">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Announcements;
