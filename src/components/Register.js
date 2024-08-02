// import React, { useState } from 'react';
// import { register } from '../api';

// const Register = ({ history }) => {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [role, setRole] = useState('user');
// const [error, setError] = useState('');

// const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//         await register(email, password, role);
//         history.push('/login');
//     } catch (err) {
//         setError(err.response.data.error);
//     }
// };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleRegister}>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                     required
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                     required
//                 />
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//                 <button type="submit">Register</button>
//             </form>
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default Register;



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
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password, role);
            navigate('/login');
        } catch (err) {
            setError(err.response.data.error);
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
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <button type="submit">Register</button>
                            </div>
                        </form>
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;
