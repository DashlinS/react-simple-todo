import React from 'react'

function Button({todoList, inputValue, setTodoList, setInputValue}) {
  return (
  <button
      onClick={(e) => {
        e.preventDefault();
        todoList.push(inputValue);
        setTodoList(todoList);
        setInputValue('');
      }}
    >
      Add Item
    </button>
  )
}

export default Button
