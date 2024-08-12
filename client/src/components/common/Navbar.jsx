import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-16 bg-richBlack-200'>
      <div className='max-w-screen-xl h-full mx-auto flex flex-row justify-between items-center'>
        <p className='text-2xl font-dmSans text-richRed font-extrabold cursor-pointer' onClick={()=> navigate('/')}>TUF</p>
        <button onClick={()=>navigate('/dashboard')} className='px-4 py-2 text-base bg-richBlack-50 rounded-lg text-white font-semibold border-2 border-richBlack-25 duration-200 transition-all hover:text-richRed'>
            Dashboard
        </button>
      </div>
    </div>
  )
}

export default Navbar
