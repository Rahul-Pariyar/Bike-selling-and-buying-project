import React from 'react'

const SellComponent = () => {
  return (
    <div className='w-full min-h-80 flex items-center justify-center'>
      <div className='flex flex-col gap-5 rounded border-2 border-red-600 p-10 px- 15 items-center justify-center'>
        <p className='text-2xl font-bold md:text-3xl'>Sell on MotoBike Market</p>
        <p className='text-xl md:text-2xl'>Reach thousands of potential buyers, create ads and manage ads with ease.</p>
        <button className='bg-red-500 rounded p-3 transition-transform transform hover:scale-110'>Create an Ad</button>
      </div>
    </div>
  )
}

export default SellComponent
