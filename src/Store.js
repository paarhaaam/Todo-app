import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './features/TodosSlice'

const store = configureStore({
    reducer: {
        todos : todosReducer,
    }
})

export default store