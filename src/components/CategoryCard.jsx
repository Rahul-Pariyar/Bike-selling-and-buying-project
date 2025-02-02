import React from 'react'
import {useNavigate} from 'react-router-dom'


const CategoryCard = ({name,image}) => {
  const navigate=useNavigate()
  return (
    <div className='p-4 w-full h-auto'>
      <button onClick={()=>{navigate("/showCategory")}}>
        <img src={image} alt="bike category" className=''/>
        <p className='text-white text-xl md:text-2xl lg:text-2xl'>{name}</p>
      </button>
    </div>
  )
}

export default CategoryCard
