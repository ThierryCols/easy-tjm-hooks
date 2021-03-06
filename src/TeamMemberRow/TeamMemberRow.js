import React from "react";
import "./tmr.css";

const TeamMemberRow = ({ teamMember, updateDaysStaffed, updateTJM }) => (
  <tr>
    <td>{teamMember.role}</td>
    <td>
      <input value={teamMember.daysStaffed} onChange={e => updateDaysStaffed(teamMember.id, e.target.value)} />
    </td>
    <td>
      <input value={teamMember.tjm} onChange={e => updateTJM(teamMember.id, e.target.value)} />
    </td>
  </tr>
);

export default TeamMemberRow;
