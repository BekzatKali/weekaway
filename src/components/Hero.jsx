import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] relative'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1560260240-c6ef90a163a4?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute top-0 w-full h-full bg-black/60'>
            <div className='max-w-[1500px] mx-auto'>
                <div className='absolute top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white px-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic forSmallText'>With Weekaway</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam corrupti praesentium error id quisquam veniam sit fugiat sint consequuntur voluptatem. Ad ipsa consequatur corrupti fuga unde quia accusamus laudantium libero!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero