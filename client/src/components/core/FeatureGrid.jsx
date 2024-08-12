import React from 'react'
import { FaBook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FeatureGrid = () => {
  return (
    <div className='max-w-screen-lg w-full mx-auto grid grid-cols-3 gap-6'>
      <div className='w-fit p-6 border-[1px] border-richBlack-25 rounded-lg bg-richBlack-50 flex flex-col gap-3 transition-all duration-150 hover:scale-95 cursor-pointer'>
        <p className='p-2 rounded-lg bg-richBlack-25 backdrop-blur-md bg-opacity-10 w-fit text-3xl text-white'><FaBook /></p>
        <h1 className='text-white text-xl font-dmSans font-semibold'>Striver's DSA sheet</h1>
        <p className='text-richBlack-25 text-base'>Boost your DSA skills with our handy cheatsheet.</p>
        <a href='' className='px-4 py-2 bg-richBlack-50 text-white font-semibold font-dmSans border-2 border-richBlack-25 rounded-full w-fit'>Try it free</a>
      </div>
      <div className='w-fit p-6 border-[1px] border-richBlack-25 rounded-lg bg-richBlack-50 flex flex-col gap-3 transition-all duration-150 hover:scale-95 cursor-pointer'>
        <p className='p-2 rounded-lg bg-richBlack-25 backdrop-blur-md bg-opacity-10 w-fit text-3xl text-white'><FaBook /></p>
        <h1 className='text-white text-xl font-dmSans font-semibold'>Striver's DSA sheet</h1>
        <p className='text-richBlack-25 text-base'>Boost your DSA skills with our handy cheatsheet.</p>
        <a href='' className='px-4 py-2 bg-richBlack-50 text-white font-semibold font-dmSans border-2 border-richBlack-25 rounded-full w-fit'>Try it free</a>
      </div>
      <div className='w-fit p-6 border-[1px] border-richBlack-25 rounded-lg bg-richBlack-50 flex flex-col gap-3 transition-all duration-150 hover:scale-95 cursor-pointer'>
        <p className='p-2 rounded-lg bg-richBlack-25 backdrop-blur-md bg-opacity-10 w-fit text-3xl text-white'><FaBook /></p>
        <h1 className='text-white text-xl font-dmSans font-semibold'>Striver's DSA sheet</h1>
        <p className='text-richBlack-25 text-base'>Boost your DSA skills with our handy cheatsheet.</p>
        <a href='' className='px-4 py-2 bg-richBlack-50 text-white font-semibold font-dmSans border-2 border-richBlack-25 rounded-full w-fit'>Try it free</a>
      </div>
    </div>
  )
}

export default FeatureGrid
