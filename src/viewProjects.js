import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/getProjects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Projects</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Manager</th>
            <th>Product Owner</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, index) => (
            <tr key={index}>
              <td>{p.project_name}</td>
              <td>{p.description}</td>
              <td>{p.manager_details?.firstName}</td>
              <td>{p.owner_details?.firstName}</td>
              <td>{p.team_details?.team_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewProjects;
