import { useState } from "react"
import { useEffect } from "react"
import Blog from "./Components/Blog/Blog"
export default function App() {

  const [myData, setMyData] = useState([])
  const [bookMarks, setBookMarks] = useState([])
  const [totalMin, setTotalMin] = useState(0)

  useEffect(()=>{
    fetch("blogs.json")
     .then(res=>res.json())
     .then(data=>{
      setMyData(data)
     })
  }, [])

  const handleBookMarks = (bookMark)=>{
    setBookMarks([...bookMarks, bookMark]);

    
  }

  const handleMin = (minute)=>{
    setTotalMin(totalMin + minute);
  }

  return (
    <>
       <div className="container mx-auto">
       <div className=" flex justify-between items-center py-5 ">
        <div className=" text-2xl font-bold">Knowledge Cafe</div>
        <div className=" w-[50px] h-[50px] bg-gradient-to-r from-blue-500 to-pink-500 p-[3px] rounded-full"><img className=" w-full h-full rounded-full" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile image" /></div>
       </div>
       <hr />
       </div>
       <div className=" container mx-auto mt-5 grid grid-cols-3 gap-5">
          <div className=" col-span-2">{myData.map(item=> <Blog key={item.id} item={item} handleMin={handleMin} handleBookMarks={handleBookMarks}></Blog> )}</div>
          <div>
            <div className=" border-2 border-blue-700 rounded-xl p-6 bg-blue-50 text-center"><h2 className=" font-bold text-xl text-blue-700">Spent time on read : {totalMin} min</h2></div>
            <div className=" bg-slate-100 mt-5 p-5 rounded-xl">
              {bookMarks.map((book, index) => <div className=" bg-white my-3 rounded-xl py-2 px-5" key={index}>
                <div className=" flex justify-between items-center">
                  <div>
                    <h2 className=" font-bold">{book.title}</h2>
                    <p className=" font-medium">{book.author}</p>
                  </div>
                  <div>
                    <button className=" bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-lg">Delete</button>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
       </div>
    </>
  )
}
