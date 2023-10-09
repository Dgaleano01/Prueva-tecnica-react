/* eslint-disable react/prop-types */


function Card({titulo,imagen,handleClick}) {
  return (
    <div>
            <div>
      <div className="w-full flex justify-center">
        <div className="w-9/12 py-7 flex flex-col sm:flex-row">

            <div className="w-56 flex flex-col items-center justify-center">
              <div className="bg-black w-full h-full relative flex items-center justify-center">
                <img className="w-full h-64" src={imagen} />
              </div>
              <p className="cursor-pointer" onClick={handleClick}>{titulo}</p>
            </div>

        </div>
      </div>
  </div>
  </div>
  )
}

export default Card