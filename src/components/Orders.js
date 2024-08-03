import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../api';
import "../App.css"
import Header from './Header';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await getOrders(token);
                setOrders(response.data);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const onShop=()=> navigate("/products")

    if (loading) {
        return <div className="spinner"></div>;
    }

    if (orders.length === 0) {
        return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>No Recent orders</h1>
            <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp" alt="empty-img"/>
             <button onClick={onShop} style={{cursor:"pointer"}} className='mt-5'>Shop Now</button>
            </div>;
    }

    return (
        <div>
            <Header />
            <h2 className='text-center'>Your Recent Orders</h2>

      <ul >
        
            {orders.map((order) => (
                <div key={order._id} >
                    {/* <p>Order ID: {order._id}</p>
                    <p>User ID: {order.user}</p> */}          
                    <ul>
                        {order.products.map(({ product, quantity, _id }) => (
                            <li key={_id}>
                                <div style={{ display: "flex", justifyContent: "space-around" }} className='order-card'>
                                <img src={product.image} alt="image" style={{ width: '200px', height: '200px',margin:"10px" }}/>
                                <div className='content'>
                                <p>Name: {product.name}</p>
                                <p>Description: {product.description}</p>
                                <p>Price: ${product.price}</p>
                                <p>Quantity: {quantity}</p>
                                <p>Total: ${product.price* quantity}</p>

                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </ul>

        </div>
    );
};

export default Orders;
