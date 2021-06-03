import React, { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const removeHandler = (task) => {
      for (let i = 0; i < props.todos.length; i++) {
        
        if(props.todos[i].content === task) {
          
          props.todos.splice(i,1);
          props.newTodos(props.todos);
        }
        
      }
  }

  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item">
              <TodoItem {...todo} key={todo.id} removeHandler={removeHandler} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
