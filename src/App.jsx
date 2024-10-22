import { useState } from "react"
import { useEffect } from "react"
import Blog from "./Components/Blog/Blog"
export default function App() {

  const [myData, setMyData] = useState([])

  useEffect(()=>{
    fetch("blogs.json")
     .then(res=>res.json())
     .then(data=>{
      setMyData(data)
      console.log(data);
      
     })
     
     
    
  }, [])
  return (
    <>
       <div className="container mx-auto">
       <div className=" flex justify-between items-center py-5 ">
        <div className=" text-2xl font-bold">Knowledge Cafe</div>
        <div className=" w-[50px] h-[50px] bg-gradient-to-r from-blue-500 to-pink-500 p-[3px] rounded-full"><img className=" w-full h-full rounded-full" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile image" /></div>
       </div>
       <hr />
       </div>
       <div className=" container mx-auto border-2 border-red-500 grid grid-cols-3 gap-5">
          <div className=" col-span-2">{myData.map(item=> <Blog key={item.id} item={item}></Blog> )}</div>
          <div>
            <div className=" border-2 border-blue-700 rounded-xl p-6 bg-blue-50 text-center"><h2 className=" font-bold text-xl text-blue-700">Spent time on read : 177 min</h2></div>
          </div>
       </div>
    </>
  )
}
