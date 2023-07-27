function Button({todoList, setTodoList, value, setValue}) {
  return (
  <button
    onClick={(e) => {
      e.preventDefault();
      todoList.push(value);
      setTodoList(todoList);
      setValue('');
    }}
  >
    Add Item
  </button>
  )
}

export default Button
