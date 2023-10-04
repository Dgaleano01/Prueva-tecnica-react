import { Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import Series from './components/Series'
import Peliculas from './components/Peliculas'
import NavBar from './components/NavBar'
import Tittle from './components/Tittle'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
    <NavBar/>
    <Tittle/>
   <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/series' element={<Series/>}/>
    <Route path='/peliculas' element={<Peliculas/>}/>
   </Routes>
   <Footer/>
   </div>
  )
}

export default App