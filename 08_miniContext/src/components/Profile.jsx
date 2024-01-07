import React, {useContext}from 'react';
import UserContext from '../Context/UserContext';
const Profile = () => {
    // const {user} = useContext(UserContext) using Object destructuring.
    const {user} = useContext(UserContext);

    if(!user || !user.username){
        return <div>Please Login </div>
    }else{
        return <div>Welcome {user.username} your password is {user.password}</div>
    }
}

export default Profile;
