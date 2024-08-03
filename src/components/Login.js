

import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImageContainer from './ImageContainer';
import { login } from '../api';
import '../App.css';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { login: authenticate } = useAuth();


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when starting login
        try {
          const response = await login(email, password);
          const role = response.data.role;
          console.log(role);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', response.data.role);
          authenticate();
          navigate('/products', { state: { role } });
        } catch (err) {
          setError(err.response?.data?.error || 'An error occurred');
        } finally {
          setLoading(false); // Set loading to false after login attempt
        }
      };

    const signupclick = () => {
        navigate("/")
    };


    return (
        <div className="container">
            <ImageContainer />
            <div className="form-section" >
                <div className='form-container' >
                    <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1722424699/Screenshot_2024-07-31_164744_ii2feo.png" className="logo" alt="logo" />
                    <h1 className='sl-heading'>Log In</h1>
                    <p>Don't have an account? <span onClick={signupclick}>Sign Up</span></p>
                    <form onSubmit={handleLogin} className='form' >
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
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
                        {loading && <div className="spinner"></div>}
                           
                           {!loading && 
                            <button type="submit" className='rl-button'>Login</button>
                           }
                        </div>
                    </form>
                    {error && <p style={{ color: "red", textAlign: "center" }}>*{error}</p>}
                </div>

            </div>
        </div>
    );
};

export default Login;