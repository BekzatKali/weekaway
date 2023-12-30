import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1500px] mx-auto p-4 w-full'>
        <h2 className='text-center text-gray-700 py-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1698612352839-b4987b606084?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1698284473313-517b472ae4d6?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" />
            </div>
            <div>
                <img className='w-full h-full  object-cover' src="https://images.unsplash.com/photo-1673201712131-64e971d8a7dc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1698319361163-69baf7fad322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" />
            </div>
            <div>
                <img className='w-full h-full  object-cover' src="https://images.unsplash.com/photo-1697511178651-2c6b81ec973c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery