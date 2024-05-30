import React, { useState } from "react";
import { TeamHeaderCategory } from "../../Utils/Constant";
import { NavLink } from "react-router-dom";
import { routes } from "../../Routes/routes";

const TeamsHeader = ({ category, setCategory }) => {
  const handleCategory = (name) => {
    setCategory(name);
  };
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white    border-b border-[#EBEAED] ">
        <div className="flex bg-primary-light rounded gap-1 p-1">
          {TeamHeaderCategory.map((data) => (
            <div
              className={`px-7 py-1  rounded text-xs font-medium text-secondary-darker cursor-pointer transition-all duration-300 ${
                category === data.name ? "bg-white" : ""
              }`}
              onClick={() => handleCategory(data.name)}
              key={data.id}
            >
              {data.name}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            to={routes.CreateNewTeam}
            className={({ isActive }) =>
              isActive
                ? "border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2 bg-primary-dark text-white cursor-pointer text-xs group"
                : "border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2  text-secondary-darker cursor-pointer text-xs group"
            }
          >
            Create Team
          </NavLink>
          <NavLink
            to={routes.InviteUser}
            className={({ isActive }) =>
              isActive
                ? "border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2 bg-primary-dark text-white cursor-pointer text-xs group"
                : "border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2  text-secondary-darker cursor-pointer text-xs group"
            }
          >
            Invite User
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TeamsHeader;
