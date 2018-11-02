import React, { Component } from "react";
import "./App.css";
import logo from "./sipios.png";

import TeamMemberButtons from "./TeamMemberButtons";
import TeamMemberTable from "./TeamMemberTable";
import TeamMemberRow from "./TeamMemberRow";

class App extends Component {
  state = { teamMembers: [], counter: 0 };

  addTeamMember = role =>
    this.setState({
      teamMembers: this.state.teamMembers.concat([{ role: role, tjm: 0, daysStaffed: 0, id: this.state.counter }]),
      counter: this.state.counter + 1
    });

  updateTeamMemberTJM = (index, tjm) => {
    const tempTeamMembers = this.state.teamMembers;
    tempTeamMembers[index].tjm = tjm;
    this.setState({ teamMembers: tempTeamMembers });
  };

  updateTeamMemberDaysStaffed = (index, daysStaffed) => {
    const tempTeamMembers = this.state.teamMembers;
    tempTeamMembers[index].daysStaffed = daysStaffed;
    this.setState({ teamMembers: tempTeamMembers });
  };

  render() {
    const { teamMembers } = this.state;
    const weeklyCost = teamMembers.reduce((weeklyCost, teamMember) => {
      return weeklyCost + parseFloat(teamMember.daysStaffed) * parseFloat(teamMember.tjm);
    }, 0);
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Add some members to your team:</div>
        <TeamMemberButtons addTeamMember={this.addTeamMember} />
        <TeamMemberTable>
          {teamMembers.map((teamMember, idx) => (
            <TeamMemberRow
              key={teamMember.id}
              teamMember={teamMember}
              updateTJM={this.updateTeamMemberTJM}
              updateDaysStaffed={this.updateTeamMemberDaysStaffed}
            />
          ))}
        </TeamMemberTable>
        <div>
          Weekly Cost : <span>{weeklyCost}</span>
        </div>
      </div>
    );
  }
}

export default App;
