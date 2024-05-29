import React from "react";
import { initialGenerator } from "../../Utils/Helpermethods";

const TeamGroupAvatar = ({ users, maxDisplay }) => {
  const displayUsers = users.slice(0, maxDisplay);
  const extraUsersCount = users.length - maxDisplay;

  return (
    <div className="flex items-center">
      {displayUsers.map((user, index) => (
        <div key={index} className="ml-[-8px] first:ml-0">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-Manrope font-semibold text-white text-sm bg-[#cea857d5]">
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              initialGenerator(user.name)
            )}
          </div>
        </div>
      ))}
      {extraUsersCount > 0 && (
        <div className="ml-2 text-secondary-light font-medium text-sm font-Manrope">
          +{extraUsersCount}
        </div>
      )}
    </div>
  );
};

export default TeamGroupAvatar;
