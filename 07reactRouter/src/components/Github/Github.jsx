import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hitestchoudhary')
    //     .then( response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github Followers : {data.message}</div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const resp = await fetch("https://api.github.com/users/hitestchoudhary")
    return resp.json();
}