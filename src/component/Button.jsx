function Button({todoList, setTodoList, value, setValue}) {
  return (
  <button
    onClick={(e) => {
      e.preventDefault();
        if(!value || todoList.includes(value)) {
          return;
      }
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
