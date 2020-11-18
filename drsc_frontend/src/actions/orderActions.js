import Axios from 'axios';
import { ORDER_CREATE_REQUEST, ORDER_CREATE_FAIL, ORDER_CREATE_SUCCESS } from "../constants/orderConstants"
import { CART_EMPTY } from '../constants/cartConstants';



//get state returns whole redux store, from store we get usersign in
//user sign in contains the token for the sign in process of user

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({
        type: ORDER_CREATE_REQUEST, payload: order
    })
    try {
        const { userSignin: { userInfo } } = getState()
        //data contains message and order
        const { data } = await Axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order })
        //this removes all items from shopping cart
        dispatch({ type: CART_EMPTY });
        //clean local storage too
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL, payload: error.response &&
                error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }

}