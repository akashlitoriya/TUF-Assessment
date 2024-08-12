import React from 'react'
import Timer from '../Timer'
import {useSelector} from 'react-redux'
import { closeBanner } from '../../store/bannerSlice'
import {useDispatch } from 'react-redux'
import { RxCross2 } from "react-icons/rx";

const Banner = () => {
  const dispatch = useDispatch();
  const {bannerTimer, bannerDescription, bannerLink} = useSelector(state => state.banner);
  console.log("BANNER TIMER : ", bannerTimer);  
  return (
    <div className='max-w-screen-lg w-full mx-auto bg-richBlack-50 border-[1px] border-richBlack-25 p-10 rounded-lg relative'>
      <div className='absolute top-2 right-2 cursor-pointer z-50' onClick={()=>dispatch(closeBanner())}>
        <RxCross2 className='text-richRed text-3xl'/>
      </div>
      <a href={bannerLink} target='_blank' className='cursor-pointer'>
        <div>
          <p className='text-richRed text-2xl font-semibold'>{bannerDescription}</p>
        </div>
        <div>
          <Timer bannerTimer={bannerTimer}/>
        </div>
      </a>
    </div>
  )
}

export default Banner
