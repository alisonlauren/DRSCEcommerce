import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [confirmPassword, setConfirmPassword ] = useState('')


    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    //destructure userUpdateProfile with, grabbing data from redux store
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdateProfile
    const dispatch = useDispatch();


    useEffect(() => {
        if(!user) {
            //reset the data first
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and Confirm Password Do Not Match") 
        } else {
            dispatch(updateUserProfile({userId: user._id,
            name, email, password }))
        }
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                    </div>
                    {
                        loading? (<LoadingBox></LoadingBox>)
                        :
                        error? (<MessageBox variant="danger">{error}</MessageBox>)
                        : (
                        <>
                        { loadingUpdate && <LoadingBox></LoadingBox>}
                        { errorUpdate && (<MessageBox variant="danger">{errorUpdate}</MessageBox>)}
                        { successUpdate && (<MessageBox variant="success">Profile Updated Successfully</MessageBox>)}
                        <div>
                            <label htmlFor="name">Update Name</label>
                            <input id="name" type="text"  
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div> 
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email"  
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Change Password</label>
                            <input id="password" type="password"  
                            placeholder="Enter Password"
                            onChange= {(e) => setPassword(e.target.value)}
                            ></input>
                        
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Change Password</label>
                            <input id="confirmPassword" type="password"  
                            placeholder="Confirm Password"
                            onChange= {(e) => setConfirmPassword(e.target.value)} 
                            ></input>
                        </div>
                        <div>
                        <label />
                        <button className="primary" type="submit">
                            Update
                        </button>
                        </div>
                        </>
                        )}
            </form>
            
        </div>
    )
}
