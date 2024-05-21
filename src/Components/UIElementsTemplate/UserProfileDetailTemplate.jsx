import React from "react";
import { generateColor, initialGenerator } from "../../Utils/Helpermethods";

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
              className={`relative h-12 w-12 rounded-full flex items-center justify-center`}
            >
              <h1>{initialGenerator(data?.Username)}</h1>
              {data.status === "Active" && (
                <span className="absolute top-0 -left-1 w-4 h-4 rounded-full bg-[#00BA34] border-[3px] border-white"></span>
              )}
            </div>

            <div className="text-center">
              <p className="font-semibold text-secondary-darker">
                {data.Username}
              </p>
              <p className="font-normal text-xs text-secondary-light">
                {data.email}
              </p>
              <div className="flex items-center text-sm text-secondary-light justify-center gap-3">
                <span></span> <span>Phoenix, CA</span>
              </div>
              <div className="flex items-center text-sm text-secondary-light justify-center gap-3">
                <span></span> <span>9:43 AM (UTC-5)</span>
              </div>
            </div>
          </div>
          <div className="py-4 border-t border-b border-[#EBEAED]">
            <div className="px-2 py-1 border border-[#EBEAED] rounded flex items-center gap-1 cursor-pointer">
              <div></div>
              <div>Notification</div>
              <div></div>
            </div>
          </div>
          <div className="py-4  border-b border-[#EBEAED]">
            <div className="    rounded flex items-center justify-center gap-1 ">
              <div className="relative px-2 py-1 flex flex-col items-center justify-center hover:bg-primary-light cursor-pointer group border border-[#EBEAED]">
                <div></div>
                <div>Delete Conversation</div>
                <div className="absolute top-8 p-1 hidden group-hover:block bg-white border border-[#EAE9EC] rounded">
                  <div>
                    <p>
                      "Are you sure you want to delete this conversation, this
                      action can't be undone"
                    </p>
                  </div>
                  <div>
                    <button>Cancel</button>
                    <button>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 border-t border-[#EAE9EC] flex items-center justify-center mb-2">
          <button className="bg-[#E92C2C] py-2 px-4 rounded">
            <span></span> Block
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfileDetailTemplate;
