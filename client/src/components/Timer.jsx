import React from 'react'
import {useState, useEffect} from 'react'
import { closeBanner } from '../store/bannerSlice';
import { useDispatch } from 'react-redux';

const Timer = ({bannerTimer}) => {
    const dispatch = useDispatch();
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState("00:00:00");
    useEffect(() =>{
      console.log("COMPONENT MOUNTED");
        const fetchTime = bannerTimer;
        const interval = setInterval(() => {
          const now = Math.floor(new Date().getTime() / 1000);
          const distance = fetchTime - now;
          console.log("DISTANCE : ", distance);
          setTime(distance);
          if (distance < 0) {
            clearInterval(interval);
            dispatch(closeBanner());
            setTime(0);
            setTimer("00:00:00");
          }
        }, 1000);

        return ()=>{
          console.log("COMPONENT UNMOUNTED");
          clearInterval(interval);
        }
    }, []);
    useEffect(() => {
        const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / (60));
        const seconds = Math.floor((time % (60)));
        setTimer(`${(hours > 9 ? hours : '0'+ hours)}:${(minutes > 9 ? minutes: '0'+minutes)}:${(seconds > 9 ? seconds: '0'+seconds)}`);
    }, [time]);

  return (
    <div>
      <p className='text-richRed text-xl font-semibold'>{timer}</p>
    </div>
  )
}

export default Timer
