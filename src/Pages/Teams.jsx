import React, { useState } from "react";
import { Teamagent, TeamHeaderCategory } from "../Utils/Constant";
import AddNewTeam from "./AddNewTeam";
import TeamUser from "../Components/Teams/TeamUser";
import TeamGroupAvatar from "../Components/Teams/TeamGroupAvatar";

import TeamsDetail from "../Components/Teams/TeamsDetail";
import TeamsHeader from "../Components/Teams/TeamsHeader";
import { Outlet } from "react-router-dom";

const Teams = () => {
  const [category, setCategory] = useState("Teams");
  const [createNewTeam, setCreateNewTeam] = useState(false);
  const [inviteUser, setInviteUser] = useState(false);

  return (
    <>
      <div className="min-w-[700px]">
        <TeamsHeader category={category} setCategory={setCategory} />
        {/* Team */}

        {category === "Teams" && <TeamsDetail />}
        {category === "Users" && <TeamUser />}
      </div>
    </>
  );
};

export default Teams;
