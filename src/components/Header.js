import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();
    const totalQuantity = localStorage.getItem('totalQuantity');

    const onlogout=()=>{
        logout();
        navigate("/login")
    }

    return (
        <header className="header">
            <div className="logo">
                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1722687042/Flipkart-Emblem_xj818h.png" alt="Company Logo"  />
            </div>
            <nav className="nav-links">
            <Link to="/products" className="link-item">Products</Link>
            <Link to="/cart" className="link-item">Cart  <span style={{backgroundColor:"yellow",padding:"5px",borderRadius:"50%"}}>{totalQuantity}</span></Link>
            <Link to="/orders" className="link-item">Orders</Link>
            
            </nav>
            <button className='logout-button' onClick={onlogout}>Logout</button>
        </header>
    );
};

export default Header;
