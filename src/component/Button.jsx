function Button({todoList, setTodoList, value, setValue}) {
  return (
  <button
    onClick={(e) => {
        if(value === '') {
        window.alert('Please Enter an item')
      }
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
