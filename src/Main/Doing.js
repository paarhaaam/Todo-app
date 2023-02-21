import React from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from '../features/TodosSlice'

const Doing = () => {
  const doingcards = useSelector(selectTodos)
  return (
    
    <div className='w-full text-2xl font-medium flex'>
        <div className='w-4 h-4 rounded-full bg-purple-600 mt-2' ></div>
        <p className='pl-2'>Doing </p>
        <div className='w-full flex flex-col mt-14 '>
          
          {doingcards.filter((item)=>item.status === "Doing").map((item)=>{
          return   <div className='w-3/4 h-[10rem] bg-zinc-600 my-4 rounded-2xl dark:bg-[#2c2c38]  bg-zinc-500' key={Math.random()*1000} >
           <p className='text-white   font-bold pt-4 text-3xl my-4 text-center' >{item.Title}</p>
           <p className='text-white  font-bold text-lg my-4 text-center' >{item.Description}</p>
           </div>
        })}
        </div>
    </div>
  )
}

export default Doing