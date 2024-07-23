import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Item from './Item'
import Cart from './Cart'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/product/:id" element={<Item />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
