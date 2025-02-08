import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'

import rtr from './../assets/secondHand1.jpg'
import glamour from './../assets/secondHand2.jpg'
import mt15 from './../assets/secondHand3.jpg'
import honda from './../assets/secondHand4.jpg'
import yamaha from './../assets/secondHand5.jpg'
import classic from './../assets/secondHand6.jpg'

const LatestBikeSlider = () => {
    const latestData=[
        {image:rtr,name:'Apache rtr',price:'300000'},
        {image:glamour,name:'Glamour',price:'200000'},
        {image:mt15,name:'Yamaha mt15',price:'350000'},
        {image:honda,name:'Honda city',price:'150000'},
        {image:yamaha,name:'Yamaha r15',price:'400000'},
        {image:classic,name:'RE classic 350',price:'400000'}
    ]
  return (
    <div className='bg-slate-100'>
        <p className='text-3xl md:text-4xl lg:text-4xl font-semibold p-5'>Latest Featured Bikes</p>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            640:{
                slidesPerView:2,
                spaceBetween:20
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30
            }
        }}
      >
        {latestData.map((data,index)=>(
            <SwiperSlide key={index} className='p-3 bg-slate-200'>
                <img src={data.image} alt="Second hand bikes" className='w-full h-64 object-cover'/>
                <div>
                    <h3 className='text-3xl p-4 text-gray-600'>{data.name}</h3>
                    <p className='text-2xl p-4 text-gray-600'>Rs.<span className='font-bold text-blue-500'>{data.price}</span></p>
                </div>
            </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default LatestBikeSlider
