import React, { useEffect, useState } from 'react';
import { getOrders } from '../api';
import Header from './Header';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            const response = await getOrders(token);
            setOrders(response.data);
        };

        fetchOrders();
    }, []);

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
