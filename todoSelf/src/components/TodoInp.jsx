import React from 'react'
import { useTodo,TodoContext,TodoContextProvider } from '../contexts';
import { useState } from 'react';
function TodoInp() {
    const [todoToAdd,setTodoToAdd] = useState("");
    const {addTodo} = useTodo();
    const addMethod = (e) => {
        e.preventDefault();
        addTodo({id:Date.now(),completed : false, todo : todoToAdd});
        setTodoToAdd("");
    }
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoToAdd}
                onChange={(e)=>{
                    setTodoToAdd(e.target.value);
                }}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={addMethod}>
                Add
            </button>
        </form>
    );
}

export default TodoInp;