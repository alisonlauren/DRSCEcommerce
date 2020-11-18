import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';


export default function PaymentMethodScreen(props) {
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address) { 
        props.history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch();

    const sumbitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeholder')

    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={sumbitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div> 
                    <div>
                    <input type="radio" id="paypal" value="Paypal" name="paymentMethod"
                    required checked onChange={(e) => setPaymentMethod(e.target.value)}></input>
                    <label htmlFor="paypal">PayPal</label>
                    </div>
                    
                </div>
                <div> 
                    <div>
                    <input type="radio" id="other" value="other" name="paymentMethod"
                    required onChange={(e) => setPaymentMethod(e.target.value)}></input>
                    <label htmlFor="other">Other</label>
                    </div> 
                </div>
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
            
        </div>
    )
}
