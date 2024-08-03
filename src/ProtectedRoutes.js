import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Header from './components/Header';

const ProtectedRoutes = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/') {
            navigate('/login');
        }
    }, [isAuthenticated, location.pathname, navigate]);

    return (
        <>
            {isAuthenticated && <Header />}
            {children}
        </>
    );
};

export default ProtectedRoutes;
