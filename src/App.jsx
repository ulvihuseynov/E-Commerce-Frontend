
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './components/products/Product'
import Home from './components/home/Home'

function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
  </Routes>
    </>
  )
}

export default App
