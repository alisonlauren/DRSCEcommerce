import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector, useDispatch } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  

  const signoutHandler =() => {
    dispatch(signout())


  }

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/" className="brand">Trish Site</Link>
        </div>
        <div>
          <Link to="/cart">Cart{cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span> )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>

                </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )
            }
        </div>
      </header>
      <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route exact path="/" component={HomeScreen}></Route>
        
      </main>
      <footer className="row center">All rights reserved</footer>
      </div>
      </BrowserRouter>
  );
}

export default App;


