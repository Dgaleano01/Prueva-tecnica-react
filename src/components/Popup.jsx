/* eslint-disable react/prop-types */
import {AiOutlineClose} from "react-icons/ai";


function Popup({titulo, imagen, description, anio, close}) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen'>
    
        <div className='w-full h-full absolute bg-black bg-opacity-75 flex justify-center items-center'>
        
           <div className='w-9/12 h-5/6 bg-white flex flex-col p-5'>

           <button onClick={close}><AiOutlineClose /></button>

           <div className='w-full h-60 flex justify-center'>
            <img src={imagen} className='w-44 ' />
           </div> 
           <div className='mt-5'> 
            <h1 className='font-semibold text-2xl'>{titulo}</h1>
            <p className='text-sm mt-5'>{description}</p>
            <p className='text-center mt-5 text-xl font-semibold'>{anio}</p>
           </div>
           </div>
        </div>
    </div>


    
  )
}

export default Popup