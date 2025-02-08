import React from 'react'
import nakedBike from './../assets/nakedSports.jpg'
import sportsBike from './../assets/sports.jpg'
import commuterBike from './../assets/commuter.webp'
import scooterBike from './../assets/scooter.jpg'
import cruiserBike from './../assets/cruiser.jpg'
import dirtBike from './../assets/dirt.jpg'
import CategoryCard from './CategoryCard'

const bikeData=[
    {name:'Sports Naked',image:nakedBike},
    {name:'Sports',image:sportsBike},
    {name:'Commuter',image:commuterBike},
    {name:'Scooter',image:scooterBike},
    {name:'Cruiser',image:cruiserBike},
    {name:'Dirt',image:dirtBike}
]

const Category = () => {
  return (    
    //flex flex-col justify-center gap-8
    <div className='w-full min-h-full bg-white grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
      {bikeData.map((category,index)=>(
        <CategoryCard key={index} name={category.name} image={category.image}/>
      ))}
    </div>
    
  )
  
}

export default Category
