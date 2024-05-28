import React, { useEffect, useState } from "react";
import {
  inboxuser,
  inprogressticket,
  ticketbyuser,
  ticketChatboxmessage,
  transfertraniee,
} from "../Utils/Constant";
import UserChatsListTemplate from "../Components/UIElementsTemplate/UserChatsListTemplate";
import { generateColor, initialGenerator } from "../Utils/Helpermethods";
import clossebutton from "../assets/Images/closeButton.png";
import arrowleft from "../assets/Images/arrow_left.svg";
import arrowdown from "../assets/Images/downarrow.svg";
import people from "../assets/Images/people.svg";
import copied from "../assets/Images/document_copy.svg";
import downarrow_bg from "../assets/Images/doenarrow_bg.svg";

import UserProfileDetailTemplate from "../Components/UIElementsTemplate/UserProfileDetailTemplate";
import Chatboxfooter from "../Components/Chatbox/Chatboxfooter";
import TicketChatTemplate from "../Components/UIElementsTemplate/TicketChatTemplate";
import UserTicketTemplate from "../Components/UIElementsTemplate/UserTicketTemplate";
import ticket from "../assets/Images/ticket.svg";

const Tickets = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [lightcolor, setLightcolor] = useState("");
  const [userDetail, setUserDetail] = useState(false);
  const [selectedUserDetail, setSelectedUserDetail] = useState("");
  const [transferAssignee, setTransferAssignee] = useState(false);
  const [activeTab, setActivetab] = useState("salesteam");

  useEffect(() => {
    setLightcolor(generateColor());
  }, []);
  const user = inboxuser[0];
  useEffect(() => {
    setSelectedUser(user);
  });

  const hanldeUserClick = (id) => {
    setUserDetail(true);
    console.log(id);
    document.querySelector("body").style.overflow = "hidden";
    const ClickedUser = inboxuser.filter((user) => user.id === id);
    console.log(ClickedUser);
    setSelectedUserDetail(ClickedUser);
  };
  return (
    <>
      <section>
        <div className="flex">
          {/* User Detail ? */}
          <div className="min-w-[330px] max-w-[380px]  h-[100vh] overflow-y-hidden border-r border-[#E8E8E8]">
            {/* Tab All unread  */}
            <div className="flex items-center justify-between border-b border-[#E8E8E8] px-4 pt-4 h-[60px]">
              <div className="flex items-center gap-3 ">
                <div className="flex items-center gap-2">
                  <span className=" text-sm font-medium cursor-pointer text-secondary-dark hover:text-primary-dark">
                    In Progress
                  </span>
                  <span>
                    <img src={downarrow_bg} alt="" />
                  </span>
                </div>
                <div className="flex items-center gap-2 relative group">
                  <span className=" text-sm font-medium cursor-pointer text-secondary-dark group-hover:text-primary-dark ">
                    Assign to me
                  </span>
                  <span>
                    <img src={downarrow_bg} alt="" />
                  </span>
                  <div className="absolute top-3 left-0 z-30 pb-2 hidden group-hover:block  pt-3">
                    <div className="bg-white p-1 shadow rounded min-w-[113px]">
                      <p className="text-xs font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer">
                        Assign to me
                      </p>
                      <p className="text-xs font-medium p-2  hover:bg-primary-light rounded cursor-pointer">
                        Assign to Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className=" text-sm font-medium cursor-pointer text-secondary-dark">
                    Sort by
                  </span>
                  <span>
                    <img src={downarrow_bg} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#FBFAFF] px-6 py-4 ">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="">
                    <img src={ticket} alt="" />
                  </span>
                  <span className="text-sm text-secondary-dark font-medium">
                    By Ticket
                  </span>
                </div>
                <div>
                  <img src={downarrow_bg} alt="" />
                </div>
              </div>
            </div>
            {/* userdata  map */}
            <div
              className={` custom_scrollbar relative ${
                !userDetail ? "overflow-y-scroll" : "overflow-hidden"
              }`}
              style={{
                height: "calc(100vh - 118px)",
              }}
            >
              {inprogressticket?.map((user) => (
                <UserChatsListTemplate user={user} />
              ))}

              {/* purpose : bakground color  */}
              {userDetail && (
                <div className="fixed z-20 inset-0 bg-[#00000042]"></div>
              )}
              {userDetail && (
                <div className="absolute inset-0 z-30 bg-white  py-3">
                  <div className="flex items-center justify-end px-3">
                    <span onClick={() => setUserDetail(false)}>
                      <img
                        src={clossebutton}
                        alt=""
                        className="cursor-pointer"
                      />
                    </span>
                  </div>
                  {selectedUserDetail?.map((user) => (
                    <UserProfileDetailTemplate data={user} />
                  ))}
                </div>
              )}
            </div>
            {/* user detail Pop Up  */}
          </div>

          {/* chatbox section */}
          {activeTab === "salesteam" && (
            <div className="min-w-[730px] lg:w-full h-full flex flex-col ">
              <div className="  border-b border-[#E8E8E8] flex items-center justify-between px-6 py-[7px] h-[60px]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 ">
                      <span className="text-base font-medium text-secondary-dark">
                        ID: xy-jkl876
                      </span>
                      <span className="cursor-pointer">
                        <img
                          src={copied}
                          alt=""
                          className="hover:fill-primary-lighter"
                        />
                      </span>
                    </div>
                    <div>
                      <div
                        className="flex items-center gap-2 border rounded-md border-[#E8E8E8] px-2 py-1 cursor-pointer relative"
                        onClick={() => setTransferAssignee(!transferAssignee)}
                      >
                        <span className="text-[13px] font-medium text-secondary-darker">
                          Transfer Assignee
                        </span>
                        <span>
                          <img src={arrowleft} alt="" />
                        </span>
                        {transferAssignee && (
                          <div className="fixed inset-0 z-40 bg-[#00000025]"></div>
                        )}
                        {transferAssignee && (
                          <div className="absolute inset-0 z-50 bg-[white] -left-32 top-8 w-[400px] h-[350px]  overflow-scroll">
                            {transfertraniee.map((user) => (
                              <div className="flex items-center justify-between  mb-1 last:mb-0 hover:bg-primary-lighter px-4 py-3">
                                <div>
                                  <img src={user.image} alt="" />
                                </div>
                                <div className="basis-[60%]">
                                  <div>{user.name}</div>
                                  <div>{user.email}</div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] hover:bg-primary-dark hover:text-white px-2 py-1 cursor-pointer text-[13px] text-secondary-darker>">
                                    Transfer
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] px-2 py-1 cursor-pointer relative group">
                      <span>
                        <img src={people} alt="" />
                      </span>
                      <span className="text-[13px] font-medium text-secondary-darker">
                        Sales Team
                      </span>
                      <span>
                        <img src={arrowdown} alt="" className="" />
                      </span>
                      <div className="absolute top-5 left-0 z-30 pb-2 hidden group-hover:block w-full  pt-3">
                        <div className="bg-white p-1 shadow rounded ">
                          <p
                            className="text-[13px] font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer"
                            data-tab="allteam"
                            onClick={(e) =>
                              setActivetab(
                                e.currentTarget.getAttribute("data-tab")
                              )
                            }
                          >
                            All Team
                          </p>
                          <p
                            className="text-[13px] font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer"
                            data-tab="Marketingteam"
                          >
                            Marketing team
                          </p>
                          <p
                            className="text-[13px] font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer"
                            data-tab="accountsteam"
                          >
                            Accounts team
                          </p>
                          <p
                            className="text-[13px] font-medium p-2  hover:bg-primary-light rounded cursor-pointer"
                            data-tab="socialteam"
                          >
                            Social team
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-primary-light text-[13px] font-medium text-primary-dark flex items-center justify-center">
                        {initialGenerator("Quinten Kortum")}
                      </div>
                      <span className="text-sm font-medium text-secondary-darker">
                        Quinten Kortum
                      </span>
                    </div>
                    <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] px-2 py-1 cursor-pointer group relative">
                      <span className="text-sm font-medium text-secondary-darker">
                        Pending
                      </span>
                      <span>
                        <img src={arrowdown} alt="" />
                      </span>
                      <div className="absolute top-5 left-0 z-30 pb-2 hidden group-hover:block  pt-3">
                        <div className="bg-white p-1 shadow rounded ">
                          <p className="text-xs font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer">
                            Inprogress
                          </p>
                          <p className="text-xs font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer">
                            Rejected
                          </p>
                          <p className="text-xs font-medium p-2  hover:bg-primary-light rounded cursor-pointer">
                            Completed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overflow-y-scroll px-7 mr-3 bg-[#FAFAFA]"
                style={{ height: "calc(100vh - 248px)" }}
              >
                {ticketChatboxmessage?.map((user) => (
                  <TicketChatTemplate data={user} />
                ))}
                <div className=" flex items-center justify-center my-5">
                  <div className="bg-[#E6DFFF] px-3 py-2 flex items-center justify-center rounded">
                    <p className="text-[13px] font-medium text-primary-dark ">
                      Ticket close at 11 Jan 2024 at 3PM
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Chatboxfooter />
              </div>
            </div>
          )}
          {activeTab === "allteam" && (
            <div className="min-w-[730px] lg:w-full h-full flex flex-col ">
              <div className="  border-b border-[#E8E8E8] flex items-center justify-between px-6 py-[7px] h-[60px]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2 border rounded border-[#E8E8E8] px-2 py-1 cursor-pointer hover:bg-primary-light ">
                        <span className="text-[13px] font-medium text-secondary-darker flex items-center">
                          Completed{" "}
                          <span className="text-[10px] text-white w-3 h-3 flex items-center justify-center rounded-full ml-1 bg-primary-dark">
                            7
                          </span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 border rounded border-[#E8E8E8] px-2 py-1 cursor-pointer hover:bg-primary-light ">
                        <span className="text-sm font-medium text-secondary-darker flex items-center ">
                          Todo
                          <span className="text-[10px] text-white w-3 h-3 flex items-center justify-center rounded-full ml-1 bg-primary-dark">
                            7
                          </span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 border rounded border-[#E8E8E8] px-2 py-1 cursor-pointer hover:bg-primary-light ">
                        <span className="text-sm font-medium text-secondary-darker flex items-center">
                          Pending
                          <span className="text-[10px] text-white w-3 h-3 flex items-center justify-center rounded-full ml-1 bg-primary-dark">
                            7
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] px-3 py-1 cursor-pointer relative group hover:border-primary-dark">
                      <span>
                        <img src={people} alt="" className=".people" />
                      </span>
                      <span className="text-sm font-medium text-secondary-darker  hover:border-primary-dark group-hover:text-primary-dark">
                        All Team
                      </span>
                      <span>
                        <img src={arrowdown} alt="" className=".people" />
                      </span>
                      <div className="absolute top-5 left-0 z-30 pb-2 hidden group-hover:block w-full  pt-3">
                        <div className="bg-white p-1 shadow rounded ">
                          <p
                            className="text-xs font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer"
                            data-tab="salesteam"
                            onClick={(e) =>
                              setActivetab(
                                e.currentTarget.getAttribute("data-tab")
                              )
                            }
                          >
                            Sales team
                          </p>
                          <p
                            className="text-xs font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer"
                            data-tab="Marketingteam"
                          >
                            Marketing team
                          </p>
                          <p
                            className="text-xs font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer"
                            data-tab="accountsteam"
                          >
                            Accounts team
                          </p>
                          <p
                            className="text-xs font-medium p-2  hover:bg-primary-light rounded cursor-pointer"
                            data-tab="socialteam"
                          >
                            Social team
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border rounded-md border-[#E8E8E8] hover:border-primary-dark px-2 py-1 cursor-pointer group relative">
                      <span className="text-sm font-medium text-secondary-darker group-hover:text-primary-dark">
                        Pending
                      </span>
                      <span>
                        <img src={arrowdown} alt="" />
                      </span>
                      <div className="absolute top-5 left-0 z-30 pb-2 hidden group-hover:block  pt-3">
                        <div className="bg-white p-1 shadow rounded ">
                          <p className="text-[13px] font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer">
                            Inprogress
                          </p>
                          <p className="text-[13px] font-medium p-2 mb-1 hover:bg-primary-light rounded cursor-pointer">
                            Rejected
                          </p>
                          <p className="text-[13px] font-medium p-2  hover:bg-primary-light rounded cursor-pointer">
                            Completed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overflow-y-scroll px-7 mr-3 bg-[#FAFAFA]"
                style={{ height: "calc(100vh - 120px)" }}
              >
                {ticketbyuser?.map((user) => (
                  <UserTicketTemplate data={user} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Tickets;
