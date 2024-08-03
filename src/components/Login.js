// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import { login } from '../api';

// const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const navigate = useNavigate();
    // const { login: authenticate } = useAuth();

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await login(email, password);
    //         localStorage.setItem('token', response.data.token);
    //         authenticate();
    //         navigate('/products');
    //     } catch (err) {
    //         // setError(err.response.data.error);
    //         setError(err.response?.data?.error || 'An error occurred');
    //     }
    // };

//     return (
//         <div>
//             <h2>Login</h2>
// <form onSubmit={handleLogin}>
//     <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//     />
//     <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//     />
//     <button type="submit">Login</button>
// </form>
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default Login;

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
    const { login: authenticate } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            const role = response.data.role
            console.log(role)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            authenticate();
            navigate('/products',{ state: { role }} );
        } catch (err) {
            // setError(err.response.data.error);
            setError(err.response?.data?.error || 'An error occurred');
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
                        <input  style={{marginBottom:"10px"}} className='form-control'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <input style={{marginBottom:"10px"}} className='form-control'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                        <button type="submit" className='rl-button'>Login</button>
                        </div>
                    </form>
                    {error && <p style={{color:"red",textAlign:"center"}}>*{error}</p>}
                </div>

            </div>
        </div>
    );
};

export default Login;