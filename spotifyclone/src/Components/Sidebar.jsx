import React from 'react'
import {assets} from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
 
  const navigate = useNavigate();

  return (
    <div className='w-[20%] h-full p-2 flex-col gap-2 lg:flex'>
    <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around' >
       <div onClick={()=>navigate('/')} className='flex items-center gap-3 p1-8 cursor-pointer'>
       <img className='w-6' src={assets.home_icon}/>
       <p  className='font-semibold'> Home</p>
       </div>
       <div className='flex items-center gap-3 p1-8 cursor-pointer'>
       <img className='w-6' src={assets.search_icon}/>
       <p className='font-semibold'> Search</p>
       </div>
    </div>
    <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'> Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.play_icon} alt="" />     
            </div>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 p1-4 '>
        <h1> Create your first playlist </h1>
        <p className='font-light'> It's easy we will help you </p>
        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>
            create playlist
        </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 p1-4 '>
        <h1> lets find some podcast to follow  </h1>
        <p className='font-light'>  we will keep you updated on new podcasts  </p>
        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>
          Browse podcasts 
        </button>
        </div>
        
    </div>
    </div>
  )
}

export default Sidebar