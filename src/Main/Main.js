import React from 'react'
import Doing from './Doing'
import Todo from './Todo'
import Done from './Done'
import hide from '../photos/hide.svg'



const Main = ({open , setOpen}) => {
  const side = () => {
    setOpen(!open)
  }
  return (
    <div className={` bg-zinc-100 dark:bg-[#21212d] h-full w-full dark:text-[#88909f] flex justify-between ${open ? "pl-[16%]" : ""}`}>
      <Todo/>
      <Doing/>
      <Done/>
      <button className={` w-18 h-12 fixed left-0 bottom-[85px] rounded-r-full bg-[#625fc6] ${open ? "invisible" : "visible"}`} onClick={side}>
        <img src={hide} alt="Logo"  className='w-6  mx-2'/>
        </button>
        
    </div>
 
  )
}

export default Main