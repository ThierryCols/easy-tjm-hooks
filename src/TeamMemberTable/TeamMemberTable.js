import React from "react";
import "./tmt.css";

const TeamMemberTable = ({ children }) => (
  <table className="members-table">
    <thead>
      <tr>
        <th>Role</th>
        <th>Days Staffed per Week</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default TeamMemberTable;
