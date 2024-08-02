// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Payment from './components/Payment';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';
import AddProductDialog from './components/AddProductDialog';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
                    <Route path="/addproduct" element={<PrivateRoute><AddProductDialog /></PrivateRoute>} />
                    <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                    <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
                    <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
                    <Route path="/" element={<Products />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
