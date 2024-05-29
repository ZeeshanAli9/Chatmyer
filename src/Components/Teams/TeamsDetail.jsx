import React, { useEffect, useRef, useState } from "react";
import { Teamagent } from "../../Utils/Constant";
import TeamGroupAvatar from "./TeamGroupAvatar";
import dots from "../../assets/Images/announcmentdots.svg";
import close from "../../assets/Images/closeButton.png";
import { initialGenerator } from "../../Utils/Helpermethods";

const TeamsDetail = () => {
  const [popup, setPopup] = useState(false);
  const [renamePopup, setRenamePopup] = useState(false);
  const [addUser, setAddUser] = useState(true);

  const popupRef = useRef(null);
  const handleannouncement = (id) => {
    setPopup(id == popup ? null : id);
  };

  const userref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const handleAdduser = (id) => {
    setAddUser(id == addUser ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userref.current && !userref.current.contains(event.target)) {
        setAddUser(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userref]);

  return (
    <>
      <div className="min-w-[700px]">
        <div className="flex items-center justify-between px-6 py-4 bg-white   min-w-[700px] border-b border-[#EBEAED] mb-4">
          <div className="flex items-center justify-between min-w-[420px]">
            <div className="text-xs font-medium text-secondary-light">Name</div>
            <div className="">
              <span className="flex items-center justify-center text-xs font-medium text-secondary-light min-w-[108px]">
                Member
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center text-xs font-medium text-secondary-light">
              Action
            </div>
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
                <div className="relative">
                  <span className="flex items-center justify-start min-w-[108px]">
                    <TeamGroupAvatar users={user.users} maxDisplay={3} />
                  </span>
                  {addUser == user.id && (
                    <div
                      className="absolute -left-[200px] top-[40px]"
                      ref={userref}
                    >
                      <div className="bg-white px-4 py-7 w-[470px] h-[470px] z-50 drop-shadow-2xl border border-[#EBEAED] rounded relative ">
                        <span className="addUser"></span>
                        <div className="flex gap-2 mb-5">
                          <input
                            type="text"
                            className="w-full p-2 outline-none rounded border border-[#EBEAED]"
                            placeholder="Search members..."
                          />
                          <span className="bg-primary-dark text-white text-sm font-medium px-5 py-3 rounded flex items-center justify-center">
                            Add
                          </span>
                        </div>
                        <div>
                          <div className="mb-5">
                            <h2 className="text-xl text-secondary-dark font-medium">
                              Members
                            </h2>
                          </div>
                          {user.users.map((data) => (
                            <div className="flex justify-between items-center mb-4">
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
                                  src={close}
                                  alt=""
                                  className="w-4 h-4 object-cover cursor-pointer"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="relative flex items-center justify-center">
                  <div
                    className={`h-6 w-6 flex items-center justify-center rounded hover:drop-shadow-md hover:bg-white transition-all duration-200 cursor-pointer group ${
                      popup == user.id && " bg-white drop-shadow-md"
                    }`}
                    onClick={() => handleannouncement(user.id)}
                  >
                    <img src={dots} alt="" />
                  </div>
                  {popup == user.id && (
                    <div
                      className="absolute z-30 top-2 -left-[145px]  bg-white rounded p-2 w-[130px] drop-shadow-md flex flex-col gap-1"
                      ref={popupRef}
                    >
                      <div className="flex  items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer border border-[#EBEAED] rounded">
                        <span className="text-xs font-medium text-[#040415]">
                          Delete
                        </span>
                      </div>
                      <div className="flex  items-center hover:bg-primary-lighter px-2 py-2 cursor-pointer border border-[#EBEAED] rounded">
                        <span
                          className="text-xs font-medium text-[#040415]"
                          onClick={() => handleAdduser(user.id)}
                        >
                          Add member
                        </span>
                      </div>
                      <div className="flex  items-center hover:bg-primary-lighter px-2 py-2  cursor-pointer border border-[#EBEAED] rounded">
                        <span
                          className="text-xs font-medium text-[#040415]"
                          onClick={() => setRenamePopup(true)}
                        >
                          Rename
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {renamePopup && (
          <div className="fixed inset-0 z-40 bg-[#00000013]"></div>
        )}
        {renamePopup && (
          <div className="absolute bg-white px-8 py-8 min-w-[800px] z-50 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="flex items-center justify-between my-8">
              <p className="text-2xl text-secondary-darker font-medium">
                Change <span className="text-primary-dark">Sales Team</span>{" "}
                name
              </p>
              <span
                className="cursor-pointer"
                onClick={() => setRenamePopup(false)}
              >
                <img src={close} alt="" />
              </span>
            </div>
            <div className="mb-10 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-dark block mb-4"
              >
                Enter new name
              </label>
              <input
                type="text"
                id="title"
                className="border border-[#EBEAED] px-5 py-4 w-full block outline-none rounded-sm text-sm text-secondary-light font-medium placeholder:text-sm placeholder:text-secondary-light placeholder:font-medium"
                placeholder="Type new team name..."
              />
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                className="px-3 font-medium text-secondary-darker  py-1 border border-[#E8E8E8] rounded hover:bg-primary-dark hover:text-white transition-all duration-300"
                onClick={() => setRenamePopup(false)}
              >
                Cancel
              </button>
              <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white ">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TeamsDetail;
