import Card from "./Card";
import { useEffect, useState } from "react";
import { getData } from "../libs/data";
import Loading from "./Loading";
import Error from "./Error";

function Peliculas() {
  const getSerie = async ()=>{
    try {
      setData( await getData('movie'));
    } catch (error) {
      setError(true);
    }
      setLoad(false)
  }
  useEffect(() => {
    getSerie()
  }, []);
  const [data, setData]=useState([])
  const [load, setLoad] = useState(true)
  const [error,setError] = useState(false);

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
          return <Card titulo={movie.title} imagen={movie.images["Poster Art"].url} key={movie.title}/>
      })
    }
    </div>
  )
}

export default Peliculas