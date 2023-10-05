// eslint-disable-next-line react/prop-types
function Tittle({titulo}) {
  return (
    <div>
        <div className='bg-zinc-800 w-full flex justify-center py-3'>
            <div className='w-9/12'>
                <h2 className='text-white text-2xl'>Popular {titulo}</h2>
            </div>
        </div>
    </div>
  )
}

export default Tittle