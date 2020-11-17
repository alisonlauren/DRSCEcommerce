import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions';


export default function PaymentMethodScreen(props) {
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch();

    const sumbitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeholder')

    }
    return (
        <div>
            <form className="form" onSubmit={sumbitHandler}>
                <div>
                    <h1>Payment</h1>
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
                    required checked onChange={(e) => setPaymentMethod(e.target.value)}></input>
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
