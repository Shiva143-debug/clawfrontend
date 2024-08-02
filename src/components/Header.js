import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const onlogout=()=>{
        logout();
        navigate("/login")
    }

    return (
        <header className="header">
            <div className="logo">
                <img src="/path/to/logo.png" alt="Company Logo" />
            </div>
            <nav className="nav-links">
            <Link to="/products" className="link-item">Products</Link>
            <Link to="/cart" className="link-item">Cart</Link>
            <Link to="/orders" className="link-item">Orders</Link>
            
            </nav>
            <button className='logout-button' onClick={onlogout}>Logout</button>
        </header>
    );
};

export default Header;
