import {React, useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';

export const Github = () => {

    const data = useLoaderData();

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/romeshktripathi`)
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     });
    // }, []);

    return (
        <div className='bg-gray-50 shadow-md w-96 mx-auto p-4 my-6 rounded-md'>
            <h1 className='text-3xl text-center border-b mb-4 pb-2'>{data.name}</h1>
            <img className='w-28 h-28 rounded-full mx-auto border p-0.5 im' src={data.avatar_url} alt="" />
            <div className='p-4 flex text-2xl justify-evenly'>
                <p className='text-green-400'><span className='text-black'>Followers:</span>{data.followers} <span className='text-black'>Following:</span> {data.following}</p>
            </div>
        </div>
    );
}


export const githubInfoLoader = async ()=>{
    const response = await fetch(`https://api.github.com/users/romeshktripathi`)
    return response.json();
}