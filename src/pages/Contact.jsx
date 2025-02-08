import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <div className='flex-grow'>
            {/* <h1>Contact MotoBike Market</h1>
            <p>We’re always here to help! Whether you have a question, need assistance, or simply want to share your thoughts, 
              we welcome your feedback. Our goal is to provide you with the best possible experience on our platform, so don’t hesitate to reach out.

If you need help with any issues or just want to inquire about our services, shoot us an email at:
Email: motobikemarket@gmail.com</p>
            <h2>Our Contact Info</h2>
            <ul>
              <li>Location: Suryabinayak, Bhaktapur</li>
              <li>Email: motobikemarket@gmail.com</li>
              <li>Business Hours: Sun to Fri, 10 AM - 6 PM</li>
            </ul>     */}
            <h1 className='text-3xl pt-12 font-bold text-black mb-4'>Contact MotoBike Market</h1>
            <p className='text-slate-600 text-xl mb-6'>
                We’re always here to help! Whether you have a question, need assistance, or simply want to share your thoughts, 
                we welcome your feedback. Our goal is to provide you with the best possible experience on our platform, so don’t hesitate to reach out.
                <br />
                If you need help with any issues or just want to inquire about our services, shoot us an email at 
                <span className='text-blue-400'> motobikemarket@gmail.com</span>
            </p>
            <h2 className='text-3xl font-semibold text-black mb-4'>Our Contact Info</h2>
            <ul className='text-slate-600 text-lg'>
              <li className='my-2'>Location: Prithvi Chowk</li>
              <li className='my-2'>Email: <a href='mailto:motobikemarket@gmail.com' className='text-blue-400'>motobikemarket@gmail.com</a></li>
              <li className='my-2'>Business Hours: Sun to Fri, 10 AM - 5 PM</li>
            </ul>    
        </div>
    </div>
  )
}

export default Contact
