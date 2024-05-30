import React, { useEffect, useState } from "react";
import {
  generateColor,
  generateLightColor,
  initialGenerator,
} from "../../Utils/Helpermethods";
import seenmsg from "../../assets/Images/done_all.svg";
import profile from "../../assets/Topbar/userimg.svg";

const UserChat = ({ data, lightcolor }) => {
  return (
    <>
      <div key={data.id} className="first:mt-4 last:4">
        {/* for visitor  */}
        {data?.user_type === "visitor" && (
          <div className="flex gap-2  my-2">
            <div
              className=" relative flex items-center justify-center  h-9 w-9 rounded-full"
              style={{
                backgroundColor: lightcolor,
              }}
            >
              {initialGenerator(data.name)}
              {data.status === "seen" && (
                <span className="absolute -right-1 -bottom-1 w-4 h-4 rounded-full bg-[#00BA34] border-[3px] border-white"></span>
              )}
            </div>
            <div>
              {data.message_type === "text" && (
                <div className="max-w-[400px] ml-auto lg:max-w-[520px] bg-[White]  rounded px-3 py-2 font-medium text-sm text-secondary-light">
                  <p>{data.message}</p>
                </div>
              )}
              {data.message_type === "image" && (
                <div className="max-w-[400px] ml-auto lg:max-w-[520px] bg-[White]  rounded px-3 py-2  ">
                  <img src={data.message} alt="xyz" />
                </div>
              )}
              {data.message_type === "text_image" && (
                <>
                  <div className="max-w-[400px] ml-auto lg:max-w-[520px] bg-[White]  rounded px-3 py-2 font-medium text-sm text-secondary-light">
                    <p className="mb-2">{data.messagetext}</p>

                    <img src={data.message} alt="xyz" />
                  </div>
                </>
              )}
              <span className="font-medium text-xs text-secondary-lighter block my-2">
                {data.time}
              </span>
            </div>
          </div>
        )}

        {/* for agent */}
        {data?.user_type === "agent" && (
          <div className="flex flex-row-reverse  gap-2 my-4">
            <div className="flex items-center justify-center  h-9 w-9 rounded-full">
              <img src={profile} alt="" />
            </div>
            <div>
              {data.message_type === "text" && (
                <div className="max-w-[400px] ml-auto lg:max-w-[520px] bg-primary-light rounded px-3 py-2 font-medium text-sm text-secondary-light mr-auto">
                  <p className="mr-auto">{data.message}</p>
                </div>
              )}
              {data.message_type === "image" && (
                <div className="max-w-[400px] ml-auto lg:max-w-[520px] bg-primary-light rounded px-3 py-2 ">
                  <img src={data.message} alt="xyz" />
                </div>
              )}
              {data.message_type === "text_image" && (
                <>
                  <div className="max-w-[400px] ml-auto lg:max-w-[520px] bg-primary-light rounded px-3 py-2 font-medium text-sm text-secondary-light">
                    <p className="mb-2">{data.messagetext}</p>
                    <img src={data.message} alt="xyz" />
                  </div>
                </>
              )}

              <div className="flex justify-end items-center my-2 mr-1">
                <span className="font-medium text-xs text-secondary-lighter flex justify-end">
                  {data.time}
                </span>
                {data.status === "seen" && (
                  <div className="ml-3">
                    <img
                      src={seenmsg}
                      alt=""
                      style={{
                        filter: `brightness(0) saturate(100%) invert(37%) sepia(45%) saturate(3528%) hue-rotate(234deg) brightness(88%) contrast(94%)`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className=" flex items-center justify-center my-5">
          <div className="  flex items-center justify-center drop-shadow-sm">
            <p className="text-xs font-medium px-3 py-2 bg-white text-secondary-lighter border border-[#E8E8E8] rounded ">
              11 Jan 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserChat;
