import { useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../libs/data";
import Loading from "./Loading";
import Popup from "./Popup";

function Series() {
  const [data, setData] = useState([])
const [load, setLoad] = useState(true)
const [popup, setPopup] = useState(false)
const [movie, setMovie]= useState({});

  const getSerie = async ()=>{
    setData( await getData('series'));
    setLoad(false)
  }

  function handleClick(movie){
    setPopup(true);
    setMovie(movie);
    console.log(movie)
  }

  
  useEffect(() => {

    getSerie()
  }, []);




if(load){
  return(<Loading/>)
}

  return (
    <div className="flex flex-wrap justify-center">
    {
      data.map((serie)=>{
          return <Card handleClick={()=>handleClick(serie)} titulo={serie.title} imagen={serie.images["Poster Art"].url} key={serie.title}
            
          />

      })
    }
    {popup && <Popup titulo={movie.title} imagen={movie.images["Poster Art"].url} description={movie.description} anio={movie.releaseYear}/>}
    </div>
  );

}

export default Series;
