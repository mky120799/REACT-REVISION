import React from 'react';


const Todo = (props) => {
    const todoItems =props.todoList.map((todo)=><TodoItem todo={todo}/>)
  return (
    <div>
      <ul>{todoItems}</ul>
    </div>
  )
}

export default Todo
