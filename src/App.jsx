import { useState } from "react"
import { useEffect } from "react"
export default function App() {

  const [myData, setMyData] = useState([])

  useEffect(()=>{
    fetch("blogs.json")
     .then(res=>res.json())
     .then(data=>console.log(data))
    
  }, [])
  return (
    <>
    <h2>This is App page here now.</h2>
    </>
  )
}
