import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='py-12 border-t '>
    <div className='container grid gap-8 px-4 mx-auto grid-col-1 md:gid-col-4 lg:px-0 '>
        <div>
            <h3 className="mb-4 text-lg text-gray-300"> NewsLetter</h3>
            <p className='mb-4 text-gray-500 '>
                lo
            </p>
            <p>LO</p>

            {/* NewsLetter Form */}
            <form className="flex">
                <input 
                    type='email'
                    placeholder='Enter yur email'
                    className='w-full p-3 text-sm transition-all border border-t border-b border-l border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300'
                    required
                />
                </form>
                <button type='submit' className="px-6 py-3 text-sm text-white bg-black rounded-r-md hover:bg-gray-800 trasnition-all">

                    Subscribe
                </button>
        </div>

        {/* Shop Link */}
        <div>
            <h3 className='mb-4 text-lg text-gray-800'>Shop</h3>
            <ul className='space-y-2 text-gray-600'>
                <li>
                    <Link to="#" className='transition-colors hover:text-Gray-500'></Link>
                    
                </li>
                <li>
                    <Link to="#" className='transition-colors hover:text-Gray-500'></Link>
                    
                </li>
                <li>
                    <Link to="#" className='transition-colors hover:text-Gray-500'></Link>
                    
                </li>"
                <li>
                    <Link to="#" className='transition-colors hover:text-Gray-500'></Link>
                    
                </li>
                <li>
                    <Link to="#" className='transition-colors hover:text-Gray-500'></Link>
                    
                </li>
                <li>
                    <Link to="#" className='transition-colors hover:text-Gray-500'></Link>
                    
                </li>
            </ul>
        </div>

        {/* Follow US  */}
        <div>
            <h3 className='mb-4 text-lg text-gray-300 '>
                Follow Us
            </h3>
            <div className='flex items-center mb-6 space-x-4'>
                <a href=""
                target='blank'
                rel="noopner noreferre"
                className='hover: '></a>
            </div>
        </div>
        
    </div>

    </footer>
  )
}

export default Footer
