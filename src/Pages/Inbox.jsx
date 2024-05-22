import React, { useEffect, useState } from "react";
import { chatboxmessage, inboxuser } from "../Utils/Constant";
import menudots from "../assets/chatbox/menudots.svg";
import UserChatsListTemplate from "../Components/UIElementsTemplate/UserChatsListTemplate";
import { generateColor, initialGenerator } from "../Utils/Helpermethods";
import UserChatTemplate from "../Components/UIElementsTemplate/UserChatTemplate";
import clossebutton from "../assets/Images/closeButton.png";
import UserProfileDetailTemplate from "../Components/UIElementsTemplate/UserProfileDetailTemplate";
import Chatboxfooter from "../Components/Chatbox/Chatboxfooter";
const Inbox = () => {
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
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const unreaduser = inboxuser.filter((user) => user.unread);

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
              <div className="flex items-center ">
                <div
                  onClick={() => setActiveTab("All")}
                  className={`py-3 px-4 text-xs font-semibold cursor-pointer transition-all duration-300 ${
                    activeTab === "All"
                      ? "text-secondary-dark border-b-[2px] border-primary-dark"
                      : "text-[#84818A] border-b-[2px] border-transparent"
                  }`}
                >
                  All
                </div>
                <div
                  onClick={() => setActiveTab("Unread")}
                  className={` relative py-3 px-4 text-xs font-semibold cursor-pointer transition-all duration-300 flex ${
                    activeTab === "Unread"
                      ? "text-secondary-dark border-b-[2px] border-primary-dark"
                      : "text-[#84818A] border-b-[2px] border-transparent"
                  }`}
                >
                  Unread{" "}
                  <span
                    className=" ml-1 bg-primary-dark text-white rounded-full h-4 w-4 font-normal text-[10px] items-center flex justify-center
                  "
                  >
                    {unreaduser.length}
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="sort"
                  className="py-3 px-4 text-xs font-medium cursor-pointer text-[#84818A]"
                >
                  Sort by
                </label>
                {/* <select onChange={handleChange} id="sort">
                  <option value=""></option>
                  <option value="A to Z">A to Z</option>
                  <option value="Z to A">Z to A</option>
                </select> */}
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
              {activeTab === "All" &&
                inboxuser?.map((user) => (
                  <UserChatsListTemplate
                    user={user}
                    onClick={() => hanldeUserClick(user.id)}
                  />
                ))}
              {activeTab === "Unread" &&
                inboxuser
                  ?.filter((user) => user.unread)
                  .map((user) => <UserChatsListTemplate user={user} />)}

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
              <div className="flex items-center">
                {selectedUser && (
                  <>
                    <div
                      className={`relative h-10 w-10 rounded-full flex items-center justify-center  mr-3`}
                      style={{
                        backgroundColor: lightcolor,
                      }}
                    >
                      <h1>{initialGenerator(selectedUser?.Username)}</h1>
                      {selectedUser.status === "Active" && (
                        <span className="absolute -right-1 bottom-0 w-4 h-4 rounded-full bg-[#00BA34] border-[3px] border-white"></span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg text-secondary-dark font-medium">
                        {user.Username}
                      </h2>
                      <p
                        className={`user_message text-sm -mt-1 text-secondary-lighter `}
                      >
                        RileyCooper754@gmail.com
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div>
                <figure className="cursor-pointer">
                  <img src={menudots} alt="" />
                </figure>
              </div>
            </div>
            <div
              className="overflow-y-scroll px-6 mr-3"
              style={{ height: "calc(100vh - 248px)" }}
            >
              {chatboxmessage.map((user) => (
                <UserChatTemplate data={user} lightcolor={lightcolor} />
              ))}
            </div>
            <Chatboxfooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default Inbox;
