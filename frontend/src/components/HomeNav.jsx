import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const HomeNav = () => {
    let token ;
    useEffect(()=>{
        token = localStorage.getItem("token");
    },[])
    console.log("token",token);
    const navigate = useNavigate();
  return (
    <div className='flex justify-between p-1 border-b '>
        <div className="flex  flex-col justify-center h-fit w-fit  p-4 bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-white rounded-xl">
            PayKro 
        </div>
        <div>
            { 
                token!= null && <button onClick={()=>{navigate("/dashboard")}} className='p-3 rounded-full font-bold bg-blue-500 text-white'>
                    Click To Pay
                </button>
            }
            {
                token == null && 
                <button className='p-3 rounded-full font-bold bg-blue-500 text-white' onClick={()=>{navigate("/signin")}}>
                    Sign In
                </button>
            }
        </div>
    </div>
  )
}

export default HomeNav