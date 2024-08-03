
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImageContainer from './ImageContainer';
import { register } from '../api';
import '../App.css';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await register(email, password, role);
            navigate('/login');
        } catch (err) {
            setError(err.response.data.error);
        } finally{
            setLoading(false)
        }
    };


    const signinclick = () => {
        navigate("/login")
    };



    return (
        <div className="container">
            <ImageContainer />
            <div className='form-section'>
                <div className='form-container'>
                    <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1722424699/Screenshot_2024-07-31_164744_ii2feo.png" className="logo" alt="logo" />
                    <h1 className='sl-heading'>Sign Up</h1>
                    <p>Already have an account? <span onClick={signinclick}>Sign In</span></p>
                    <div>
                        {/* <h2>Register</h2> */}
                        <form onSubmit={handleRegister}>
                            <input style={{ marginBottom: "10px" }} className='form-control'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                            <input style={{ marginBottom: "10px" }} className='form-control'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ marginBottom: "10px" }} className='form-control' >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"30px" }}>
                                {/* <button type="submit" className='rl-button'>Register</button> */}
                                {loading && <div className="spinner"></div>}
                           
                           {!loading && 
                            <button type="submit" className='rl-button'>Login</button>
                           }
                            </div>
                        </form>
                        {error && <p style={{color:"red",textAlign:"center"}}>{error}</p>}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;
