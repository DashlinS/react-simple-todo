import React, { useState } from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';
import Input from './component/Input';
import Button from './component/Button';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className="container">
        <main className="mainContainer">
          <Header />
          <form>
            <label htmlFor="toDoList" className="labelText">
              Add Item
            </label>
            <Input
              value={inputValue}
              handleOnChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              todoList={todoList}
              setTodoList={setTodoList}
              value={inputValue}
              setValue={setInputValue}
            />
          </form>
          <ul>
            <TodoList currTodoList={todoList} setTodoList={setTodoList} />
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
