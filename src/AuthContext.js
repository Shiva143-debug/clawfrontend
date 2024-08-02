// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [auth, setAuth] = useState({ token: null, role: null });

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};


// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({ token: null, role: null });

//     const login = async (email, password) => {
//         // Assuming `loginApi` is your API call function
//         const response = await login(email, password);
//         const { token, role } = response.data;
//         localStorage.setItem('token', token);
//         localStorage.setItem('role', role);
//         setAuth({ token, role });
//     };

//     const logout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('role');
//         setAuth({ token: null, role: null });
//     };

//     return (
//         <AuthContext.Provider value={{ auth, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

