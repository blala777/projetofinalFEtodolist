import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        
        <header>
            
            <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} placeholder="Adicionar..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>+</button>
        </header>
        
    )
}