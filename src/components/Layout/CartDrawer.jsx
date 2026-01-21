import React from 'react'
import { IoMdClose } from 'react-icons/io';

function CartDrawer({drawerOpen, toggleCartDrawer}) {

    

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg 
    trnasform transition-transform duration-300 flex flex-col z-50 ${
    drawerOpen ? "translate-x-0" : "translate-x-full"} 
     `}>
      {/* Close Button */}
      
      <div className="flex justify-end p-4 ">
        <button onClick={toggleCartDrawer} >
            <IoMdClose className="w-6 h-6 text-gray-600" />
         </button>
      </div>

      {/* Cart ciontent with scroollable area */}
      <div className='flex-grow p-4 overflow-y-auto '>
       <h2 className="text-xl"> </h2>
        
      </div>
      
    </div>
    
  )
}

export default CartDrawer;
