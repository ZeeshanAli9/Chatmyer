import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/routes";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const handleSubmit = (e) => {
    navigate(`${routes.ChangePassword}`);

    setOtp(["", "", "", ""]);
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
        <div className=" bg-white shadow rounded   px-7 py-4 max-w-[400px] ">
          <div className="pb-5">
            <div className="border-b border-[#E8E8E8]">
              <h2 className="text-2xl text-secondary-darker font-semibold  my-4">
                Verify OTP
              </h2>
              <p className="text-secondary-light  my-4">
                Enter the code we sent to your email starting with
                max........@gmail.com
              </p>
            </div>

            <div className="text-secondary-dark my-4">
              Code <span className="text-[#E92C2C] text-xs">*</span>
            </div>
            <div className="my-2 flex items-center justify-between gap-3">
              {otp.map((data, index) => (
                <input
                  type="text"
                  name=""
                  id=""
                  maxLength="1"
                  className={`border border-[#EBEAED]  h-[74px] w-[74px] rounded  text-3xl outline-none text-center text-[#969696]`}
                  value={data}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && e.target.previousSibling) {
                      // Check if the current input is empty
                      if (e.target.value === "") {
                        // Prevent the default behavior of the Backspace key
                        e.preventDefault();
                        // Focus on the previous sibling element
                        e.target.previousSibling.focus();
                      }
                    }
                  }}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-end">
              <span className="text-sm text-right text-primary-dark cursor-pointer">
                Didn't receive your code
              </span>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              <div
                onClick={handleSubmit}
                className="w-full bg-primary-dark text-white rounded-lg py-1 font-medium text-xl text-center cursor-pointer"
              >
                Confirm
              </div>
              <div className="w-full border border-[#EBEAED] text-secondary-darker font-medium text-xl   rounded-lg py-1 text-center cursor-pointer">
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
