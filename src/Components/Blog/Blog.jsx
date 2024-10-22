import React from 'react'
import { FaRegBookmark } from "react-icons/fa";
export default function Blog({item}) {
  return (
    <>
      <div className=' container max-auto border mb-10 bg-red-50 p-10 rounded-lg'>
        <div>
          <div><img className=' w-full object-cover rounded-lg' src={item.cover} alt="" /></div>
          <div className=' flex justify-between py-5 items-center'>
              <div className=' flex gap-3'>
                  <div className=' w-[50px] h-[50px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[3px]'><img className=' rounded-full w-full h-full object-cover' src={item.author_img} alt="author image" /></div>
                  <div>
                    <h2 className=' font-bold'>{item.author}</h2>
                    <p>{item.posted_date}</p>
                  </div>
              </div>
              {/* 1st div Close */}
              <div>
                  <div>
                    <p className=' font-bold flex justify-center items-center gap-3'> <span>{item.reading_time}</span> <span className=' text-green-400 cursor-pointer hover:text-green-700'><FaRegBookmark /></span></p>
                  </div>
              </div>
          </div>
          {/* author info div Close */}
          <h2 className=' text-3xl font-bold'>{item.title}</h2>
          <p className=' py-3'>{item.hashtags}</p>
          <button className=' text-[#6047EC] hover:text-[#7a66f0] font-semibold underline'>Mark as read</button>
          <div className=' mt-3'><hr /></div>
        </div>
      </div>
    </>
  )
}
