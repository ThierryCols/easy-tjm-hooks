import React from "react";
import TeamMemberButton from "./TeamMemberButton";
import "./tmb.css";

const TeamMemberButtons = ({ addTeamMember }) => (
  <div className="team-member-buttons">
    {[["Dev", "👨‍💻"], ["Archi", "👩‍🏫"], ["CA", "🕵️‍"], ["UX", "👩‍🎨"], ["Project Master", "🤵"]].map(role => (
      <TeamMemberButton key={role[0]} handleClick={() => addTeamMember(role[0])}>
        {role[1]}
      </TeamMemberButton>
    ))}
  </div>
);

export default TeamMemberButtons;
