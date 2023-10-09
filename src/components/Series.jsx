import { useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../libs/data";
import Loading from "./Loading";
import Popup from "./Popup";
import Error from "./Error";

function Series() {
  const [data, setData] = useState([])
const [load, setLoad] = useState(true)
const [popup, setPopup] = useState(false)
const [serie, setSeries]= useState({});
const [error, setError] = useState(false);

  const getSerie = async ()=>{
    try {
      setData( await getData('series'));
    } catch (error) {
      setError(true);
    }
      setLoad(false)
  }

  function handleClick(serie){
    setPopup(true);
    setSeries(serie);
    console.log(serie)
  }

  
  useEffect(() => {
    getSerie()
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
      data.map((serie)=>{
          return <Card handleClick={()=>handleClick(serie)} titulo={serie.title} imagen={serie.images["Poster Art"].url} key={serie.title}
            
          />

      })
    }
    {popup && <Popup titulo={serie.title} imagen={serie.images["Poster Art"].url} description={serie.description} anio={serie.releaseYear} close={()=> setPopup(false)} />}
    </div>
  );

}

export default Series;
