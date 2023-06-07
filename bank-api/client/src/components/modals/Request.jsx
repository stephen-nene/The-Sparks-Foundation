import { useState } from 'react'
import Navigation from'../navigation/Navigation'

export default  function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <div className="content">
    <h1>About</h1>   

    </div>
 
    </>
  )
}


