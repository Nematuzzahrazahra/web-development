'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div>
        <div className='py-20 flex-col items-center'></div>
        <h1 className='text-center font-bold text-4xl mb-7'>EventHandling</h1>
        <button className='border bg-voilet-800 text-white p-5 rounded-xl' onClick={() => {alert("hurrrah")}}>Click me</button>
    </div>
  )
}

export default EventHandling