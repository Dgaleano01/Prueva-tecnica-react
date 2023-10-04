
function NavBar() {
  return (
    <div>
        <div className='bg-gradient-to-b from-cyan-500 to-sky-600 flex justify-center'>
            <div className='w-9/12 sm:flex sm:justify-between p-3'>
                <div>
                    <h1 className='text-3xl font-semibold text-white'>DEMO Streaming</h1>
                </div>
                <div className=' flex items-center my-3 sm:m-0 text-white'>
                    <p className='mr-5'>Long in</p>
                    <button className='bg-gradient-to-b from-zinc-700 to-zinc-900 p-2'>Start your free trial</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar