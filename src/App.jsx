
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './components/products/Product'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'
import Login from './components/auth/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'

function App() {

  return (
    <>
    <Navbar/>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/' element={<PrivateRoute publicPage/>}>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
    </Route>

  </Routes>
  <Toaster position='bottom-center'/>
    </>
  )
}

export default App
