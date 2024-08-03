// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getCart, placeOrder, deleteCartItem } from '../api';
// import "../App.css";
// import Header from './Header';

// const Cart = () => {
//     const [cart, setCart] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchCart = async () => {
//             const token = localStorage.getItem('token');
//             try {
//                 const response = await getCart(token);
//                 setCart(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch cart:', error);
//             }
//         };

//         fetchCart();
//     }, []);

//     const handlePlaceOrder = async () => {
//         const token = localStorage.getItem('token');
//         await placeOrder(token);
//         navigate('/payment');
//     };

//     const onShop = () => navigate("/products");

    // const onRemoveItem = async (productId) => {
    //     const token = localStorage.getItem('token');
    //     try {
    //         const response = await deleteCartItem(productId, token);
    //         console.log(response.message);
    //         alert('Item removed from cart');
    //         const fetchCart = async () => {
    //             const token = localStorage.getItem('token');
    //             try {
    //                 const response = await getCart(token);
    //                 setCart(response.data);
    //             } catch (error) {
    //                 console.error('Failed to fetch cart:', error);
    //             }
    //         };
    //         fetchCart();
    //     } catch (error) {
    //         console.error('Failed to remove item from cart:', error);
    //         alert('Failed to remove item from cart');
    //     }
    // };

    // Calculate total amount and quantity
    // const { totalAmount, totalQuantity } = cart.items.reduce((acc, item) => {
    //     acc.totalAmount += item.product.price * item.quantity;
    //     acc.totalQuantity += item.quantity;
    //     return acc;
    // }, { totalAmount: 0, totalQuantity: 0 });

//     // // Store total quantity in localStorage
//     // localStorage.setItem('totalQuantity', totalQuantity);

//     // Check if there are no items in the cart


//     return (
//         <div style={{ fontFamily: "sans-serif" }}>
//             <Header />
// {/* 
//             {cart.items.length === 0 &&
      
//             <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//                 <h1>No Items in cart</h1>
//                 <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp" alt="empty-img" />
//                 <button onClick={onShop} style={{ cursor: "pointer" }} className='mt-5'>Shop Now</button>
//             </div>
        
//     } */}
  
//             <div style={{ display: "flex", justifyContent: "space-around" }}>
//                 <ul>
                
//                     {cart.items.map((item) => (
//                         <li key={item.product._id}>
//                             <div style={{ display: "flex", justifyContent: "space-between" }} className='cart-card'>
//                                 <img src={item.product.image} alt="image" style={{ width: '300px', height: '300px' }} />
//                                 <div className='content'>
//                                     <h2>Product: {item.product.name}</h2>
//                                     <h6>{item.product.description}</h6>
//                                     <h5>Price: ₹{item.product.price}</h5>
//                                     <h5>Quantity: {item.quantity}</h5>
//                                     <h4>Total Amount: ₹{item.product.price * item.quantity}</h4>
//                                 </div>
                                // <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                //     <button onClick={() => onRemoveItem(item.product._id)}>Remove Item</button>
                                // </div>
//                             </div>
//                         </li>
//                     ))}
                
//                 </ul>
//                 <div>
//                     {!cart.length === 0 &&
//                     <div className='price-card'>
//                         <h1>PRICE DETAILS</h1>
//                         <h4>Price  Items</h4>
//                         <h4>Delivery charges: Free</h4>
//                         <hr />
//                         <h2>Total Amount: ₹</h2>
//                     </div>
// }
// {!cart.length === 0 &&
//                     <button onClick={handlePlaceOrder} style={{ marginTop: "100px", float: "right" }}>Place Order</button>
// }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getCart, placeOrder } from '../api';
// import "../App.css"
// import Header from './Header';

// const Cart = () => {
//     const [cart, setCart] = useState(null);
//     const navigate = useNavigate();
    

//     useEffect(() => {
//         const fetchCart = async () => {
//             const token = localStorage.getItem('token');
//             const response = await getCart(token);
//             setCart(response.data);

//         };

//         fetchCart();
//     }, []);

//     const handlePlaceOrder = async () => {
//         const token = localStorage.getItem('token');
//         await placeOrder(token);
//         navigate('/payment');
//     };

//     const onShop=()=> navigate("/products")


//     // if (!cart) {
//     //     return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
//     //         <h1>No Items in cart</h1>
//     //         <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp" alt="empty-img"/>
//     //          <button onClick={onShop} style={{cursor:"pointer"}} className='mt-5'>Shop Now</button>
//     //         </div>;
//     // }

   
//     const { totalAmount, totalQuantity } = cart.items.reduce((acc, item) => {
//         acc.totalAmount += item.product.price * item.quantity;
//         acc.totalQuantity += item.quantity;
//         return acc;
//     }, { totalAmount: 0, totalQuantity: 0 });
//     localStorage.setItem('totalQuantity', totalQuantity);
//     return (
//         <div style={{ fontFamily: "sans-serif" }}>
//             {/* <h2 className='text-center' >Your Cart Items</h2> */}
            
