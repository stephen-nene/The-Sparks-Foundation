import { useState } from 'react'
import Navigation from'../navigation/Navigation'
export default  function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>

      
      <h1>Vite + React</h1>
     
    </>
  )
}


