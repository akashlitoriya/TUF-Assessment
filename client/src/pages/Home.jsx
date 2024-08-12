import React from 'react'
import {useState, useEffect} from 'react'
import { getBanner } from '../services/service'
import Banner from '../components/core/Banner';
import FeatureGrid from '../components/core/FeatureGrid';
import { setBanner } from '../store/bannerSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const Home = () => {
  const {showBanner} = useSelector(state => state.banner);
  const dispatch = useDispatch();
  useEffect(()=>{
    fetchBanner();
  },[])
  async function fetchBanner(){
    const response = await getBanner();
    dispatch(setBanner(response.data[0]));
  }
  return (
    <div className='w-screen min-h-[calc(100vh-4rem)] bg-richBlack-100 py-10 flex flex-col gap-10'>
      {
        showBanner=== 1 && <Banner /> 
      }
      <FeatureGrid />
    </div>
  )
}

export default Home
