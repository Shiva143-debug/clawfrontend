// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { makePayment } from '../api';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLocation } from 'react-router-dom';
// import "../App.css"

// const Payment = () => {
//     // const [amount, setAmount] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState('credit_card');
//     const [error, setError] = useState('');
// const location = useLocation();
// const { totalAmount } = location.state || {};


//      const stripePromise = loadStripe('pk_test_51PIPpiSD7XYNdwI6GQaTFOODrlTSMvDN9vYjg2lWbonrQvo4RRJoZLOb1slYJjOEY0sPzDFVTJVVswGJZHhUXoys00231GML0t');

//     const navigate = useNavigate();

//     const handlePayment = async (e) => {
//         e.preventDefault();
//         try {
//             const token = localStorage.getItem('token');
//             await makePayment(token, totalAmount, paymentMethod);
//             alert('Payment successful');
//             navigate("/orders")
//         } catch (err) {
//             setError(err.response.data.error);
//         }
//     };

//     // const handlePayment = async (event) => {
//     //     event.preventDefault();
//     //     const stripe = await stripePromise;
//     //     const values = {  amount, paymentMethod };
//     //     const headers = { "Content-Type": "application/json" };

//     //     try {
//     //         const response = await fetch('http://localhost:5000/payment', {
//     //             method: "POST",
//     //             headers: headers,
//     //             body: JSON.stringify(values)
//     //         });

//     //         const session = await response.json();

//     //         const result = await stripe.redirectToCheckout({
//     //             sessionId: session.id
//     //         });

//     //         if (result.error) {
//     //             console.log(result.error);
//     //             setError(result.error.message);
//     //         }
//     //     } catch (error) {
//     //         console.error("Error processing payment:", error);
//     //         setError("Error processing payment");
//     //     }
//     // }

//     return (
// <div className='payment-card' >
//     <h2>Payment</h2>
//     <form onSubmit={handlePayment} >
//         <input
//             type="number"
//             value={totalAmount}
//             // onChange={(e) => setAmount(e.target.value)}
//             placeholder="Amount"
//             required
//         />
//         <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//             <option value="credit_card">Credit Card</option>
//             <option value="pm_card_unionpa">pm_card_unionpa</option>
//         </select>
//         <button type="submit">Make Payment</button>
//     </form>
//     {error && <p style={{color:"red"}}>*{error}</p>}
// </div>
//     );
// };

// export default Payment;

// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useLocation } from 'react-router-dom';

// const stripePromise = loadStripe('pk_test_51PIPpiSD7XYNdwI6GQaTFOODrlTSMvDN9vYjg2lWbonrQvo4RRJoZLOb1slYJjOEY0sPzDFVTJVVswGJZHhUXoys00231GML0t');

// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const location = useLocation();
//     const { totalAmount } = location.state || {};

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: elements.getElement(CardElement),
//         });

//         if (!error) {
//             // Send paymentMethod.id to your server
//             const response = await fetch('/create-payment-intent', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ amount: 1000, paymentMethodId: paymentMethod.id }),
//             });
//             const paymentIntentResponse = await response.json();
//             console.log(paymentIntentResponse);
//         }
//     };

//     return (


//         <form onSubmit={handleSubmit} className='payment-card' >
//             {/* <input
//                 type="number"
//                 value={totalAmount}
//                 // onChange={(e) => setAmount(e.target.value)}
//                 placeholder="Amount"
//                 required
//             /> */}

//             <CardElement />
//             <button type="submit" disabled={!stripe}>Pay</button>
//         </form>
//     );
// };

// const Payment = () => (
//     <Elements stripe={stripePromise}>
//         <CheckoutForm />
//     </Elements>
// );

// export default Payment;


// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// // Make sure to replace this with your actual publishable key
// const stripePromise = loadStripe('your-publishable-key-here');

// const PaymentComponent = () => {
//     const [name, setName] = useState('');
//     const [amount, setAmount] = useState('');
//     const [transaction, setTransaction] = useState('');
//     const [paymentError, setPaymentError] = useState('');

//     const handlePayment = async (event) => {
//         event.preventDefault();
//         const stripe = await stripePromise;
//         const values = { name, amount, transaction };
//         const headers = { "Content-Type": "application/json" };

//         try {
//             const response = await fetch('http://localhost:5000/create-payment', {
//                 method: "POST",
//                 headers: headers,
//                 body: JSON.stringify(values)
//             });

//             const session = await response.json();

//             const result = await stripe.redirectToCheckout({
//                 sessionId: session.id
//             });

//             if (result.error) {
//                 console.log(result.error);
//                 setPaymentError(result.error.message);
//             }
//         } catch (error) {
//             console.error("Error processing payment:", error);
//             setPaymentError("Error processing payment");
//         }
//     }

//     return (
//         <form onSubmit={handlePayment}>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//             <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
//             <button type="submit">Pay</button>
//             {paymentError && <p>{paymentError}</p>}
//         </form>
//     );
// };

// export default PaymentComponent;


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
