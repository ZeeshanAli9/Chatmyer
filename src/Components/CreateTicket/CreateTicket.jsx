import React, { useState } from "react";
import gallery from "../../assets/chatbox/gallery.png";
import archive_tick from "../../assets/chatbox/archive-tick.svg";
import happyemoji from "../../assets/chatbox/happyemoji.svg";
import linkSquare from "../../assets/chatbox/link-square.svg";
import sms_star from "../../assets/chatbox/sms-star.svg";
import dropdownarrow from "../../assets/Images/Createticket_dropdown.svg";
import { createticketCustomerlist } from "../../Utils/Constant";

const CreateTicket = () => {
  const [selectcustomer, setSelectcustomer] = useState({
    title: "Add customer",
    email: "",
    active: false,
  });

  const [assignedTeam, setAssignedTeam] = useState({
    title: "Default",
    active: false,
  });
  const [assignedMember, setAssignedMember] = useState({
    title: "Add customer",
    email: "",
    active: false,
  });

  const handleselected = (id) => {
    const customerSelected = createticketCustomerlist.filter(
      (user) => user.id === id
    );

    const customerobj = customerSelected[0];
    console.log(customerobj);

    setSelectcustomer({
      title: customerobj.name,
      email: customerobj.email,
      active: false,
    });
  };
  return (
    <>
      <div className="bg-[#FAFAFA] min-w-[700px] h-[100vh] px-12 py-12 lg:px-20">
        <div className="mx-auto bg-white px-6 py-8 ">
          <div>
            <h2 className="text-2xl font-medium text-secondary-darker">
              Create Ticket
            </h2>
          </div>
          <div className="my-6">
            <div className="mb-6 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-light text-sm block mb-3"
              >
                Subject
              </label>
              <input
                type="text"
                id="title"
                className="border border-[#EBEAED] px-4 py-3 w-full block outline-none rounded-sm text-sm text-secondary-lighter font-medium placeholder:text-sm placeholder:text-secondary-lighter placeholder:font-medium"
                placeholder="Type Title here..."
              />
            </div>

            <div className="mb-6 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-light text-sm block mb-3"
              >
                Customer
              </label>
              <div className="border border-[#EBEAED] px-4 py-1 w-full min-h-10  rounded-sm text-sm text-secondary-dark font-medium outline-none relative">
                <div
                  className="flex items-center justify-between cursor-pointer  "
                  onClick={() =>
                    setSelectcustomer((prev) => ({
                      ...prev,
                      active: !selectcustomer.active,
                    }))
                  }
                >
                  <div className="h-8">
                    <h2 className="font-medium text-sm text-secondary-dark">
                      {selectcustomer?.title}
                    </h2>

                    <p className="font-medium text-xs text-secondary-lighter">
                      {selectcustomer?.email}
                    </p>
                  </div>
                  {selectcustomer.title === "Add customer" ? (
                    <div>
                      <img src={dropdownarrow} alt="" />
                    </div>
                  ) : (
                    <div>
                      <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white ">
                        Change
                      </button>
                    </div>
                  )}
                </div>
                {selectcustomer.active && (
                  <div className="absolute z-40 left-0 top-12 bg-[#ffffff] w-full  shadow-md rounded-b overflow-auto  h-64">
                    {createticketCustomerlist.map((user) => (
                      <div
                        className="hover:bg-primary-light w-full px-4 py-2 cursor-pointer"
                        key={user.id}
                        onClick={() => handleselected(user.id)}
                      >
                        <h2 className="font-medium text-sm text-secondary-dark mb-1">
                          {user.name}
                        </h2>

                        <p className="font-medium text-xs text-secondary-lighter">
                          {user.email}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6 ">
              <label
                htmlFor="title"
                className="font-medium text-secondary-light text-sm block mb-3"
              >
                Assigned to Team/Member
              </label>
              <div className="border border-[#EBEAED] px-4 py-1 w-full min-h-10  rounded-sm text-sm text-secondary-dark font-medium outline-none relative cursor-pointer">
                <div></div>
                {selectcustomer.title === "Add customer" ? (
                  <div>
                    <img src={dropdownarrow} alt="" />
                  </div>
                ) : (
                  <div>
                    <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white ">
                      Change
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6 ">
              <div>
                <label
                  htmlFor="title"
                  className="font-medium text-secondary-light text-sm block mb-3"
                >
                  Discription
                </label>
              </div>
              <div className=" h-[130px] border border-[#EBEAED] rounded px-6">
                <div className="py-2">
                  <textarea
                    name=""
                    id=""
                    className="w-full outline-none h-[63px] resize-none text-sm text-secondary-lighter font-medium placeholder:text-sm paceholder:text-secondary-lighter placeholder:font-medium"
                    placeholder="Write reply here..."
                  ></textarea>
                </div>
                <div className="flex items-center  py-1 ">
                  <div className="flex gap-4">
                    <figure className="cursor-pointer">
                      <img src={happyemoji} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={gallery} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={linkSquare} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={archive_tick} alt="" />
                    </figure>
                    <figure className="cursor-pointer">
                      <img src={sms_star} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button className="px-3 font-medium text-secondary-darker  py-1 border border-[#E8E8E8] rounded hover:bg-primary-dark hover:text-white transition-all duration-300">
              Cancel
            </button>
            <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white ">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
