import {Link} from 'react-router-dom';
import {React, useState} from "react";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const handleLogin = (event, username, password) => {
        axios.post('http://localhost:9000/api/users/login', { 
             username, password})
            .then((res) => {
                if (res.data) {
                    alert(res.data.message ||'Login Successful')
                }
                else {
                    alert('Wrong Credentials')
                }
            })
            .catch((err) => alert('Error in Login'))
    }

    return (
        // HTML Code goes here
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="text-center mb-4">Login</h2>

            <div className="mb-3">
                <label className="form-label">User ID</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter User ID" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Enter Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button 
            type="submit" 
            className="btn btn-primary w-100"
            onClick= {(event) => handleLogin(event, username, password)}
            >
                Login
            </button>

            <p className="text-center mt-3">
                No account? <Link to="/signup">Signup</Link>
                <br />
                Want to create a <Link to="/CreateTeam">Team</Link> or a <Link to="/CreateProject">Project</Link>?
            </p>
        </div>
    );
};

export default Login; 