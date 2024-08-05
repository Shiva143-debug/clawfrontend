import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51PIPpiSD7XYNdwI6GQaTFOODrlTSMvDN9vYjg2lWbonrQvo4RRJoZLOb1slYJjOEY0sPzDFVTJVVswGJZHhUXoys00231GML0t'); // Replace with your Stripe publishable key

const Payment = () => {
    const location = useLocation();
    const [totalAmount, setTotalAmount] = useState(() => {
        // Retrieve amount from localStorage, or fallback to 0 if not available
        const storedAmount = localStorage.getItem('totalAmount');
        return storedAmount ? Number(storedAmount) : 0;
    });
    const [paymentError, setPaymentError] = useState(null);

    
    

    const handlePayment = async (event) => {
        event.preventDefault();
        const stripe = await stripePromise;

        const values = {
            name: 'Customer Name', // Replace with actual customer name
            amount: totalAmount,   // Total amount to be charged in cents
            transaction: 'txn12345' // Replace with a dynamic transaction ID
        };

        const headers = { "Content-Type": "application/json" };

        try {
            const response = await fetch('https://knowledgeable-tidy-eclipse.glitch.me/create-payment', { // Replace with your backend URL
                method: "POST",
                headers: headers,
                body: JSON.stringify(values)
            });

            const session = await response.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.log(result.error);
                setPaymentError(result.error.message);
            }
        } catch (error) {
            console.error("Error processing payment:", error);
            setPaymentError("Error processing payment");
        }
    };

    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            
            <h1>Confirm To PAY AMOUNT</h1>
            
            <h2>Total Amount: ₹{totalAmount}</h2> {/* Display amount in rupees */}
            <button onClick={handlePayment} style={{ marginTop: "20px" }}>
                Place Order
            </button>
            {paymentError && <p>The maximum Amount is 30,000. Please deselect any item and add to next cart.</p>}
        </div>
    );
};

export default Payment;
