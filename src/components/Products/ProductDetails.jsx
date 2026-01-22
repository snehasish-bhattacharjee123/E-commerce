import React from 'react'

const selectedProduct = {
    name: "Stylish Jacket",
    price:120,
    originalPrice:150,
    description:"this is a Stylish jacjet perfect for any occation",
    brand: "Fashion Brand",
    material:"Lather",
    sizes : ["S","M", "L","XL"],
    colors:["Red", "Black"],
    images:[{
        url:"",
        altText:"Stylish Jacket 1"
    },
    {
        url:"",
        altText:"Stylish Jacket 1"
    }]
}
function ProductDetails() {
  return (
    <div className="p-6">
        <div className='max-w-6xl p-8 bg-white round-lg'>
            <div className='flex flex-col md-flex-row'>
                {/* Left Thumbnail */}
                <div className='flex-col hidden mr-6 space-y-4 md:flex'>
                     {selectedProduct.images.map((images,index) =>{
                        <img 
                        key={index}
                        src={images.url}
                        alt={images.altText || `Thumbnail ${index}`}
                        className="object-cover w-20 h-20 border rounded-lg cursor-pointer"
                        />
                     })}
                </div>

                {/* Main IMage  */}
                <div className='md:w-1/2'>
                    <div className='mb-4'>
                        <img
                        src={selectedProduct.images[0]?.url}
                        alt="Main Product"
                        className='object-cover w-full h-auto rounded-lg'
                        />
                    </div>
                </div>
                {/* Mobile Thumbnail  */}
                <div className="flex mb-4 space-x-4 md:hidden overscroll-x-scroll">
                    {selectedProduct.images.map((images,index) =>{
                        <img 
                        key={index}
                        src={images.url}
                        alt={images.altText || `Thumbnail ${index}`}
                        className="object-cover w-20 h-20 border rounded-lg cursor-pointer"
                        />
                     })}
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
