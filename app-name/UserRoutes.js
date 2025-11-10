const express = require('express');
const app = express();
const router = express.Router();
const User = require("./UserSchema"); 

router.post("/signup", async(req, res) => {
    try {
        const {f_name, l_name, username, password} = req.body;

        const existingUser = await User.findOne({username});
        if (existingUser) {
            return res.status(400).json({message : "Username already exists!"});
        }

        const newUser = new User({f_name, l_name, username, password});
        await newUser.save();

        res.status(201).json({message: "User created successfully!"});
    } catch (err) {
        res.status(500).json({message: "Something went wrong, try again!", error: err.message});
    }
});

router.post("/login", async(req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});
        if(!user) {
            return res.status(400).json({message : "User not found!"});
        }

        if(user.password !== password) {
            return res.status(400).json({message : "Invalid password!"});
        }

        res.status(200).json({message: "Successfully log-in!"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get("/getUser", async (req, res) => {
    console.log("SERVER: GET USER REQ QUERY:", req.query);
    const username = req.query.username;
    const password = req.query.password;
  
    try {
      const user = await User.findOne({ username, password });
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router;