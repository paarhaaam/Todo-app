import { createSlice } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
    name: 'todos',
    initialState : {
        todos : JSON.parse(localStorage.getItem("local"))||[],
       
    },
    reducers : {
        addTodo : (state, action)=>{
            state.todos = action.payload 
            localStorage.setItem("local" , JSON.stringify(action.payload))
        
        }
    }
})

export const {addTodo} = TodosSlice.actions;
export const selectTodos =(state)=> state.todos.todos
export default TodosSlice.reducer