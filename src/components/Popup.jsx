import React from 'react'

function Popup({titulo, imagen, description, anio}) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen'>
        <div className='w-full h-full absolute bg-black bg-opacity-75'>
           <div className='w-1/3 h-1/3 bg-white'>
            <img src={imagen} />
           </div> 
           <div>
            <h1>{titulo}</h1>
            <p>{description}</p>
            <p>{anio}</p>
           </div>
        </div>
    </div>
  )
}

export default Popup