import React from 'react'
import Logo from './Logo'
import TaskBtn from './TaskBtn'
import SideBtn from './SideBtn'
const Header = ({open}) => {
  return (
    <div className={` bg-zinc-200 dark:bg-[#2c2c38] w-full h-24 flex justify-between items-center ${open ? "pl-[15%]" : ""}` }>
      <Logo/>
      <div className='flex justify-end '>
        <TaskBtn/>
        <SideBtn/>
      </div>
      
    </div>
  )
}

export default Header