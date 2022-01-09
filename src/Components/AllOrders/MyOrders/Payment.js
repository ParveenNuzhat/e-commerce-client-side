import React from 'react';
import useAuth from '../../../Hook/useAuth';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51KFi67KDJn8hp1BQc6MRuZBqkEifxFJEBBgkiCEGNLkarQwzsGSs0g7DgLpVfX5mXnygxiqbIh9XAALTKh6tcnlS00PTlBuK8j');
    const { totalPrice } = useAuth();


    return (
        <div>
            <h1>Pay</h1>
            <h1>{totalPrice}</h1>

            {
                totalPrice &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm


                    />

                </Elements>
            }
        </div>
    );
};

export default Payment;