
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './components/products/Product'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Navbar/>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Routes>
    </>
  )
}

export default App
