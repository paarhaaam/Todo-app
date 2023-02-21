import React from 'react'
import Boards from './Boards'
import DarkMode from './DarkMode'
import Kanban from './Kanban'
import Hide from '../photos/hide.svg'


const Sidebar = ({open , setOpen}) => {

  
  const side = () => {
    setOpen((last)=>!last)
  }
  
  return (
    <div className={`bg-zinc-200 w-[15%] h-full dark:bg-[#2c2c38] flex flex-col  fixed ${open ? "visible" : "invisible"}`}>
        <Kanban/>
        <Boards/>
        <DarkMode/>
        <button className='text-black  flex h-[5%] hover:bg-[#625fc6] justify-center items-center  mt-8 mr-10 rounded-r-full' onClick={side}>
        <img src={Hide} alt="Logo"  className='w-8 pr-2'/>
          <p className='dark:text-zinc-300 text-black'>Hide sidebar</p>
        </button>

    </div>
  )
}

export default Sidebar