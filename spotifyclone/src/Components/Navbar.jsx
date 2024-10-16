import React from 'react'
import { assets } from '../assets/frontend-assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='w-full flex items-center justify-between font-semibold' >
        <div className='flex items-start gap-2'>
        <img className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_left} alt="" />
        <img className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white py-1 text-black text-[15px] px-4 rounded-2xl hidden md:block'>
                Explore Premium
            </p>
            <p className='bg-black py-1 text-white cursor-pointer text-[15px] px-4 rounded-2xl hidden md:block'>
                Install App
            </p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>
                A
            </p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black cursor-pointer px-4 py-1 rounded-2xl '>
                All
        </p>
        <p className='bg-zinc-800 text-white cursor-pointer px-4 py-1 rounded-2xl '>
                Songs
        </p>
        <p className='bg-zinc-800 text-white cursor-pointer px-4 py-1 rounded-2xl '>
                podcasts
        </p>
    </div>
    </>
  )
}

export default Navbar