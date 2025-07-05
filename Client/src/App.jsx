
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Registration from './Pages/Registration'
import AdminDashboard from './Admin/AdminDashboard'
import AddtoProduct from './Admin/AddtoProduct'

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
     </Route>
   </Routes>

   <Routes>
    <Route path='admindashboard' element={<AdminDashboard/>}>
    <Route path='addtocart' element={<AddtoProduct/>}/>
    
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
