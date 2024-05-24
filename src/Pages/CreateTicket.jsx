import React, { useState } from "react";
import gallery from "../assets/chatbox/gallery.png";
import archive_tick from "../assets/chatbox/archive-tick.svg";
import happyemoji from "../assets/chatbox/happyemoji.svg";
import linkSquare from "../assets/chatbox/link-square.svg";
import sms_star from "../assets/chatbox/sms-star.svg";
import AddingCustomer from "../Components/CreateTicket/AddingCustomer";
import AddingTeam from "../Components/CreateTicket/AddingTeam";

const CreateTicket = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] min-w-[700px] h-[100vh] px-12 py-12 lg:px-20">
        <div className="mx-auto bg-white px-6 py-8 ">
          <div>
            <h2 className="text-2xl font-medium text-secondary-darker">
              Create Ticket
            </h2>
          </div>
          <div className="my-6">
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

            <div className="mb-6 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-light text-sm block mb-3"
              >
                Customer
              </label>
              <div className="border border-[#EBEAED] px-4 py-1  min-h-10 flex items-center w-full rounded-sm text-sm text-secondary-dark font-medium outline-none relative">
                <AddingCustomer />
              </div>
            </div>

            <div className="mb-6 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-light text-sm block mb-3"
              >
                Assigned to Team/Member
              </label>
              <div className="border border-[#EBEAED] px-4 py-1 w-full min-h-10 flex items-center  rounded-sm text-sm text-secondary-dark font-medium outline-none relative cursor-pointer">
                <AddingTeam />
              </div>
            </div>

            <div className="mb-6 ">
              <div>
                <label
                  htmlFor="title"
                  className="font-medium text-secondary-light text-sm block mb-3"
                >
                  Discription
                </label>
              </div>
              <div className=" h-[130px] border border-[#EBEAED] rounded px-6">
                <div className="py-2">
                  <textarea
                    name=""
                    id=""
                    className="w-full outline-none h-[63px] resize-none text-sm text-secondary-lighter font-medium placeholder:text-sm paceholder:text-secondary-lighter placeholder:font-medium"
                    placeholder="Write reply here..."
                  ></textarea>
                </div>
                <div className="flex items-center  py-1 ">
                  <div className="flex gap-4">
                    <figure className="cursor-pointer">
                      <img src={happyemoji} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={gallery} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={linkSquare} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={archive_tick} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={sms_star} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
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
    </>
  );
};

export default CreateTicket;
