import React from "react";
import TeamMemberButton from "./teamMemberButton";
import "./tmb.css";

const TeamMemberButtons = ({ addTeamMember }) => (
  <div className="team-member-buttons">
    {["Dev", "Archi", "CA"].map(role => (
      <TeamMemberButton key={role} handleClick={() => addTeamMember(role)}>
        {role}
      </TeamMemberButton>
    ))}
  </div>
);

export default TeamMemberButtons;
