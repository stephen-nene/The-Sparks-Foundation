import { useState } from 'react'
import Navigation from'../navigation/Navigation'

export default  function Customers() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <div className="content">
      <h1>Customers</h1>

    </div>

      
     
    </>
  )
}


