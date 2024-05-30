import React from "react";
import { Teamagent } from "../Utils/Constant";
import TeamGroupAvatar from "../Components/Teams/TeamGroupAvatar";

const TeamAgent = () => {
  return (
    <>
      <div className="min-w-[700px]">
        <div className="flex items-center justify-between px-6 py-4 bg-white   min-w-[700px] border-b border-[#EBEAED] mb-4">
          <div>
            <h2 className="text-lg font-medium text-secondary-dark">Teams</h2>
          </div>
        </div>
        {Teamagent.map((user) => (
          <div
            className="px-6 py-2 last:border-b-0 border-t border-[#EBEAED]"
            key={user.id}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between min-w-[420px]">
                <div className="text-sm font-medium text-secondary-dark">
                  {user.team}
                </div>
                <div className="">
                  <span className="flex items-center justify-start min-w-[108px]">
                    <TeamGroupAvatar users={user.users} maxDisplay={3} />
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] hover:bg-primary-dark hover:text-white px-2 py-1 cursor-pointer text-[13px] text-secondary-darker>">
                  Leave Team
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamAgent;
