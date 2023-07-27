function TodoItem({listItem, index, todoList, listItems}){
              console.log(todoList)
  return (
    <>
      <li onDoubleClick={(e) => {
        if(e.target.style["text-decoration"] === "none"){
          e.target.style["text-decoration"] = "line-through"
        }else {
          e.target.style["text-decoration"] = "none"
        }
        }}
        >
          {listItem}
      </li>
    </>
  )
}

export default TodoItem