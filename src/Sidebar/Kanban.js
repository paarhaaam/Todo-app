import React from 'react'
import Logo from '../photos/logo-mobile.svg'

const Kanban = () => {
  return (
    <div className='flex h-24 justify-center items-center '>
        <img src={Logo} alt="Logo"  className='pt-2'/>
        <p className='dark:text-white font-bold text-4xl pl-4'>Kanban</p>
    </div>
  )
}

export default Kanban