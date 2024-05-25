import React, { useState } from "react";
import settingimg from "../assets/Images/settingimg.png";
import shape from "../assets/Images/CombinedShape.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/routes";
import toast from "react-hot-toast";

const Settings = () => {
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);

  const navigate = useNavigate();
  const handleOtp = () => {
    toast.success("OTP Sent to Your Email");
    setTimeout(() => {
      navigate(routes.VerifyOtp);
    }, 1000); // 3000ms = 3 seconds
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white   min-w-[700px] border-b border-[#EBEAED]">
        <h2 className="text-lg font-medium text-secondary-dark">Help Centre</h2>
      </div>

      <div className="bg-[#FAFAFA] w-full   h-[100vh] px-6 py-4">
        <div className="bg-white px-6 py-4 min-w-[655px] lg:min-w-[800px] max-w-[1200px]">
          <div>
            <h2 className="text-2xl font-medium text-secondary-darker">
              Edit your profile
            </h2>
          </div>
          <div className="bg-custom-gradient p-8 custombg relative z-40 rounded">
            <div>
              <img src={settingimg} alt="" />
            </div>
            <div className="flex justify-between items-end mt-4">
              <div>
                <h3 className="text-lg text-secondary-darker font-semibold">
                  Maxbert
                </h3>
                <p className="text-sm text-secondary-dark mt-1 font-medium">
                  Maxber659@gmail.com
                </p>
              </div>
              <div className="bg-white px-4 py-1 cursor-pointer rounded">
                <label className="text-sm text-secondary-dark cursor-pointer font-medium">
                  Upload new picture
                  <input
                    type="file"
                    accept="image/*"
                    className="cursor-pointer"
                    hidden
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="my-6">
            <div className="mb-6 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-light text-sm block mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="title"
                className="border border-[#EBEAED] px-4 py-3 w-full block outline-none rounded-sm text-sm text-secondary-dark font-medium placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-medium"
                placeholder="Maxbert"
              />
            </div>
            <div className="mb-6 ">
              <label
                htmlFor="Email"
                className="font-medium text-secondary-light text-sm block mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                className="border border-[#EBEAED] px-4 py-3 w-full block outline-none rounded-sm text-sm text-secondary-darker font-medium placeholder:text-sm placeholder:text-secondary-darker placeholder:font-medium"
                placeholder="Maxber659@gmail.com"
                disabled
              />
            </div>
          </div>
          <div>
            <div>
              <span className="font-medium text-secondary-light text-sm block mb-3">
                Properties
              </span>
            </div>
            <div className="flex  gap-3">
              <div className=" border-[0.5px] border-[#EBEAED] rounded-md flex items-center justify-between px-2 py-1 cursor-pointer ">
                <div className="flex items-center">
                  <figure className="bg-[#E2C83B] h-6 w-6 rounded-full mr-2 cursor-pointer">
                    <img src="" alt="" />
                  </figure>
                  <h2 className="text-sm font-medium text-secondary-dark">
                    Maxmyer
                  </h2>
                </div>
              </div>
              <div className=" border-[0.5px] border-[#EBEAED] rounded-md flex items-center justify-between px-2 py-1 cursor-pointer ">
                <div className="flex items-center">
                  <figure className="bg-primary-dark h-6 w-6 rounded-full mr-2 cursor-pointer">
                    <img src={shape} alt="" />
                  </figure>
                  <h2 className="text-sm font-medium text-secondary-dark">
                    Tecmyer
                  </h2>
                </div>
              </div>
              <div className=" border-[0.5px] border-[#EBEAED] rounded-md flex items-center justify-between px-2 py-1 cursor-pointer ">
                <h2 className="text-sm font-medium text-secondary-dark">+1</h2>
              </div>
            </div>
          </div>
          <div className="my-6  pb-6 border-b border-[#EBEAED] flex">
            <div className="relative">
              <div
                className="bg-primary-dark py-2 px-4 font-semibold text-sm text-white rounded cursor-pointer"
                onClick={() => setChangePasswordPopup(true)}
              >
                Change password
              </div>

              {changePasswordPopup && (
                <div className="absolute py-4 px-3 border border-[#EAE9EC] rounded bg-white  top-0 -right-48 w-[186px] z-20">
                  <div>
                    <p className="text-xs text-secondary-light">
                      We will send a confirmation code to your email
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-2">
                    <button
                      className="block py-1 text-[#040415] hover:bg-primary-lighter w-full rounded text-xs"
                      onClick={handleOtp}
                    >
                      Send code
                    </button>
                    <button
                      className="block py-1 text-[#040415] hover:bg-primary-lighter w-full rounded text-xs"
                      onClick={() => setChangePasswordPopup(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button className="px-3 font-semibold text-secondary-darker text-sm  py-1 border border-[#E8E8E8] rounded hover:bg-primary-dark hover:text-white transition-all duration-300">
              Cancel
            </button>
            <button className="px-3 py-1 font-semibold text-sm border border-[#E8E8E8] rounded bg-primary-dark text-white ">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
