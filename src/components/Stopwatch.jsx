import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const startstop=()=>{
    setIsRunning(!isRunning)
    console.log(isRunning)
  }
  const reset = ()=>{
    setTime(0)
  }
  useEffect(()=>{
    let inetrvalID;
    if(isRunning){
      inetrvalID = setInterval(()=>setTime(time + 1),10)
    }
    return ()=>{
      clearInterval(inetrvalID)
    }

  },[isRunning, time])

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  
  return (
    <div className='h-screen w-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='flex flex-col'>
        <div className='  flex justify-center items-center'>
          <p className='mt-[150px] text-4xl bg-white  p-3 rounded-md'>{hours.toString().padStart(2,"0")}</p>
          <p className='text-4xl p-1 mt-[145px]'>:</p>
          <p className='mt-[150px] text-4xl bg-white  p-3 rounded-md'>{minutes.toString().padStart(2, "0")}</p>
          <p className='text-4xl p-1 mt-[145px]'>:</p>
          <p className='mt-[150px] text-4xl bg-white  p-3 rounded-md'>{seconds.toString().padStart(2, "0")}</p>
          <p className='text-4xl p-1 mt-[145px]'>:</p>
          <p className='mt-[150px] text-4xl bg-white  p-3 rounded-md'>{milliseconds.toString().padStart(2, "0")}</p>
        </div>
      <div className='flex justify-center m-4 '>
      <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={startstop}>{isRunning ? "Stop" : "Start"}</button>
      <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={reset}>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default Stopwatch
