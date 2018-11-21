import React, { useState } from "react";
import "./App.css";
import logo from "./sipios.png";

import TeamMemberButtons from "./TeamMemberButtons";
import TeamMemberTable from "./TeamMemberTable";
import TeamMemberRow from "./TeamMemberRow";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [counter, setCounter] = useState(0);

  function addTeamMember(role) {
    setTeamMembers(teamMembers.concat([{ role: role, tjm: 0, daysStaffed: 0, id: counter }]));
    setCounter(counter + 1);
  }

  function updateTeamMemberValue(attribute) {
    return function(index, value) {
      const tempTeamMembers = teamMembers;
      tempTeamMembers[index][attribute] = value;
      setTeamMembers(tempTeamMembers);
    };
  }

  function getWeeklyCost() {
    return teamMembers.reduce((weeklyCost, teamMember) => {
      return weeklyCost + parseFloat(teamMember.daysStaffed) * parseFloat(teamMember.tjm);
    }, 0);
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>Add some members to your team:</div>
      <TeamMemberButtons addTeamMember={addTeamMember} />
      <TeamMemberTable>
        {teamMembers.map((teamMember, idx) => (
          <TeamMemberRow
            key={teamMember.id}
            teamMember={teamMember}
            updateTJM={updateTeamMemberValue("tjm")}
            updateDaysStaffed={updateTeamMemberValue("daysStaffed")}
          />
        ))}
      </TeamMemberTable>
      <div>
        Weekly Cost : <span>{getWeeklyCost()}</span>
      </div>
    </div>
  );
};

export default App;
