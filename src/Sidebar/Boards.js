import React from 'react'
import icon from '../photos/icon-board.svg'
import { Link } from 'react-router-dom'
const Boards = () => {
  return (
    <div className='h-[70%]  '>
      <p className='dark:text-zinc-300 pl-9 pb-4 text-xl'>All Boards</p>
        <div className='flex dark:text-zinc-300 h-12 items-center text-xl  mb-2 hover:bg-[#625fc6] pl-8 mr-10 rounded-r-full'>
            <img src={icon} alt="Logo" className='pr-2  h-5 ' />  
            <Link to='/'>Platform Launch</Link>
        </div>
        <div className='flex dark:text-zinc-300 h-12 items-center text-xl  mb-2 hover:bg-[#625fc6] pl-8 mr-10 rounded-r-full'>
            <img src={icon} alt="Logo" className='pr-2  h-5 ' />  
            <Link to='/MarketingPlan'>Marketing Plan</Link>
        </div>
        <div className='flex dark:text-zinc-300 h-12 items-center text-xl  mb-2 hover:bg-[#625fc6] pl-8 mr-10 rounded-r-full'>
            <img src={icon} alt="Logo"  className='pr-2  h-5 '/>  
            <Link to='Roadmap'>Roadmap</Link>
        </div>
    </div>
  )
}

export default Boards