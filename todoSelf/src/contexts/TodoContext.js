import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos: [
    ],
    addTodo: (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoContextProvider =  TodoContext.Provider;