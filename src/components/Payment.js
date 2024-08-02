import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makePayment } from '../api';
import { loadStripe } from '@stripe/stripe-js';
import "../App.css"

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit_card');
    const [error, setError] = useState('');
    

const stripePromise = loadStripe('pk_test_51PIPpiSD7XYNdwI6GQaTFOODrlTSMvDN9vYjg2lWbonrQvo4RRJoZLOb1slYJjOEY0sPzDFVTJVVswGJZHhUXoys00231GML0t');

    const navigate = useNavigate();

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await makePayment(token, amount, paymentMethod);
            alert('Payment successful');
            navigate("/orders")
        } catch (err) {
            setError(err.response.data.error);
        }
    };

    // const handlePayment = async (event) => {
    //     event.preventDefault();
    //     const stripe = await stripePromise;
    //     const values = {  amount, paymentMethod };
    //     const headers = { "Content-Type": "application/json" };

    //     try {
    //         const response = await fetch('http://localhost:5000/payment', {
    //             method: "POST",
    //             headers: headers,
    //             body: JSON.stringify(values)
    //         });

    //         const session = await response.json();

    //         const result = await stripe.redirectToCheckout({
    //             sessionId: session.id
    //         });

    //         if (result.error) {
    //             console.log(result.error);
    //             setError(result.error.message);
    //         }
    //     } catch (error) {
    //         console.error("Error processing payment:", error);
    //         setError("Error processing payment");
    //     }
    // }

    return (
        <div className='payment-card' >
            <h2>Payment</h2>
            <form onSubmit={handlePayment} >
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    required
                />
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="credit_card">Credit Card</option>
                    <option value="pm_card_unionpa">pm_card_unionpa</option>
                </select>
                <button type="submit">Make Payment</button>
            </form>
            {error && <p style={{color:"red"}}>*{error}</p>}
        </div>
    );
};

export default Payment;
