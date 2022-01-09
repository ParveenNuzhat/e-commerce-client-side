import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../Hook/useAuth';

const CheckoutForm = () => {
    const [error, setError] = useState()

    const { totalPrice, user, processing, setProcessing } = useAuth();
    console.log(totalPrice, user.email)
    const elements = useElements();
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [totalPrice]);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true)

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
        } else {
            setError('')
            console.log(paymentMethod);
        }
        //Payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email


                    },

                },
            },

        );

        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setError('')
            setSuccess("Your payment processed successfully completed")
            console.log(paymentIntent);
            setProcessing(false)
        }


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />




                <button style={{ marginTop: 50 }} type="submit" disabled={!stripe}

                >
                    Pay ${totalPrice}
                </button>


            </form>
            {
                error &&
                <h3>{error}</h3>
            }
            {
                success &&
                <h3>{success}</h3>
            }
        </div>
    );
}

export default CheckoutForm;