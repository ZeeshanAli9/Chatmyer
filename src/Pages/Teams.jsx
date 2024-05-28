import React, { useState } from "react";
import { TeamHeaderCategory } from "../Utils/Constant";
import AddNewTeam from "../Components/Teams/AddNewTeam";
import TeamUser from "../Components/Teams/TeamUser";

const Teams = () => {
  const [category, setCategory] = useState("Teams");
  const [createNewTeam, setCreateNewTeam] = useState(false);
  const [inviteUser, setInviteUser] = useState(false);

  const handleNewTeam = () => {
    setCreateNewTeam(true);
    setInviteUser(false);
    setCategory("");
  };
  const handleInviteUser = () => {
    setInviteUser(true);
    setCreateNewTeam(false);
    setCategory("");
  };
  const handleCategory = (name) => {
    setCategory(name);
    setCreateNewTeam(false);
    setInviteUser(false);
  };
  return (
    <>
      <div className="min-w-[700px]">
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
            <span
              className={`border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2 hover:bg-primary-dark hover:text-white cursor-pointer  group transition-all text-secondary-darker text-xs ${
                createNewTeam
                  ? "bg-primary-dark text-white"
                  : "text-secondary-darker"
              }`}
              onClick={handleNewTeam}
            >
              Create Team
            </span>
            <span
              className={`border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2 hover:bg-primary-dark hover:text-white cursor-pointer text-secondary-darker group transition-all  text-xs ${
                inviteUser
                  ? "bg-primary-dark text-white"
                  : "text-secondary-darker"
              }`}
              onClick={handleInviteUser}
            >
              Invite User
            </span>
          </div>
        </div>

        {category === "Teams" && <div>1</div>}
        {category === "Users" && <TeamUser />}
        {createNewTeam && <AddNewTeam />}
        {inviteUser && (
          <div className=" py-48   min-w-[700px]">
            <div className="max-w-[600px] mx-auto">
              <div className="">
                <h2 className="text-2xl font-bold text-center text-secondary-darker">
                  Invite new user
                </h2>
              </div>
              <div className="my-10">
                <div className="mb-10 ">
                  <input
                    type="text"
                    id="title"
                    className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-3 w-full block outline-none rounded text-sm text-secondary-dark font-medium placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-medium"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <button className="bg-primary-dark px-4 py-3 outline-none w-full text-sm font-medium text-white rounded">
                    Invite member
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Teams;
