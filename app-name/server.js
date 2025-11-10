const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const Project = require("./Projects.js");
const User = require("./UserSchema.js");
const Team = require("./TeamName.js");

require("dotenv").config();

const userRoutes = require("./UserRoutes.js");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

const mongoString = process.env.MONGO_URI || "mongodb+srv://new_user_01:1234@icsi418y-0.vmbmrv5.mongodb.net/projectDB";
mongoose.connect(mongoString);

const database = mongoose.connection;
database.on("error", (error) => console.log("DB Error:", error));
database.once("connected", () => console.log("Database Connected"));

app.post('/api/createProject', async (req, res) => {
    try {
        const project = new Project(req.body);
        project.save()
        console.log(`Project created! ${project}`)
        res.status(201).json(project);
    }
    catch (error) {
        console.error("Creating project error", error);
        res.status (500).json({message : "Fail to create project", error});
    }
});

app.get("/getProjects", async (req, res) => {
    try {
      const projects = await Project.find();
      let responseDetails = [];
  
      for (const project of projects) {
        const manager = await User.findById(project.mgr_id);
        const owner = await User.findById(project.prod_owner_id);
        const team = await Team.findById(project.team_id);
  
        responseDetails.push({
          project_name: project.proj_name,
          description: project.proj_desc,
          manager_details: manager,
          owner_details: owner,
          team_details: team
        });
      }
  
      res.send(responseDetails);
    } catch (error) {
      res.status(500).send(error);
    }
  });  

app.get('/getUsers', async (req, res) => {
    try {
        const userList = await User.find({}, {firstName:1, lastName:1});
        res.send(userList)
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send(error)
    }
});

app.get("/getTeams", async (req, res) => {
    try {
      const teamList = await Team.find({}, { team_name: 1 });
      res.send(teamList);
    } catch (error) {
      console.error("Error fetching teams:", error);
      res.status(500).send(error);
    }
  });
  

app.post("/api/createTeam", async (req, res) => {
    try {
        const team = new Team(req.body);
        await team.save();
        console.log("Team created:", team);
        res.send(team);
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});