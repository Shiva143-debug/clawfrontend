import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
    const auth = useAuth(); // Replace this with your actual authentication check

    if (!auth.isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
