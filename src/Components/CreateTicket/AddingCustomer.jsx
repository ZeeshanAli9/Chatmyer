import React, { useState } from "react";
import { createticketCustomerlist } from "../../Utils/Constant";
import dropdownarrow from "../../assets/Images/Createticket_dropdown.svg";

const AddingCustomer = () => {
  const [selectcustomer, setSelectcustomer] = useState({
    title: "Add customer",
    email: "",
    active: false,
  });

  const handleselected = (id) => {
    const customerSelected = createticketCustomerlist.filter(
      (user) => user.id === id
    );

    const customerobj = customerSelected[0];

    setSelectcustomer({
      title: customerobj.name,
      email: customerobj.email,
      active: false,
    });
  };
  return (
    <>
      <div
        className="flex items-center justify-between cursor-pointer w-full "
        onClick={() =>
          setSelectcustomer((prev) => ({
            ...prev,
            active: !selectcustomer.active,
          }))
        }
      >
        {selectcustomer?.title === "Add customer" ? (
          <div className="flex items-center">
            <h2 className="font-medium text-sm text-secondary-dark">
              {selectcustomer?.title}
            </h2>
          </div>
        ) : (
          <div className="h-8">
            <h2 className="font-medium text-sm text-secondary-dark">
              {selectcustomer?.title}
            </h2>

            <p className="font-medium text-xs text-secondary-lighter">
              {selectcustomer?.email}
            </p>
          </div>
        )}{" "}
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
    </>
  );
};

export default AddingCustomer;
