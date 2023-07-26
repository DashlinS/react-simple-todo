import { BsFillTrashFill } from "react-icons/bs"
import TodoList from "./TodoList";

function TodoItem({listItem, index, updateList, listItems}){
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
          <BsFillTrashFill onClick={() => {
            updateList(
              TodoList.filter((li, num) => index !== num)
            );
          }}/>
      </li>
    </>
  )
}

export default TodoItem