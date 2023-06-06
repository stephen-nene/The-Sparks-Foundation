import { useState } from 'react'
import Navigation from'../navigation/Navigation'

export default  function Customers() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>

      
      <h1>Customers</h1>
     
    </>
  )
}


