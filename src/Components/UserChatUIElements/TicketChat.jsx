import React from "react";
import { initialGenerator } from "../../Utils/Helpermethods";

const TicketChat = ({ data }) => {
  return (
    <>
      <div
        className={` flex items-center first:mt-4 my-8 last:mb-4 ${
          data.User_type == "visitor" && "justify-start"
        } ${data.User_type == "agent" && "justify-end"}`}
        key={data.id}
      >
        <div
          className={`rounded-md px-3 py-2 ${
            data.User_type == "visitor" &&
            "bg-white min-w-[500px] max-w-[700px]  mr-6"
          } ${
            data.User_type == "agent" &&
            "bg-primary-light min-w-[600px] max-w-[700px]  ml-6"
          }`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`h-7 w-7 flex items-center justify-center rounded-full text-xs ${
                !data.image && "bg-primary-light"
              }`}
            >
              {data.image ? (
                <img src={data.image} alt="" />
              ) : (
                initialGenerator(data.name)
              )}
            </div>
            <div className="text-sm font-medium text-secondary-darker">
              {data.name}
            </div>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="block text-xs font-medium text-secondary-light">
              {data.date}
            </span>
            <span className="block text-xs font-medium text-secondary-light">
              {data.time}
            </span>
          </div>
          <div className="mt-2">
            {data?.title && (
              <h2 className="text-[#2E2C34] font-medium text-sm mb-2">
                {data.title}
              </h2>
            )}
            <p className="text-sm font-normal text-secondary-light">
              {data.message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketChat;
