import React from "react";
import { initialGenerator } from "../../Utils/Helpermethods";
import seenmsg from "../../assets/Images/done_all.svg";

const UserChatsTemplate = ({ user }) => {
  return (
    <>
      <div
        className="border-b border-l-[2px] border-l-transparent border-[#E8E8E8] px-4 py-5 flex items-center justify-between cursor-pointer hover:bg-primary-light hover:border-l-primary-dark transition-all duration-500"
        key={user?.id}
      >
        <div
          className={`relative h-10 w-10 rounded-full flex items-center justify-center border border-[#84818A]`}
        >
          <h1>{initialGenerator(user?.Username)}</h1>
          {user.status === "Active" && (
            <span className="absolute -right-1 bottom-0 w-4 h-4 rounded-full bg-[#00BA34] border-[3px] border-white"></span>
          )}
        </div>
        <div className="basis-[66%]">
          <h2 className="text-base text-secondary-dark font-medium">
            {user.Username}
          </h2>
          <p
            className={`user_message text-sm font-medium ${
              user.newmsg ? "text-secondary-dark " : "text-secondary-lighter"
            }`}
          >
            {user.message}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm font-medium text-secondary-lighter">
            {user.time} ago
          </div>

          <div className="flex items-center justify-end">
            {user?.unread && (
              <span className=" bg-primary-dark text-white rounded-full h-5 w-5 font-normal text-xs items-center flex justify-center ">
                {user.unread}
              </span>
            )}
            {/* if msg sent */}

            {user?.msssagestatus && user.msssagestatus == "sent" && (
              <div>
                <img src="" alt="" />
              </div>
            )}

            {/* if msg seen */}

            {user?.msssagestatus && user.msssagestatus == "seen" && (
              <div>
                <img src={seenmsg} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserChatsTemplate;
