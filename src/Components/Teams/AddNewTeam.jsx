import React from "react";

const AddNewTeam = () => {
  return (
    <>
      <div className=" py-28  min-w-[700px]">
        <div className="max-w-[600px] mx-auto">
          <div className="border-b border-[#EBEAED] pb-10">
            <div className="">
              <h2 className="text-2xl font-bold text-center text-secondary-darker">
                Create new team
              </h2>
            </div>
            <div className="my-10">
              <div className="mb-10 ">
                <label
                  htmlFor="title"
                  className="font-bold text-sm text-secondary-lighter block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="title"
                  className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-3 w-full block outline-none rounded text-sm text-secondary-dark font-semibold placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-semibold"
                  placeholder="Marketing Team"
                />
              </div>

              {/* add member */}

              <div className="mb-10 ">
                <label
                  htmlFor="title"
                  className="font-bold text-sm text-secondary-lighter block mb-2"
                >
                  Add members
                </label>
                <div className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-3 w-full block outline-none rounded text-sm text-secondary-dark font-semibold "></div>
              </div>

              {/* topics? */}
              <div className="mb-10 ">
                <label
                  htmlFor="title"
                  className="font-bold text-sm text-secondary-lighter block mb-2"
                >
                  Topics
                </label>
                <input
                  type="text"
                  id="title"
                  className="border border-[#EBEAED] bg-[#FAFAFA] px-4 py-3 w-full block outline-none rounded text-sm text-secondary-dark font-semibold placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-semibold"
                  placeholder="Enter your topic"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-8">
            <button className="px-3 font-medium text-secondary-darker  py-1 border border-[#E8E8E8] rounded hover:bg-primary-dark hover:text-white transition-all duration-300">
              Discard
            </button>
            <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white ">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewTeam;
