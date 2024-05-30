import React, { useState } from "react";
import dropdownarrow from "../../assets/Images/Createticket_dropdown.svg";
import { AssignedtoTeam } from "../../Utils/Constant";

const AddingTeam = () => {
  const [assignedTo, setAssignedTo] = useState({
    title: "Default",
    active: false,
  });
  const [assignedMember, setAssignedMember] = useState({
    title: "Add customer",
    email: "",
    img: "",
    active: false,
  });
  const [menuitem, setMenuItem] = useState(false);

  const handleClickedUser = (id) => {
    const selected = AssignedtoTeam.find((user) => user.id === id);
    setAssignedTo((prev) => ({
      ...prev,
      title: selected.name,
      active: false,
    }));
  };

  const submenu = AssignedtoTeam.map((user) => user.submenu);
  const Teams = submenu[0];
  const Members = submenu[1];

  const handleTeam = (id) => {
    const selectedTeam = Teams.find((user) => user.id === id);
    setAssignedTo((prev) => ({
      ...prev,
      title: selectedTeam.name,
      active: false,
    }));
  };

  const handleMember = (id) => {
    const selectedMember = Members.find((user) => user.id === id);
    setAssignedMember({
      title: selectedMember.name,
      email: selectedMember.email,
      img: selectedMember.image,
      active: false,
    });
    setMenuItem(true);
  };

  return (
    <>
      <div
        className="flex items-center justify-between w-full"
        onClick={() => {
          setAssignedTo((prev) => ({
            ...prev,
            active: !prev.active,
          }));
          setMenuItem(false);
        }}
      >
        {menuitem ? (
          <div className="flex items-center gap-4">
            <img src={assignedMember.img} alt="" />
            <div>
              <div className="font-semibold text-secondary-darker">
                {assignedMember.title}
              </div>
              <div className="font-medium text-secondary-lighter">
                {assignedMember.email}
              </div>
            </div>
          </div>
        ) : (
          <div>{assignedTo.title}</div>
        )}

        <div>
          {assignedTo.title === "Default" ? (
            <img src={dropdownarrow} alt="Dropdown Arrow" />
          ) : (
            <button className="px-3 py-1 font-medium border border-[#E8E8E8] rounded bg-primary-dark text-white">
              Change
            </button>
          )}
        </div>
      </div>

      {assignedTo.active && (
        <div className="absolute z-40 left-0 top-12 bg-white w-full shadow-md rounded-b overflow-auto min-h-12 px-5 py-3">
          {AssignedtoTeam.map((user) => (
            <div
              key={user.id}
              className="border border-[#E8E8E8] px-3 py-2 mb-4 hover:border-primary-dark hover:text-primary-dark rounded font-medium text-secondary-dark"
              onClick={() => handleClickedUser(user.id)}
            >
              {user.name}
            </div>
          ))}
        </div>
      )}

      {assignedTo.title === "Team" && !assignedTo.active && (
        <div className="absolute z-40 left-0 top-12 bg-white w-full shadow-md rounded-b overflow-auto min-h-12 px-5 py-3">
          {Teams.map((user) => (
            <div
              key={user.id}
              className="border border-[#E8E8E8] px-3 py-2 mb-4 hover:border-primary-dark hover:text-primary-dark rounded font-medium text-secondary-dark"
              onClick={() => handleTeam(user.id)}
            >
              {user.name}
            </div>
          ))}
        </div>
      )}

      {assignedTo.title === "Member" && !assignedTo.active && !menuitem && (
        <div className="absolute z-40 left-0 top-12 bg-white w-full shadow-md rounded-b overflow-auto min-h-12 py-1 h-48">
          {Members.map((user) => (
            <div
              key={user.id}
              className="mb-1 rounded font-medium text-secondary-dark hover:bg-primary-lighter px-5 py-2"
              onClick={() => handleMember(user.id)}
            >
              <div className="flex items-center gap-4">
                <img src={user.image} alt="" />
                <div>
                  <div className="font-semibold text-secondary-darker">
                    {user.name}
                  </div>
                  <div className="font-medium text-secondary-lighter">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AddingTeam;
