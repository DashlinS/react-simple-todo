function Input({value, handleOnChange}){
  return (
  <input
    type="text"
    name="todo"
    id="todo"
    value={value}
    onChange={handleOnChange}
  />
  )
}

export default Input