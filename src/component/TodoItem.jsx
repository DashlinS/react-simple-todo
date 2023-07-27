import { BsFillTrashFill } from "react-icons/bs"

function TodoItem({listItem, setTodoList, currTodoList, index}){
  return (
      <li onDoubleClick={(e) => {
        if(e.target.style["text-decoration"] === "none"){
          e.target.style["text-decoration"] = "line-through"
        }else {
          e.target.style["text-decoration"] = "none"
        }
        }}
      >{listItem}
      <span>{"  "}</span>
      <BsFillTrashFill onClick={() => {
        setTodoList(
          currTodoList.filter((li, num) => index !== num)
        );
      }}/>    
      </li>
  )
}

export default TodoItem