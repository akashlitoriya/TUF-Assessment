import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { updateBanner } from '../services/service';

const Dashboard = () => {
    const [banner, setBanner] = useState({
        showBanner: 0,
        bannerId: '',
        bannerDescription: '',
        bannerLink: '',
        bannerTimer: 0
    });
    const [timer, setTimer] = useState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    });
    const { showBanner, bannerId, bannerDescription, bannerLink, bannerTimer } = useSelector(state => state.banner);

    useEffect(() => {
        setBanner({
            showBanner: showBanner,
            bannerId: bannerId,
            bannerDescription: bannerDescription,
            bannerLink: bannerLink,
            bannerTimer: bannerTimer
        })
    }, [])
    const formSubmitHandler = async(e) => {
        e.preventDefault();
        let totalSeconds = (timer.day * 86400) + (timer.hour * 3600) + (timer.minute * 60) + timer.second;
        let timeout = new Date().getTime() + totalSeconds * 1000;
        setBanner({ ...banner, bannerTimer: timeout })
        console.log("FORM DATA", banner);
        const response = await updateBanner(banner);
    }

    return (
        <div className='w-screen min-h-[calc(100vh-4rem)] bg-richBlack-100'>
            <div className='max-w-screen-lg h-full mx-auto py-10'>
                <form onSubmit={(e) => formSubmitHandler(e)} className='border-2 border-richRed p-10 rounded-xl w-4/5 mx-auto flex flex-col gap-5'>
                    <div className='flex flex-row gap-3'>
                        <label htmlFor='showBanner' className='text-richBlack-25 font-semibold'>Show Banner :</label>
                        <div className='border-2 border-cyan_primary rounded-full h-6 w-12 flex items-center cursor-pointer' onClick={()=>setBanner({...banner,showBanner: (banner.showBanner===1? 0: 1)})}>
                            <div className={`h-4 w-4 bg-richRed rounded-full transition-all duration-300 transform ${banner.showBanner === 1? "translate-x-6": "translate-x-1"}`}>

                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='bannerLink' className='text-richBlack-25 font-semibold'>Link :</label>
                        <input
                            id='bannerLink'
                            type='url'
                            value={banner?.bannerLink}
                            onChange={(e) => { e.preventDefault();setBanner({ ...banner, bannerLink: e.target.value })}}
                            className='border-2 border-richBlack-25 rounded-md p-2 bg-richBlack-50 text-richBlack-25'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='time' className='text-richBlack-25 font-semibold'>Time :</label>
                        <div className='flex flex-row gap-6'>
                            <div className='flex flex-col gap-2'>
                                <input
                                    type='number'
                                    min={0}
                                    max={30}
                                    value={timer.day}
                                    onChange={(e) => {e.preventDefault(); setTimer({ ...timer, day: e.target.value })}}
                                    className='w-20 border-2 border-richBlack-25 rounded-md p-2 bg-richBlack-50 text-richBlack-25'
                                />
                                <span className='text-richBlack-25 text-center text-sm font-semibold'>Day</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <input
                                    type='number'
                                    min={0}
                                    max={23}
                                    value={timer.hour}
                                    onChange={(e) => {e.preventDefault();setTimer({ ...timer, hour: e.target.value })}}
                                    className=' w-20 border-2 border-richBlack-25 rounded-md p-2 bg-richBlack-50 text-richBlack-25'
                                />
                                <span className='text-richBlack-25 text-center text-sm font-semibold'>Hour</span>

                            </div>
                            <div className='flex flex-col gap-2'>
                                <input
                                    type='number'
                                    min={0}
                                    max={59}
                                    value={timer.minute}
                                    onChange={(e) => {e.preventDefault();setTimer({ ...timer, minute: e.target.value })}}
                                    className='w-20 border-2 border-richBlack-25 rounded-md p-2 bg-richBlack-50 text-richBlack-25'
                                />
                                <span className='text-richBlack-25 text-center text-sm font-semibold'>Minute</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <input
                                    type='number'
                                    min={0}
                                    max={59}
                                    value={timer.second}
                                    onChange={(e) =>{e.preventDefault(); setTimer({ ...timer, second: e.target.value })}}
                                    className='w-20 border-2 border-richBlack-25 rounded-md p-2 bg-richBlack-50 text-richBlack-25'
                                />
                                <span className='text-richBlack-25 text-center text-sm font-semibold'>Second</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='bannerDescription' className='text-richBlack-25 font-semibold'>Description :</label>
                        <textarea
                            id='bannerDescription'
                            type='text'
                            value={banner?.bannerDescription}
                            onChange={(e) => {e.preventDefault(); setBanner({ ...banner, bannerDescription: e.target.value })}}
                            className='border-2 border-richBlack-25 rounded-md p-2 bg-richBlack-50 text-richBlack-25'
                        />
                    </div>

                    <button type='submit' className='bg-richRed text-white font-semibold py-2 rounded-md'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard
