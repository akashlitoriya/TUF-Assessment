import React from 'react'
import {useState, useEffect} from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState("00:00:00");
    useEffect(() =>{
        const fetchTime = new Date().getTime() + 1000 * 24 * 60 * 60;
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = fetchTime - now;
            setTime(distance);
            if (distance < 0) {
                clearInterval(interval);
                setTime(0);
                setTimer("00:00:00");
            }
        }, 1000);
    }, []);
    useEffect(() => {
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        setTimer(`${(hours > 9 ? hours : '0'+ hours)}:${(minutes > 9 ? minutes: '0'+minutes)}:${(seconds > 9 ? seconds: '0'+seconds)}`);
    }, [time]);

  return (
    <div>
      <p>{timer}</p>
    </div>
  )
}

export default Timer
