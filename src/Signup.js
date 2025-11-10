import {Link} from 'react-router-dom';
import axios from 'axios';
import React, {useState} from 'react';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (event, firstName, lastName, username, password) => {
        axios.post('http://localhost:9000/api/users/signup', { 
            f_name: firstName, 
            l_name: lastName, 
            username, password 
        })
        .then((res) => {
            alert(res.data.message);
        })
        .catch((err) => {
            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert('Error in Signing Up');
            }
        
    });
};

    return (
        
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="text-center mb-4">Signup</h2>

        <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
                type="text"
                className="form-control"
                placeholder="Please enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
                type="text"
                className="form-control"
                placeholder="Please enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">User ID</label>
            <input
                type="text"
                className="form-control"
                placeholder="Please choose User ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Please choose password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <button
            type="button"
            className="btn btn-primary w-100"
            onClick={(event) => handleSignUp(event, firstName, lastName, username, password)}
        >
        Signup
        </button>

        <p className="text-center mt-3">
            Do you have an account already? <Link to="/login">Login</Link>
            <br />
            Want to create a <Link to= "/CreateTeam">Team</Link> or a <Link to="/CreateProject">Project</Link>?
        </p>
        </div>
    );
};

export default Signup;
