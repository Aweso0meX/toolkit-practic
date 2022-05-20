import { configureStore } from '@reduxjs/toolkit'
import { toDoReducer } from './ToDoSlice'

export const store = configureStore( {
  reducer: { todos: toDoReducer }
} )