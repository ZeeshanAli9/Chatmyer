import React from "react";
import { generateColor, initialGenerator } from "../../Utils/Helpermethods";
import clock from "../../assets/Images/clock.svg";
import notification from "../../assets/Images/notificationbing.svg";
import userlocation from "../../assets/Images/location.svg";
import trash from "../../assets/Images/trash.svg";
import block from "../../assets/Images/block.svg";
const UserProfileDetailTemplate = ({ data }) => {
  const lightcolor = generateColor();
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center flex-col px-3 ">
            <div
              style={{
                backgroundColor: lightcolor,
              }}
              className={`relative h-[72px] w-[72px] text-xl rounded-full flex items-center justify-center`}
            >
              <h1>{initialGenerator(data?.Username)}</h1>
              {data.status === "Active" && (
                <span className="absolute top-0 left-1 w-4 h-4 rounded-full bg-[#00BA34] border-[3px] border-white"></span>
              )}
            </div>

            <div className="text-center my-2">
              <p className="font-semibold text-secondary-darker my-1">
                {data.Username}
              </p>
              <p className="font-normal text-xs text-secondary-light my-1">
                {data.email}
              </p>
              <p className="font-normal text-xs text-secondary-light my-1">
                ID: #12345
              </p>
              <div className="flex items-center text-sm text-secondary-light justify-center gap-3 my-1">
                <span className="">
                  <img src={userlocation} alt="" />
                </span>{" "}
                <span>Phoenix, CA</span>
              </div>
              <div className="flex items-center text-sm text-secondary-light justify-center gap-3">
                <span>
                  <img src={clock} alt="" />
                </span>{" "}
                <span>9:43 AM (UTC-5)</span>
              </div>
            </div>
          </div>
          <div className="py-4 border-t border-b border-[#EBEAED] flex itemcenter justify-center rounded">
            <div className="px-2 py-1 border border-[#EBEAED] rounded flex items-center justify-center gap-2 cursor-pointer">
              <div>
                <img src={notification} alt="" />
              </div>
              <div>Notification</div>
              <div className="flex">
                <label class="toggle">
                  <input type="checkbox" id="toggle-checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="py-4  border-b border-[#EBEAED]">
            <div className="    rounded flex items-center justify-center ">
              <div className="relative px-2 py-1 flex gap-2 rounded  items-center justify-center hover:bg-primary-light cursor-pointer group border border-[#EBEAED]">
                <div>
                  <img src={trash} alt="" />
                </div>
                <div>Delete Conversation</div>
                <div className="absolute top-8  hidden group-hover:block pt-2">
                  <div className="bg-white p-2 rounded border border-[#EAE9EC]">
                    <p className="text-xs text-secondary-dark">
                      "Are you sure you want to delete this conversation, this
                      action can't be undone"
                    </p>
                    <div className="flex items-center justify-end mt-2 gap-1">
                      <button className="px-2 py-1 rounded border border-[#EAE9EC] text-xs font-semibold text-secondary-dark">
                        Cancel
                      </button>
                      <button className="px-2 py-1 rounded border border-[#EAE9EC] text-xs font-semibold text-white bg-primary-dark">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 border-t border-[#EAE9EC] flex items-center justify-center mb-2">
          <button className="bg-[#E92C2C] py-2 px-4 rounded flex items-center justify-between text-white">
            <span className="mr-2">
              <img src={block} alt="" />
            </span>{" "}
            Block
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfileDetailTemplate;
