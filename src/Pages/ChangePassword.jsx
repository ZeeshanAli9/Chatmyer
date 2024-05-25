import React from "react";
import passwordeye from "../assets/Images/passwordeye.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/routes";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const navigate = useNavigate();

  const handleChangebtn = () => {
    toast.success("Password Changed Successfully!");
    setTimeout(() => {
      navigate("/settings");
    }, 1000);
  };
  return (
    <>
      <div className=" bg-white px-6 py-3 flex items-center border-b border-[#E8E8E8]">
        <span className="border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-primary-lighter group transition-all">
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98477 10.3486 0 6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3486 2.98477 13.3333 6.66667 13.3333Z"
                fill="#8F8AA0"
                className="hover:fill-primary-dark"
              />
              <path
                d="M8.99898 6.16728H5.53898L6.68565 5.02061C6.87898 4.82728 6.87898 4.50728 6.68565 4.31395C6.49232 4.12061 6.17232 4.12061 5.97898 4.31395L3.97898 6.31395C3.78565 6.50728 3.78565 6.82728 3.97898 7.02061L5.97898 9.02061C6.07898 9.12061 6.20565 9.16728 6.33232 9.16728C6.45898 9.16728 6.58565 9.12061 6.68565 9.02061C6.87898 8.82728 6.87898 8.50728 6.68565 8.31395L5.53898 7.16728H8.99898C9.27232 7.16728 9.49898 6.94061 9.49898 6.66728C9.49898 6.39395 9.27232 6.16728 8.99898 6.16728Z"
                fill="#8F8AA0"
                className="group-hover:fill-primary-dark"
              />
            </svg>
          </span>
          <span className="text-xs font-medium text-secondary-darker">
            Back
          </span>
        </span>
      </div>
      <div
        className="bg-custom-gradient-sec relative z-40 flex items-center justify-center  verifyotp"
        style={{ height: `calc(100vh - 110px)` }}
      >
        <div className=" bg-white shadow rounded   px-5 py-4 max-w-[400px] ">
          <div className="border-b border-[#E8E8E8]">
            <h2 className="text-2xl text-secondary-darker font-semibold  my-4">
              Change your password
            </h2>
            <p className="text-secondary-light  my-4">
              Enter your new password you want to change
            </p>
          </div>

          <div className="my-5">
            <label
              htmlFor="password"
              className="after:content-['*'] after:ml-0.5 after:text-[#E92C2C] text-secondary-dark"
            >
              Password
            </label>
            <div className="relative mt-2">
              <input
                type="password"
                id="password"
                className="flex w-full rounded border border-[#E8E8E8] px-3 py-2 outline-none"
                placeholder="at least 8 characters"
              />
              <div className="absolute top-[50%] -translate-y-[50%] right-3">
                <img src={passwordeye} alt="" />
              </div>
            </div>
          </div>
          <div className="my-5">
            <label
              htmlFor="Confirmpassword"
              className="after:content-['*'] after:ml-0.5 after:text-[#E92C2C] text-secondary-dark"
            >
              Confirm password
            </label>
            <div className="relative mt-2">
              <input
                type="password"
                id="Confirmpassword"
                className="flex w-full rounded border border-[#E8E8E8] px-3 py-2 outline-none"
                placeholder="at least 8 characters"
              />
              <div className="absolute top-[50%] -translate-y-[50%] right-3">
                <img src={passwordeye} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div
              className="w-full bg-primary-dark text-white rounded-lg py-1 font-medium text-xl text-center cursor-pointer"
              onClick={handleChangebtn}
            >
              Change password
            </div>
            <div className="w-full border border-[#EBEAED] text-secondary-darker font-medium text-xl   rounded-lg py-1 text-center cursor-pointer">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
