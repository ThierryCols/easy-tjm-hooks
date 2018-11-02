import React from "react";
import TeamMemberButton from "./TeamMemberButton";
import "./tmb.css";

const TeamMemberButtons = ({ addTeamMember }) => (
  <div className="team-member-buttons">
    {[["Dev", "👨‍💻"], ["Archi", "👩‍🏫"], ["CA", "🕵️‍"], ["UX", "👩‍🎨"], ["DP", "🤵"]].map(role => (
      <TeamMemberButton key={role[0]} handleClick={() => addTeamMember(role[0])}>
        {role[1]}
        <span>{role[0]}</span>
      </TeamMemberButton>
    ))}
  </div>
);

export default TeamMemberButtons;
