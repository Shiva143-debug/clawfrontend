import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, placeOrder } from '../api';
import "../App.css"
import Header from './Header';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();
    

    useEffect(() => {
        const fetchCart = async () => {
            const token = localStorage.getItem('token');
            const response = await getCart(token);
            setCart(response.data);

        };

        fetchCart();
    }, []);

    const handlePlaceOrder = async () => {
        const token = localStorage.getItem('token');
        await placeOrder(token);
        navigate('/payment');
    };

    const onShop=()=> navigate("/products")


    if (!cart) {
        return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>No Items in cart</h1>
            <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp" alt="empty-img"/>
             <button onClick={onShop} style={{cursor:"pointer"}} className='mt-5'>Shop Now</button>
            </div>;
    }

    return (
        <div style={{ fontFamily: "sans-serif" }}>
            {/* <h2 className='text-center' >Your Cart Items</h2> */}
            <Header/>
            <div style={{ display: "flex",justifyContent:"space-around" }}>
                <ul >
                    {cart.items.map((item) => (
                        <li key={item.product._id}>


                            <div style={{ display: "flex", justifyContent: "space-between" }} className='cart-card'>
                                <img src={item.product.image} alt="image" style={{ width: '300px', height: '300px' }} />

                                <div className='content'>
                                    <h2>Product:{item.product.name}</h2>
                                    <h3>About Product:{item.product.description}</h3>
                                    <h5>Price:{item.product.price}</h5>

                                    <h6>quantity:{item.quantity}</h6>
                                </div>


                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button>Remove Item</button>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
                <div>
                <div className='price-card'>
                    <h1>PRICE DETAILS</h1>
                    <h2>Price 2 Itmes</h2>
                    <h2>Delivery charges:Free</h2>
                    <hr />
                    <h1>Total Amount:  </h1>
                </div>
                <button onClick={handlePlaceOrder} style={{marginTop:"100px",float:"right"}}>Place Order</button>

                </div>

            </div>
        

        </div>
    );
};

export default Cart;
