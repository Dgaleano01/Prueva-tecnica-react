import Card from "./Card";
import { useEffect, useState } from "react";
import { getData } from "../libs/data";
import Loading from "./Loading";
import Error from "./Error";
import Popup from "./Popup";

function Peliculas() {
  const [data, setData]=useState([])
  const [load, setLoad] = useState(true)
  const [movie, setMovie]= useState({});
  const [popup, setPopup] = useState(false)
  const [error,setError] = useState(false);

  const getMovie = async ()=>{
    try {
      setData( await getData('movie'));
    } catch (error) {
      setError(true);
    }
      setLoad(false)
  }

  function handleClick(movie){
    setPopup(true);
    setMovie(movie);
    console.log(movie)
  }

  useEffect(() => {
    getMovie()
  }, []);


if(load){
  return(<Loading/>)
}
if(error){
  return(<Error/>)
}

  return (
    <div className="flex flex-wrap justify-center">
    {
      data.map((movie)=>{
          return <Card handleClick={()=>handleClick(movie)} titulo={movie.title} imagen={movie.images["Poster Art"].url} key={movie.title}/>
      })
    }
    {popup && <Popup titulo={movie.title} imagen={movie.images["Poster Art"].url} description={movie.description} anio={movie.releaseYear} close={()=> setPopup(false)} />}
    </div>
  )
}

export default Peliculas