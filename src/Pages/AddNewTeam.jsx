import React, { useState } from "react";
import TeamGroupAvatar from "../Components/Teams/TeamGroupAvatar";
import { addNewTeam } from "../Utils/Constant";
import chatbox from "../assets/Images/Chatbox.png";
import { initialGenerator } from "../Utils/Helpermethods";
import TeamsHeader from "../Components/Teams/TeamsHeader";

const AddNewTeam = () => {
  const [category, setCategory] = useState("Teams");
  const [adduser, setAddUser] = useState(false);
  const newTeamMembers = addNewTeam.flatMap((team) => team.users);

  return (
    <>
      <TeamsHeader category={category} setCategory={setCategory} />
      <div className="py-28 min-w-[700px]">
        <div className="max-w-[600px] mx-auto">
          <div className="border-b border-[#EBEAED] pb-10">
            <div className="">
              <h2 className="text-2xl font-bold text-center text-secondary-darker">
                Create new team
              </h2>
            </div>
            <div className="my-10">
              <div className="mb-10">
                <label
                  htmlFor="title"
                  className="font-bold text-sm text-secondary-lighter block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="title"
                  className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-3 w-full block outline-none rounded text-sm text-secondary-dark font-semibold placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-semibold"
                  placeholder="Marketing Team"
                />
              </div>

              {/* Add members */}
              <div className="mb-10">
                <label
                  htmlFor="add-members"
                  className="font-bold text-sm text-secondary-lighter block mb-2"
                >
                  Add members
                </label>
                <div className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-1.5 w-full flex items-center gap-3 outline-none rounded text-sm text-secondary-dark font-semibold relative">
                  <div>
                    {addNewTeam.map((team, index) => (
                      <TeamGroupAvatar
                        key={index}
                        users={team.users}
                        maxDisplay={team.users.length}
                      />
                    ))}
                  </div>
                  <div onClick={() => setAddUser(!adduser)}>
                    <img
                      src={chatbox}
                      alt=""
                      className="h-5 w-5 object-cover cursor-pointer"
                    />
                  </div>
                  {adduser && (
                    <div className="bg-white  absolute left-0 top-16 w-full p-5">
                      {newTeamMembers.map((data, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center mb-4"
                        >
                          <div className="flex items-center gap-2">
                            <span>
                              {data.image ? (
                                <img
                                  src={data.image}
                                  alt=""
                                  className="h-8 w-8 object-cover"
                                />
                              ) : (
                                <div className="h-8 w-8 rounded-full text-sm text-white font-medium flex items-center justify-center bg-[#f16d6d]">
                                  {initialGenerator(data.name)}
                                </div>
                              )}
                            </span>
                            <span>{data.name}</span>
                          </div>
                          <div>
                            <img
                              src={chatbox}
                              alt=""
                              className="w-4 h-4 object-cover cursor-pointer"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Topics */}
              <div className="mb-10">
                <label
                  htmlFor="topics"
                  className="font-bold text-sm text-secondary-lighter block mb-2"
                >
                  Topics
                </label>
                <input
                  type="text"
                  id="topics"
                  className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-3 w-full block outline-none rounded text-sm text-secondary-dark font-semibold placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-semibold"
                  placeholder="Enter your topic"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-8">
            <button className="px-3 font-medium text-secondary-darker py-1 border border-[#E8E8E8] rounded hover:bg-primary-dark hover:text-white transition-all duration-300">
              Discard
            </button>
            <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewTeam;
