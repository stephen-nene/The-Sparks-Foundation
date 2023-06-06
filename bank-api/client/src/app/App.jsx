import { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import Home from '../components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
     
    </>
  )
}

export default App
