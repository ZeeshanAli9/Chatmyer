import React from "react";
import codesnippit from "../assets/Images/codesnippit.svg";
import codecopy from "../assets/Images/document_copy.svg";
import info from "../assets/Images/widgeinfo.svg";
import { widgetsetting } from "../Utils/Constant";

const WidgetSetting = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white   min-w-[700px] border-b border-[#EBEAED]">
        <div>
          <h2 className="text-lg font-medium text-secondary-dark">
            Widget Setting
          </h2>
        </div>
      </div>
      <div
        className="   bg-[#FAFAFA] px-6 py-6 min-w-[700px]"
        style={{ height: `calc(100vh - 110px)` }}
      >
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-4  mb-6">
          {widgetsetting.map((user) => (
            <div
              key={user.id}
              className="bg-white px-8 py-6 rounded h-[140px] "
            >
              <div className="flex items-center gap-2 mb-8">
                <span>
                  <img src={user.img} alt="" />
                </span>
                <span className="text-lg text-secondary-dark font-semibold">
                  {user.name}
                </span>
                <div className="ml-3 relative">
                  <img src={info} alt="" className="cursor-pointer group" />
                  <div className="absolute z-50 top-0 right-0 hidden group-hover:block">
                    {user.hovermsg}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {user.name === "Direct url" ? (
                  <>
                    <span>{user.url}</span>
                    <span className="cursor-pointer">
                      <img src={user.copyimg} alt="" />
                    </span>
                  </>
                ) : (
                  <>
                    <span>Enable</span>
                    <div className="flex items-center gap-16">
                      <div className="flex announcement">
                        <label class="toggle">
                          <input type="checkbox" id="toggle-checkbox" />
                          <span class="slider"></span>
                        </label>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded px-6 py-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="block">
              <img src={codesnippit} alt="" />
            </span>
            <span className="text-lg text-secondary-dark font-semibold block">
              Widget code snipets
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="mb-2">
                Kindly add this link tag before the closing of your head tag
              </p>
              <div className="relative bg-primary-light rounded px-6 py-4 cursor-pointer">
                <div className="absolute right-6 top-4 flex items-center gap-2">
                  <span>
                    <img src={codecopy} alt="" />
                  </span>
                  <span className="text-sm text-secondary-dark">Copy Code</span>
                </div>
                <div>
                  def respond(input_text): <br /> input_text =
                  input_text.lower() <br /> for key in responses: <br /> if
                  input_text in key: <br /> return random.choice(responses[key]){" "}
                  <br /> return "I'm sorry, I don't understand that." def
                  respond(input_text): <br /> input_text = input_text.lower(){" "}
                  <br /> for key in responses: <br /> if input_text in key:{" "}
                  <br /> return random.choice(responses[key]) <br /> return "I'm
                  sorry, I don't understand that."
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2">
                Kindly add this link tag before the closing of your head tag
              </p>
              <div className="relative bg-primary-light rounded px-6 py-4 cursor-pointer">
                <div className="absolute right-6 top-4 flex items-center gap-2">
                  <span>
                    <img src={codecopy} alt="" />
                  </span>
                  <span className="text-sm text-secondary-dark">Copy Code</span>
                </div>
                <div>
                  def respond(input_text): <br /> input_text =
                  input_text.lower() <br /> for key in responses: <br /> if
                  input_text in key: <br /> return random.choice(responses[key]){" "}
                  <br /> return "I'm sorry, I don't understand that." def
                  respond(input_text): <br /> input_text = input_text.lower(){" "}
                  <br /> for key in responses: <br /> if input_text in key:{" "}
                  <br /> return random.choice(responses[key]) <br /> return "I'm
                  sorry, I don't understand that."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetSetting;
