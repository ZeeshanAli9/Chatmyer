import React from "react";

const UserTicketTemplate = ({ data }) => {
  return (
    <>
      <div
        key={data.id}
        className="first:mt-4 last:mb-4 bg-white my-6 rounded px-5 py-4"
      >
        <div className="">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-secondary-dark flex items-center">
              {data.ticketno}{" "}
              <span className="text-[10px] text-white w-3 h-3 flex items-center justify-center rounded-full ml-2 bg-primary-dark">
                {data.totalticket}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] px-2 py-1 cursor-pointer text-sm text-secondary-darker">
                {data.team}
              </div>
              <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] px-2 py-1 cursor-pointer text-sm text-secondary-darker">
                {data.status}
              </div>
            </div>
          </div>
          <div className="my-3">
            <div>
              <h2 className="text-base font-medium text-secondary-dark">
                {data.title}
              </h2>
              <p className="text-secondary-lighter text-sm">
                {data.discription}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full">
                <img src={data.image} alt="" />
              </div>
              <div className="text-secondary-lighter text-xs">
                Assigned To{" "}
                <span className="text-secondary-dark font-medium text-xs">
                  {data.asigneto}
                </span>
              </div>
            </div>
            <div>
              <span>{data.date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTicketTemplate;
