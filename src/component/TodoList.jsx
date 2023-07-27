import TodoItem from "./TodoItem"
import { BsFillTrashFill } from "react-icons/bs"
import { v4 as uuidv4 } from 'uuid';

function TodoList({currTodoList, setTodoList}){
  return (
      <div>
        {currTodoList.map((listItem, index) => {
          listItem = listItem
            .slice(listItem[0], 1)
            .toUpperCase()
            .concat(listItem.slice(1));
          return (
            <>
              <TodoItem key={uuidv4()} listItem={listItem} index={index} />
              <BsFillTrashFill onClick={() => {
                setTodoList(
                  currTodoList.filter((li, num) => index !== num)
                );
              }}/>
            </>
          )
        })}
      </div>
  )
}

export default TodoList