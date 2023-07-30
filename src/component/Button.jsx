function Button({todoList, setTodoList, value, setValue}) {
  return (
  <button
    onClick={(e) => {
      e.preventDefault();
        if(value === '') {
        window.alert('Please Enter an item')
      }
      else{
      todoList.push(value);
      setTodoList(todoList);
      setValue('');
      }
    }}
  >
    Add Item
  </button>
  )
}

export default Button
