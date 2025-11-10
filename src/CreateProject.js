//create UI form
import {React, useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function CreateProject() {

    //for saving users
    const [users, setUsers] = useState([]);

    //for saving teams
    const [teams, setTeams] = useState([]);

    //input data state
    const [formData, setFormData] = useState({
        proj_name: '',
        proj_desc: '',
        prod_owner_id: '',
        mgr_id: '',
        team_id: ''
    });

    //getUsers
    useEffect(() => {
        axios
        .get("http://localhost:9000/getUsers")
        .then(function (response) {
          setUsers(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        }, []);

    //getTeams
    useEffect(() => {
        axios
        .get("http://localhost:9000/getTeams")
        .then((response) => setTeams(response.data))
        .catch((error) => console.log(error));
    }, []);

    //update the state for each input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        /*e.preventDefault();
        console.log("Submitting:", formData);

        //send to server
        await fetch("http://localhost:3000/projects", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });
        alert("Project created!");*/
    };

    //send to server when it is submitted
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting:", formData);

        try {
            const response = await axios.post("http://localhost:9000/api/createProject", formData);
            console.log("Project created:", response.data);
            alert("Project created successfully");

            //initiate the form
            setFormData({
                proj_name: '',
                proj_desc: '',
                prod_owner_id: '',
                mgr_id: '',
                team_id: ''
            });
        } catch (error) {
            console.error("Error creating project:", error);
            alert("Error while creating project!");
        }
    };

    //UI rendering
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
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
                <label>Project Name:</label><br />
                <input type="text" name="proj_name" value={formData.proj_name} onChange={handleChange} required/><br />

                <label>Project Description:</label><br />
                <textarea name="proj_desc" value={formData.proj_desc} onChange={handleChange}required></textarea><br />

                <label>Product Owner:</label><br />
                <select
                    name="prod_owner_id"
                    value={formData.prod_owner_id}
                    onChange={(e) => setFormData({ ...formData, prod_owner_id: e.target.value })}
                    required
                >
                    <option value="">Select Product Owner</option>
                    {users.map((user, index) => (
                        <option key={index} value={user._id}>
                            {user.firstName} {user.lastName}
                    </option>
                ))}
                </select><br />

                <label>Manager:</label><br />
                <select 
                    name="mgr_id"
                    value = {formData.mgr_id}
                    onChange={(e) => setFormData({...formData, mgr_id: e.target.value})}
                    required
                >
                    <option value="">Select Manager</option>
                    {users.map((user, index) => (
                        <option key={index} value={user._id}>
                            {user.firstName} {user.lastName}
                        </option>
                    ))}
                </select><br />

                <label>Team:</label><br />
                <select
                    name="team_id"
                    value={formData.team_id}
                    onChange={(e) => setFormData({ ...formData, team_id: e.target.value })}
                    required
                >
                <option value="">Select Team</option>
                {teams.map((team, index) => (
                    <option key={index} value={team._id}>
                        {team.team_name}
                    </option>
                ))}
                </select><br />

                <button type="submit">Create Project</button>
            </form>

            <p className="text-center mt-3">
            Already have an account? <Link to="/Login">Login</Link>
            <br />
            Don’t have one yet? <Link to="/Signup">Signup</Link>
            <br />
            Want to create a team too? <Link to="/CreateTeam">Create Team</Link>
            </p>

        </div>
    );
}

export default CreateProject;