import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/api/createTeam", {
        team_name: teamName
      });
      alert("Team created successfully!");
      setTeamName("");
    } catch (error) {
      alert("Error creating team");
    }
  };

  return (
    <div style={{
      padding: "20px",
      maxWidth: "400px",
      margin: "50px auto",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "30px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>    
      <h2>Create New Team</h2>
      <form onSubmit={handleSubmit}>
        <label>Team Name:</label><br />
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        /><br />
        <button type="submit">Create Team</button>
      </form>

      <p className="text-center mt-3">
        Already have an account? <Link to="/Login">Login</Link>
        <br />
        Don’t have one yet? <Link to="/Signup">Signup</Link>
        <br />
        Want to create a project too? <Link to="/CreateProject">Create Project</Link>
    </p>

    </div>
  );
}

export default CreateTeam;
