import React from "react";
import publish from "../assets/Images/publish.svg";
import edit from "../assets/Images/edit.svg";
import trash from "../assets/Images/trash_announcement.svg";
import frame from "../assets/Images/Frame.png";

const WriteHelp = () => {
  return (
    <div className="bg-[#FAFAFA]  min-w-[700px] h-[100vh] ">
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div>
          <h2 className="text-lg font-medium text-secondary-dark">
            Help Centre
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 px-2 py-1 border border-[#E8E8E8] rounded cursor-pointer hover:border-primary-dark group transition-all">
            <span>
              <img src={trash} alt="" className="trash transition-all" />
            </span>
            <span className="text-xs text-secondary-darker font-medium group-hover:text-primary-dark transition-all">
              Discard
            </span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 border border-[#E8E8E8] rounded cursor-pointer hover:border-primary-dark group transition-all">
            <span>
              <img src={publish} alt="" className="publish transition-all" />
            </span>
            <span className="text-xs text-secondary-darker font-medium group-hover:text-primary-dark transition-all">
              Publish
            </span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 border border-[#E8E8E8] rounded cursor-pointer hover:border-primary-dark group transition-all">
            <span>
              <img src={edit} alt="" className="edit transition-all" />
            </span>
            <span className="text-xs text-secondary-darker font-medium group-hover:text-primary-dark transition-all">
              Draft
            </span>
          </div>
        </div>
      </div>
      <div className="px-12 py-12 lg:px-20">
        <div>
          <div className="mb-6 ">
            <label
              htmlFor="title"
              className="font-medium text-secondary-light text-sm block mb-3"
            >
              Subject
            </label>
            <input
              type="text"
              id="title"
              className="border border-[#EBEAED] px-4 py-3 w-full block outline-none rounded-sm text-sm text-secondary-lighter font-medium placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-medium"
              placeholder="Type Title here..."
            />
          </div>
          <div className="w-full">
            <img src={frame} alt="" className="w-full ob" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="px-3 font-medium text-secondary-darker  py-1 border border-[#E8E8E8] rounded hover:bg-primary-dark hover:text-white transition-all duration-300">
            Cancel
          </button>
          <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteHelp;
