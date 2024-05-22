import React, { useEffect, useState } from "react";
import { chatboxmessage, inboxuser, inprogressticket } from "../Utils/Constant";
import menudots from "../assets/chatbox/menudots.svg";
import UserChatsListTemplate from "../Components/UIElementsTemplate/UserChatsListTemplate";
import { generateColor, initialGenerator } from "../Utils/Helpermethods";
import UserChatTemplate from "../Components/UIElementsTemplate/UserChatTemplate";
import clossebutton from "../assets/Images/closeButton.png";
import UserProfileDetailTemplate from "../Components/UIElementsTemplate/UserProfileDetailTemplate";
import Chatboxfooter from "../Components/Chatbox/Chatboxfooter";

const Tickets = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [lightcolor, setLightcolor] = useState("");
  const [userDetail, setUserDetail] = useState(false);
  const [selectedUserDetail, setSelectedUserDetail] = useState("");
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
            <div className="flex items-center justify-between border-b border-[#E8E8E8] px-4 pt-4">
              <div className="flex items-center "></div>
              <div>
                <label
                  htmlFor="sort"
                  className="py-3 px-4 text-xs font-medium cursor-pointer text-[#84818A]"
                >
                  Sort by
                </label>
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
                <UserChatsListTemplate
                  user={user}
                  onClick={() => hanldeUserClick(user.id)}
                />
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
                  {selectedUserDetail.map((user) => (
                    <UserProfileDetailTemplate data={user} />
                  ))}
                </div>
              )}
            </div>
            {/* user detail Pop Up  */}
          </div>

          {/* chatbox section */}
          <div className="min-w-[550px] lg:w-full h-full flex flex-col">
            <div className="  border-b border-[#E8E8E8] flex items-center justify-between px-6 py-[7px]">
              <div className="flex items-center"></div>
            </div>
            <div
              className="overflow-y-scroll px-6 mr-3"
              style={{ height: "calc(100vh - 248px)" }}
            ></div>
            <Chatboxfooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tickets;
