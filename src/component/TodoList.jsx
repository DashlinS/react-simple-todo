import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';

function TodoList({todoList}){
  return (
    <div>
      {todoList.map((listItem) => {
        listItem = listItem
          .slice(listItem[0], 1)
          .toUpperCase()
          .concat(listItem.slice(1));
        return (
          <TodoItem key={uuidv4()} listItem={listItem} index={} updateList={}/>
        )
      })}
    </div>
  )
}

export default TodoList