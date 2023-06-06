import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'

import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Transactions from '../components/pages/Transactions'
import Customers from '../components/pages/Customers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/transactions' element={<Transactions/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Customers' element={<Customers/>}/>  
    </Routes>
    
  
  )
}

export default App
