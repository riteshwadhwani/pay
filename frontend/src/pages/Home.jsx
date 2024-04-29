import React from 'react'
import HomeNav from '../components/HomeNav';
const Home = () => {
    const token = localStorage.getItem("token");
  return (
    <div>
        <div className='h-16'>
          <HomeNav/>
        </div>
        <div className='flex justify-center items-center gap-5 mt-10 '>
            <div className=' text-2xl w-[40%]'>
            <span className=" font-bold text-2xl bg-gradient-to-r from-purple-400  to-pink-500 inline-block text-transparent bg-clip-text">Paykro</span> is a user-friendly mobile app enabling seamless peer-to-peer payments within its extensive database, offering quick, secure transactions for users to effortlessly send and receive funds.
            </div>
            <div className='w-[50%]'>
            <img src='https://images.pexels.com/photos/4968639/pexels-photo-4968639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Home