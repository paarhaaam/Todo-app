import React from 'react'
import AddTask from '../Task/AddTask'
import { useState } from 'react';
const TaskBtn = () => {
  const [openModal , setOpenModal]=useState(true)
  
  const modal = () => {
    setOpenModal(!openModal)
  } 
  const close = () => {
    setOpenModal(!openModal)
  } 
  return (
      <div>
          <button className='text-white bg-[#625fc6] w-40 h-12 rounded-full text-lg font-medium ' onClick={modal}>
            + Add New Task
          </button>
            <AddTask openModal={openModal} close={close} />

      </div>
        
   
  )
}

export default TaskBtn