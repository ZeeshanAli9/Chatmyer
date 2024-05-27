import React, { useState } from "react";
import close from "../assets/Images/closeButton.png";
import { custommessage } from "../Utils/Constant";

const WidgetAppereanceMessage = () => {
  const [addNewMessage, setAddNewMessage] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white   min-w-[700px] border-b border-[#EBEAED]">
        <div>
          <h2 className="text-lg font-medium text-secondary-dark">
            Widget Appearance
          </h2>
        </div>
        <div>
          <span
            className="border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-primary-dark hover:text-white group transition-all text-secondary-darker text-xs"
            onClick={() => setAddNewMessage(true)}
          >
            + Add Custom message
          </span>
        </div>
      </div>

      <div className="relative min-w-[700px]">
        <div
          className="   bg-[#FAFAFA] px-6 py-6"
          style={{ height: `calc(100vh - 110px)` }}
        >
          <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 ">
            {custommessage.map((user) => (
              <div
                className="bg-white p-4 border-b border-[#EBEAED]"
                key={user.id}
              >
                <div className="mb-1">
                  <input type="checkbox" name="check" id="messagecheck" />
                </div>
                <p className="text-sm text-secondary-dark">{user.message}</p>
              </div>
            ))}
          </div>
        </div>
        {/* New message BOx */}
        {addNewMessage && <div className="fixed inset-0 bg-[#00000013]"></div>}
        {addNewMessage && (
          <div className="absolute bg-white px-8 py-8 min-w-[700px] left-[50%] top-20 -translate-x-[50%]">
            <div className="flex items-center justify-between my-8">
              <p className="text-2xl text-secondary-darker font-medium">
                Add custom message
              </p>
              <span
                className="cursor-pointer"
                onClick={() => setAddNewMessage(false)}
              >
                <img src={close} alt="" />
              </span>
            </div>

            <div className=" mb-10">
              <label
                htmlFor="title"
                className="font-medium text-secondary-dark block mb-4"
              >
                Enter Message
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
                onClick={() => setAddNewMessage(false)}
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

export default WidgetAppereanceMessage;
