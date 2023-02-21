import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, selectTodos } from '../features/TodosSlice'
import { useForm } from "react-hook-form";

const AddTask = ({openModal , close}) => {
  const {register, handleSubmit , reset} = useForm();
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
 

  
  
  const onSubmit = data => {
    const help = JSON.parse(JSON.stringify(todos))
    help.push(data)
    dispatch(addTodo(help))
    reset({Title:'',
            Description:"",
          status : 'Todo'})
    console.log(data)};
    
  return (
    <div className={`${!openModal ? "visible" : "invisible"} `} >
       <div className=" backdrop-blur-sm fixed inset-0 z-50   ">
            <div className="flex  h-screen justify-center items-center ">
                <div className="flex-col flex  w-1/4 h-[70%] bg-white dark:bg-[#2c2c38] py-6 px-16   rounded-xl ">
                  <p className='dark:text-white text-2xl '>Add New Task</p>
                    <form className='flex flex-col mt-4 w-full'  onSubmit={handleSubmit(onSubmit)}>
                            <label className='dark:text-white flex flex-col mb-4 '>
                              <p className='mb-2 text-xl font-medium'>Title:</p>
                                    <input type="text " {...register("Title")}  placeholder=" e.g. Take Coffee Break" className='bg-transparent rounded-md border border-zinc-500' />
                            </label>
                            <label className='dark:text-white flex flex-col mb-4 '>
                              <p className='mb-2 text-xl font-medium'>Description:</p>
                                    <textarea type="text" {...register("Description")} placeholder=" e.g. Its Always Good To Take A Break.
                                    This 15 Minute Break Will Recharge The Batteries A Little" className='bg-transparent resize-none border border-zinc-500 rounded-md h-32 w-full'/>
                            </label>
                            <label className='dark:text-white flex flex-col mb-4 '>
                              <p className='mb-2 text-xl font-medium'>Sub Tasks:</p>
                                  <div className='flex '><input  type="text" className='bg-transparent rounded-md border border-zinc-500 mb-4 w-full' /></div>  
                                  <button className='dark:bg-white bg-zinc-300 text-black mb-4 rounded-md h-8'>+Add New Sub Task</button>
                            </label>
                            <label className='dark:text-white bg-transparent mb-8 flex flex-col '>
                            <p className='font-medium text-lg mb-2'>Status:</p>
                            <select {...register("status")} className='bg-transparent border  border-zinc-500 rounded-md'>
                                   <option  value="Todo" className='dark:bg-black bg-zinc-200'>Todo</option>
                                   <option value="Doing" className='dark:bg-black bg-zinc-200'>Doing</option>
                                   <option value="Done" className='dark:bg-black bg-zinc-200'>Done</option>
                                   
                            </select>
                            </label>
                            
                                     <button type="submit" className=' text-xl text-white mb-2 h-8 rounded-md bg-[#625fc6] ' onClick={handleSubmit(onSubmit)}>Add New Task</button> 
                    </form>
                    
                    <button className='text-xl text-white bg-red-500 h-9 rounded-md' onClick={close}>close</button>
 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTask