import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
    let userData;
    const {userId} = useParams();
    fetch(`https://api.github.com/users/romeshktripathi`)
    .then((res)=>res.json()).then((data)=>{
        console.log(data);
    });
    
    return (
        <div className='bg-gray-50 shadow-md w-96 mx-auto p-4 my-6 rounded-md'>
            <h1 className='text-3xl text-center border-b mb-4 pb-2'>{userId}</h1>
            <img className='w-28 h-28 rounded-full mx-auto border p-0.5 im' src="https://images.pexels.com/photos/1717934/pexels-photo-1717934.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            
        </div>

    );
}

export default User;
