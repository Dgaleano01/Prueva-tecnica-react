import { Link } from "react-router-dom";
import record_icon from "../assets/placeholder.png";

function Inicio() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-9/12 py-7 flex flex-col sm:flex-row">
          <Link to={"/Series"}>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-black w-48 h-64 relative flex items-center justify-center m-3">
                <img className="absolute w-80 max-w-none" src={record_icon} />
                <p className="text-white font-semibold text-4xl">SERIES</p>
              </div>
              <p>Popular Series</p>
            </div>
          </Link>

          <Link to={"/Movies"}>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-black w-48 h-64 relative flex items-center justify-center m-3">
                <img className="absolute w-80 max-w-none" src={record_icon} />
                <p className="text-white font-semibold text-4xl">MOVIES</p>
              </div>
              <p>Popular Movies</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
