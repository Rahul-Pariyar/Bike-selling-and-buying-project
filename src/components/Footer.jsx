// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className='w-full min-h-100 bg-slate-600 '>
//         <div className='flex items-center justify-center gap-10'>
//             <div className='w-full'>
//                 <p className='text-white text-2xl'>MotoBike Market</p>
//                 <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur assumenda nulla, voluptates soluta est 
//                     molestias quaerat fuga harum totam dolor maiores maxime natus ex. Neque cumque mollitia deleniti consequatur dignissimos?</p>
//             </div>
//             <div className='w-1/2'>
//                 <h2>Company</h2>
//                 <ul>
//                     <li>
//                         <NavLink to='/'>Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/about'>About Us</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/contact'>Contact</NavLink>
//                     </li>
//                     <li>
//                     <NavLink to='/privacy'>Privacy policy</NavLink>
//                     </li>
//                 </ul>
//             </div>
//       </div>
//       <hr />
//       <p>&copy;2025 MotoBikeMarket. All rights reserved</p>
//     </div>
    
//   )
// }

// export default Footer


import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-slate-600 py-8'>
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className='flex flex-wrap justify-between items-start'>
                {/* Left Section */}
                <div className='w-full sm:w-1/2 lg:w-1/3 mb-6'>
                    <p className='text-white text-2xl font-semibold'>MotoBike Market</p>
                    <p className='text-white text-sm mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda nulla, voluptates soluta est 
                        molestias quaerat fuga harum totam dolor maiores maxime natus ex. Neque cumque mollitia deleniti consequatur dignissimos?
                    </p>
                </div>
                
                {/* Right Section */}
                <div className='w-full sm:w-1/2 lg:w-1/3 mb-6'>
                    <h2 className='text-white text-xl font-semibold'>Company</h2>
                    <ul className='text-white text-sm mt-2'>
                        <li className='my-2'>
                            <NavLink to='/' className='hover:text-yellow-400' onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink to='/about' className='hover:text-yellow-400' onClick={() => window.scrollTo(0, 0)}>About Us</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink to='/contact' className='hover:text-yellow-400' onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink to='/policy' className='hover:text-yellow-400' onClick={() => window.scrollTo(0, 0)}>Privacy Policy</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='border-t border-white' />
        <div className='text-center text-white text-sm py-4'>
            <p>&copy; 2025 MotoBike Market. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
