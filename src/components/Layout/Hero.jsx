import React from 'react'

function Hero() {
  return (
    <section className='Relative'>
        <img className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'>

        </img>
        <div className='absolute inset-0 flex items-center justify-center bg-black'>
            <div className="p-6 text-center text-white">
                <h1 className='text-4xl font-bold tracking-tight md:text-9xl '>
                    Vacation <br/> Ready
                 </h1>
                 <p className='text-sm tracking-tighter'> </p>
            </div>
        </div>
    </section>

  )
}

export default Hero
