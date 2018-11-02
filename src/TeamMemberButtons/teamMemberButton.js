import React from "react";

const TeamMemberButton = ({ handleClick, children }) => (
  <button className="team-member-btn" onClick={handleClick}>
    {children}
  </button>
);

export default TeamMemberButton;
