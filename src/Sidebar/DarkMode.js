import React from 'react'
import dark from '../photos/icon-dark-theme.svg'
import light from '../photos/icon-light-theme.svg'

const DarkMode = () => {
  const theme = ()=>{
    document.documentElement.classList.toggle("dark")
  }
  return (
    <div className='flex justify-center w-[75%] ml-8 bg-white dark:bg-[#21212d]  '>
        <img src={light} alt="Logo"  className='pl-4 h-6 mt-2'/>
        <div className="form-control px-8">
           <label className="cursor-pointer label">
            <input type="checkbox" className="toggle toggle-primary" onChange={theme}  />
            </label>
        </div>
        <img src={dark} alt="Logo"  className=' h-6 pr-4 mt-2'/>
        
  </div>
  )
}

export default DarkMode