//      {cart.items.length === 0 && 
//          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
//             <h1>No Items in cart</h1>
//             <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp" alt="empty-img"/>
//              <button onClick={onShop} style={{cursor:"pointer"}} className='mt-5'>Shop Now</button>
//             </div>
//     }


//             <Header/>
//             {cart.items.length !== 0 && 
//             <div style={{ display: "flex",justifyContent:"space-around" }}>
//                 <ul >
//                     {cart.items.map((item) => (
//                         <li key={item.product._id}>


//                             <div style={{ display: "flex", justifyContent: "space-between" }} className='cart-card'>
//                                 <img src={item.product.image} alt="image" style={{ width: '300px', height: '300px' }} />

//                                 <div className='content'>
//                                     <h2>Product:{item.product.name}</h2>
//                                     <h3>About Product:{item.product.description}</h3>
//                                     <h5>Price:{item.product.price}</h5>

//                                     <h6>quantity:{item.quantity}</h6>
//                                 </div>


                                // <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                //     <button>Remove Item</button>
                                // </div>

//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//                 <div>
              
//                 <div className='price-card'>
//                     <h1>PRICE DETAILS</h1>
//                     <h2>Price 2 Itmes</h2>
//                     <h2>Delivery charges:Free</h2>
//                     <hr />
//                     <h1>Total Amount: {totalAmount} </h1>
//                 </div>

//                 <button onClick={handlePlaceOrder} style={{marginTop:"100px",float:"right"}}>Place Order</button>

//                 </div>

//             </div>
        
// }
//         </div>
//     );
// };

// export default Cart;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, placeOrder,deleteCartItem} from '../api';
import "../App.css"
import Header from './Header';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await getCart(token);
                setCart(response.data);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    // useEffect(() => {
    //     const fetchCart = async () => {
    //         const token = localStorage.getItem('token');
    //         const response = await getCart(token);
    //         setCart(response.data);
    //     };

    //     fetchCart();
    // }, []);

    const handlePlaceOrder = async () => {
        const token = localStorage.getItem('token');
        await placeOrder(token);
        navigate('/payment', { state: { totalAmount }});
        localStorage.removeItem('totalQuantity');
    };

    const onShop = () => navigate("/products");

    if (loading) {
        return <div className="spinner"></div>;
    }
  
    if (!cart || cart.items.length === 0) {
        return (
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <h1>No Items in cart</h1>
                <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1718453417/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with_pyqoxn.webp" alt="empty-img"/>
                <button onClick={onShop} style={{cursor:"pointer"}} className='mt-5'>Shop Now</button>
            </div>
        );
    }


    
    const onRemoveItem = async (productId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await deleteCartItem(productId, token);
            console.log(response.message);
            alert('Item removed from cart');
            const fetchCart = async () => {
                const token = localStorage.getItem('token');
                try {
                    const response = await getCart(token);
                    setCart(response.data);
                } catch (error) {
                    console.error('Failed to fetch cart:', error);
                }
            };
            fetchCart();
        } catch (error) {
            console.error('Failed to remove item from cart:', error);
            alert('Failed to remove item from cart');
        }
    };

    const { totalAmount, totalQuantity } = cart.items.reduce((acc, item) => {
        if (item.product) {
            acc.totalAmount += item.product.price * item.quantity;
            acc.totalQuantity += item.quantity;
        }
        return acc;
    }, { totalAmount: 0, totalQuantity: 0 });
    
    localStorage.setItem('totalQuantity', totalQuantity);
    localStorage.setItem('totalAmount', totalAmount);
    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <Header/>
            <div style={{ display: "flex",justifyContent:"space-around" }}>
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.product._id}>
                            <div style={{ display: "flex", justifyContent: "space-between" }} className='cart-card'>
                                <img src={item.product.image} alt="image" style={{ width: '300px', height: '300px' }} />
                                <div className='content'>
                                    <h3>Product: {item.product.name}</h3>
                                    <h6> {item.product.description}</h6>
                                    <h5>Price: ₹{item.product.price}</h5>
                                    <h5>Quantity: {item.quantity}</h5>
                                    <h4>Total Amount:{item.product.price*item.quantity}</h4>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button onClick={() => onRemoveItem(item.product._id)}>Remove Item</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div>
                    <div className='price-card'>
                        <h2>PRICE DETAILS</h2>
                        <h3>Price {totalQuantity} Items</h3>
                        <h4>Delivery charges: Free</h4>
                        <hr />
                        <h2>Total Amount: ₹{totalAmount}</h2>
                    </div>
                    <button onClick={handlePlaceOrder} style={{marginTop:"100px",float:"right"}}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
