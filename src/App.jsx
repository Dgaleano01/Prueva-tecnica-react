import { Route, Routes, useLocation } from 'react-router-dom'
import Inicio from './components/Inicio'
import Series from './components/Series'
import Peliculas from './components/Peliculas'
import NavBar from './components/NavBar'
import Tittle from './components/Tittle'
import Footer from './components/Footer'
import './App.css'

function App() {
    const location=useLocation();
    const path=location.pathname;

  return (
    <div className='overflow-hidden'>
    <NavBar/>
    <Tittle titulo={ (path=='/')? 'Titles': path.substring(1) }/>
   <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/Series' element={<Series/>}/>
    <Route path='/Movies' element={<Peliculas/>}/>
   </Routes>
   <Footer/>
   </div>
  )
}

export default App