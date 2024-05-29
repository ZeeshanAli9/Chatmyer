import React, { useState } from "react";
import TeamsHeader from "../Components/Teams/TeamsHeader";

const InviteNewUser = () => {
  const [category, setCategory] = useState("Teams");
  return (
    <>
      <TeamsHeader category={category} setCategory={setCategory} />
      <div className=" py-48   min-w-[700px]">
        <div className="max-w-[600px] mx-auto">
          <div className="">
            <h2 className="text-2xl font-bold text-center text-secondary-darker">
              Invite new user
            </h2>
          </div>
          <div className="my-10">
            <div className="mb-10 ">
              <input
                type="text"
                id="title"
                className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-3 w-full block outline-none rounded text-sm text-secondary-dark font-medium placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-medium"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <button className="bg-primary-dark px-4 py-3 outline-none w-full text-sm font-medium text-white rounded">
                Invite member
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteNewUser;
