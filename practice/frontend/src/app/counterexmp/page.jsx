'use client'
import React, {useState} from 'react'

const CounterExmp = () => {
    const [count,setCount]=useState(0);
    const handleIncrement = () => 
    {
        setCount(count+1);
    }
    const handleDecrement = () => 
    {
        setCount(count-1);
    }
    const handleReset = () => 
    {
        setCount(0);
    }
  return (
    
        <div className='flex flex-col justify-center items-center py-20 mb-8'>
        <h1 className='font-bold text-4xl'>Event Handling</h1>
        <h4 className='p-2'>Number of counts :{count} </h4>
        <button className='border p-2 bg-voilet-800 text-white rounded-lg' onClick={ handleIncrement}>Increment</button>
        <button className='border p-2 bg-voilet-800 text-white  rounded-lg'onClick={handleDecrement}>Decrement</button>
        <button className='border p-2 bg-voilet-800 text-white  rounded-lg' onClick={handleReset}>Reset</button>
    </div>
   
  )
}

export default CounterExmp