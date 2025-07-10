
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Registration from './Pages/Registration'
import AdminDashboard from './Admin/AdminDashboard'
import AddtoProduct from './Admin/AddtoProduct'
import Cartdata from './Cartdata'
import Checkout from './Checkout'
import Order from './Admin/Order'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='registration' element={<Registration/>}/>
     <Route path='cartdata' element={<Cartdata/>}/>
     <Route path='checkout' element={<Checkout/>}/>
     </Route>
   </Routes>

   <Routes>
    <Route path='admin' element={<AdminDashboard/>}>
    <Route path='addProduct' element={<AddtoProduct/>}/>
    <Route path='order' element={<Order/>}/>
    
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
