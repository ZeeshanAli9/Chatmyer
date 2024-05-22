import React from "react";

import gallery from "../../assets/chatbox/gallery.png";
import archive_tick from "../../assets/chatbox/archive-tick.svg";
import happyemoji from "../../assets/chatbox/happyemoji.svg";
import linkSquare from "../../assets/chatbox/link-square.svg";
import send from "../../assets/chatbox/send.svg";
import sms_star from "../../assets/chatbox/sms-star.svg";

const Chatboxfooter = () => {
  return (
    <>
      <div className=" h-[110px] lg:h-[130px] border-t border-[#E8E8E8] px-6">
        <div className="py-2">
          <textarea
            name=""
            id=""
            className="w-full outline-none text-secondary-dark placeholder:text-secondary-light text-sm font-medium  h-[50px] resize-none"
            placeholder="Write reply here..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between py-3 ">
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
          <div>
            <button className="flex items-center justify-center bg-primary-dark rounded-[4px] text-white shadow px-2 py-1">
              Send
              <span className="ml-1">
                <img src={send} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatboxfooter;
