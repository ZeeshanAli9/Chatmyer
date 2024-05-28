import React from "react";
import { Teamagent } from "../Utils/Constant";

const TeamAgent = () => {
  const maxDisplay = 3;
  // const displayUsers = TeamAgent.slice(0, maxDisplay);
  // const extraUsersCount = users.length - maxDisplay;
  return (
    <>
      <div className="min-w-[700px]">
        <div className="flex items-center justify-between px-6 py-4 bg-white   min-w-[700px] border-b border-[#EBEAED] mb-4">
          <div>
            <h2 className="text-lg font-medium text-secondary-dark">Teams</h2>
          </div>
        </div>
        <div className="px-6 py-2 border-b border-t border-[#EBEAED]">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between min-w-[380px]">
              <div className="text-sm font-medium text-secondary-dark">
                Marketing Team
              </div>
              <div className="">2</div>
            </div>
            <div>
              <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] hover:bg-primary-dark hover:text-white px-2 py-1 cursor-pointer text-[13px] text-secondary-darker>">
                Leave Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamAgent;
