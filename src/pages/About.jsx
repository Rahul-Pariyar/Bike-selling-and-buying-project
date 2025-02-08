import React from 'react'

const About = () => {
  return (
    // <div>
    //   This is about page
    // </div>
    <div className='flex flex-col min-h-screen'>
        <div className='flex-grow'>
          <h1 className='text-3xl pt-12 font-bold text-black mb-4'>About Us</h1>
          <p className='text-slate-600 text-xl mb-6'>MotoBike Market is your go-to platform for buying and selling motorbikes in Nepal. We provide an easy-to-use space where buyers and sellers can connect and find motorbikes that fit their needs. 
            Whether you're looking for an affordable scooter or a high-performance sports bike, we offer a wide range of options for all preferences and budgets. <br />
            At MotoBike Market, we focus on building trust, reliability, and transparency with every listing. 
            Our goal is to make the process of buying and selling motorbikes as simple as possible while promoting motorbike culture throughout Nepal.
            </p>
        </div>
    </div>
    
  )
}

export default About
